import { sum } from './calculator'

describe('test sum operation', () => {
	it('sums correctly', () => {
		expect(sum(1, 5)).toBe(6);
		expect(sum(100, 100)).toBe(200);
	});

	it('doenst break when one or no parameters are passed', () => {
		expect(sum(1)).toBe(1);
		expect(sum()).toBe(0);
		expect(sum('asdasd', 'asdasd')).toBeNaN()
	});
})