function debounce(ms: number): MethodDecorator {
	let timeout: number | null;
	let result: unknown;
	return function (_target: object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
		return {
			...descriptor,
			value: (...args: unknown[]) => {
				timeout ? clearTimeout(timeout) : null;
				timeout = setTimeout(() => {
					timeout = null;
					result = descriptor.value(...args);
				}, ms);
				return result;
			}
		};
	};
}

class MathLib {
	@debounce(1000)
	public circleArea(r: number): number {
		const result: number = Math.PI * r ** 2;
		console.log(result);
		return result;
	}
}

let m = new MathLib();

m.circleArea(100);
m.circleArea(10);
m.circleArea(2);
