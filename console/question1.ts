import * as _ from 'lodash'
import * as stats from 'simple-statistics'

// This is Typescript: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

export class Model {
    constructor(name: string, value: number, time: number) {
        this.name = name
        this.value = value
        this.time = time
    }
    name: string
    value: number = 0
    time: number = 0
    get rate() {
        return this.value / this.time
    }
}

export class Question1 {
    /**
     * Possibly model the example using this method.
     * Check the output against the known correct answer.
     *
     * @readonly
     * @static
     * @memberof Question1
     */
    static get control() {
        const models = [
            new Model('1', 0.99, 1.0),
            new Model('2', 0.5, 2.0),
            new Model('3', 0.25, 3.0),
        ]
        return new Question1(models)
    }

    /**
     * Model the problem with the unknown output here.
     *
     * @readonly
     * @static
     * @memberof Question1
     */
    static get subject() {
        const models = [
            new Model('1', 0.98, 1.5),
            new Model('2', 0.51, 2.2),
            new Model('3', 0.26, 3.6),
        ]
        return new Question1(models)
    }

    constructor(models: Array<Model>) {
        this.models = models
    }

    models: Array<Model>

    get rates() {
        // See: https://lodash.com/docs/#map
        const rates = _.map(this.models, (model) => {
            return model.rate
        })

        return rates
    }

    meanRate() {
        // See: https://simplestatistics.org/docs/#mean
        return +stats.mean(this.rates).toFixed(3)
    }

    solve() {
        return [
            {
                mean: +stats.mean(this.rates).toFixed(3),
                mode: +stats.mode(this.rates).toFixed(3),
                median: +stats.median(this.rates).toFixed(3),
            },
            {
                mean: +stats.mean(this.rates).toFixed(3),
                mode: +stats.mode(this.rates).toFixed(3),
                median: +stats.median(this.rates).toFixed(3),
            },
            {
                mean: +stats.mean(this.rates).toFixed(3),
                mode: +stats.mode(this.rates).toFixed(3),
                median: +stats.median(this.rates).toFixed(3),
            },
        ]
    }
}
