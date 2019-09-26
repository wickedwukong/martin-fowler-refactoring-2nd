import {expect} from 'chai';
import {HeatingPlan, temperatureAlerts} from '../../src/chp11/PreserveWholeObject1'

describe('temperatureAlerts', () => {
    it('should not report alert when room low and high temperature are in range', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: 1,
                high: 2
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql([]);
    });

    it('should report alert when room low temperature is outside range', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: -1,
                high: 2
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql(["room temperature went outside range"]);
    });

    it('should report alert when room high temperature is outside range', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: 1,
                high: 4
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql(["room temperature went outside range"]);
    });
});
