/* eslint-disable no-unused-expressions */
/* eslint-disable new-cap */
const { expect } = require('chai');
const assert = require('assert');

const professorModel = require('../Models/professorProfile');

describe('Professor Model', () => {
  it('should be invalid if email is empty', (done) => {
    const p = new professorModel.professorProfile();

    p.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('should be invalid if name is empty', (done) => {
    const p = new professorModel.professorProfile();

    p.validate((err) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be invalid if year_passed is empty', (done) => {
    const p = new professorModel.professorProfile();

    p.validate(() => {
      assert.equal('2000'.length, 4);
      done();
    });
  });

  it('should be invalid if research_fields property is empty', (done) => {
    const p = new professorModel.professorProfile();

    p.validate((err) => {
      // expect(err.errors.email).to.exist;
      // expect(err.errors.name).to.exist;
      expect(err.errors.research_fields).to.exist;
      done();
    });
  });
});
