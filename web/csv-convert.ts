const Papa = require('papaparse');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
/*
 async loadData() {
    return new Promise((resolve, reject) => {
      this.papa.parse(csv, {
        complete: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
 */

async function main() {
  const pathPrefix = path.join(__dirname, 'src/assets/data/');
  const fileNames = ['1.csv', '2.csv', '3.csv', '4.csv', '5.csv', '6.csv', '7.csv'];

  const data = {};

  let previous = null;
  for (const fileName of fileNames) {
    await new Promise((resolve, reject) => {
      const year = fileName.split('_')[0];
      const csv = fs.readFileSync(path.join(pathPrefix, fileName), { encoding: 'utf8', flag: 'r' });

      Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const yearData = _.map(result.data, (item) => {
            const updated: any = {};
            _.forIn(item, (value, key, object) => {
              const numeric = Number(value);
              const lowerKey = key.toLowerCase();
              if (Number.isNaN(numeric)) {
                updated[lowerKey] = value;
              } else {
                updated[lowerKey] = numeric;
              }
            });
            updated.id = `${year}_${updated.week}`;
            updated.previous_id = previous;
            previous = updated.id;
            return updated;
          });
          console.log(yearData);
          data[year] = yearData;
          resolve(yearData);
        },
        error: (error) => {
          console.error(error);
          reject(error);
        },
      });
    });
  }

  fs.writeFileSync(path.join(pathPrefix, 'data.json'), JSON.stringify(data, null, 2));
}

main();
