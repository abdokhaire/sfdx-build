import { expect, test } from '@salesforce/command/lib/test';
import { testSetup } from '@salesforce/core/lib/testSetup';
import { stubMethod } from '@salesforce/ts-sinon';
import {  Packagexml } from '../../../src/util';
// import { fs } from '@salesforce/core';

const $$ = testSetup();
describe('build:fetch:xml', () => {
    /*
    // let testData: MockTestOrgData;
    // Stub out your own method
    beforeEach(async () => {
    });
    */

    // testData = new MockTestOrgData();

    stubMethod($$.SANDBOX, Packagexml.prototype, 'build').callsFake(() => {
        return Promise.resolve('xml test');
    });

    const ts = test
    .withOrg({ username: 'test@org.com' }, true)
    .stdout();

    ts.command(['build:fetch:xml', '-u', 'test@org.com'])
    .it('runs build:fetch:xml -u test@org.com', ctx => {
      expect(ctx.stdout).to.contain('xml');
    });

});
