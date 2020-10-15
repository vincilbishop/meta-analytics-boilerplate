import { Question1 } from './question1'
import * as table from 'console.table'

describe('StatisticsService', () => {
    let control
    let subject
    beforeEach(() => {
        control = Question1.control
        subject = Question1.subject
    })

    it('should compute the mean value/time for the control', () => {
        const actual = control.meanRate()
        // See: https://jestjs.io/docs/en/expect#expectvalue
        expect(actual).toEqual(0.441)
    })

    it('should compute the mean value/time for the subject', () => {
        const actual = subject.meanRate()
        expect(actual).toEqual(0.319)
    })

    it('should solve for the subject problem', () => {
        const actual = subject.solve()
        // See: https://github.com/bahmutov/console.table
        const result = table.getTable(actual)
        console.log(result)
        expect(actual).toBeTruthy()
    })
})
