import {expect} from 'chai';
import {readingsOutsideRange, NumberRange} from '../../src/chp6/IntroduceParameterObject'

const station = {
    name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};

const operationPlan = {
    temperatureFloor: 51,
    temperatureCeiling: 53
};

describe('readingsOutsideRange', () => {
    it('give the reading outside temperature outside range', () => {
        const range = new NumberRange(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

        let alerts = readingsOutsideRange(station, range);

        expect(alerts).to.eql([{temp: 47, time: "2016-11-10 09:10"}, {temp: 58, time: "2016-11-10 09:30"}]);
    });

});
