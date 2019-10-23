import {expect} from 'chai';
import {score, ScoringGuide} from '../../src/chp11/ReplaceFunctionWithCommand'

describe('score', () => {
    it('gives a score to a smoker with low original state', () => {
        const lowCertificationStateCandidate = {
            originState: 4
        };

        const smokerMedicalExam = {
            isSmoker: true
        };

        expect(score(lowCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(-10)
    });

    it('gives a score to a smoker with high original state', () => {
        const lowCertificationStateCandidate = {
            originState: 5
        };

        const smokerMedicalExam = {
            isSmoker: true
        };

        expect(score(lowCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(-5)
    });

    it('gives a score to a NON-smoker with low original state', () => {
        const lowCertificationStateCandidate = {
            originState: 4
        };

        const smokerMedicalExam = {
            isSmoker: false
        };

        expect(score(lowCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(-5)
    });

    it('gives a score to a NON-smoker with hight original state', () => {
        const lowCertificationStateCandidate = {
            originState: 5
        };

        const smokerMedicalExam = {
            isSmoker: false
        };

        expect(score(lowCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(0)
    });
});
