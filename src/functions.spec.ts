import { average } from './functions';

describe('Test functions', () => {
    it('Test average', () => {
        expect(average('1', 1)).toEqual(`Average is 1`);
        expect(average(3, '3')).toEqual(`Average is 3`);
        expect(average(2, 4, 3)).toEqual(`Average is 4`);
    })
})
