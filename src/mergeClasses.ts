const findProtoNames = (i: object): string[] => {
	let names: string[] = [];
	let c: Function = i.constructor;
	do {
		const n = Object.getOwnPropertyNames(c.prototype);
		names = names.concat(n.filter((s) => s !== "constructor"));
		c = Object.getPrototypeOf(c);
	} while (c.prototype);

	return names;
};

const wrapProto = (i: object): object => {
	const names = findProtoNames(i);
	const o: { [key: string]: (...args: any[]) => any } = {};
	for (const name of names) {
		if (typeof i[name] !== "function") {
			continue;
		}
		o[name] = function (this: any, ...args: any[]) {
			return i[name].apply(i, args);
		};
	}
	return o;
};

const assignProperties = (a: object, b: object): object => {
	for (const propName of Object.keys(b)) {
		if (a.hasOwnProperty(propName)) {
			continue;
		}

		Object.defineProperty(a, propName, {
			get: function () {
				return b[propName];
			},
			set: function (value) {
				b[propName] = value;
			},
		});
	}

	return a;
};

const mergeClasses = (a: object, b: object): object => {
	if (b.constructor.name === "Object") {
		return Object.assign(a, b);
	} else {
		const wrapper = wrapProto(b);
		a = assignProperties(a, b);
		return assignProperties(a, wrapper);
	}
};

export default mergeClasses;
