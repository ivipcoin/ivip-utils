export default class Base64 {
	private keyStr: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	constructor(private value: string) {}

	static utf8_encode(value: string): string {
		let e = value.replace(/rn/g, "n");
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r);
			} else if (r > 127 && r < 2048) {
				t += String.fromCharCode((r >> 6) | 192);
				t += String.fromCharCode((r & 63) | 128);
			} else {
				t += String.fromCharCode((r >> 12) | 224);
				t += String.fromCharCode(((r >> 6) & 63) | 128);
				t += String.fromCharCode((r & 63) | 128);
			}
		}
		return t;
	}

	static utf8_decode(value: string): string {
		let t = "";
		let n = 0;
		let r = 0,
			c1 = 0,
			c2 = 0,
			c3 = 0;
		while (n < value.length) {
			r = value.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r);
				n++;
			} else if (r > 191 && r < 224) {
				c2 = value.charCodeAt(n + 1);
				t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
				n += 2;
			} else {
				c2 = value.charCodeAt(n + 1);
				c3 = value.charCodeAt(n + 2);
				t += String.fromCharCode(((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				n += 3;
			}
		}
		return t;
	}

	encode(): string {
		let t = "";
		let n: number, r: number, i: number, s: number, o: number, u: number, a: number;
		let f = 0;
		let e = Base64.utf8_encode(this.value);
		while (f < e.length) {
			n = e.charCodeAt(f++);
			r = e.charCodeAt(f++);
			i = e.charCodeAt(f++);
			s = n >> 2;
			o = ((n & 3) << 4) | (r >> 4);
			u = ((r & 15) << 2) | (i >> 6);
			a = i & 63;
			if (isNaN(r)) {
				u = a = 64;
			} else if (isNaN(i)) {
				a = 64;
			}
			t = t + this.keyStr.charAt(s) + this.keyStr.charAt(o) + this.keyStr.charAt(u) + this.keyStr.charAt(a);
		}
		return t;
	}

	static encode(value: string): string {
		return new Base64(value).encode();
	}

	decode(): string {
		let t = "";
		let n: number, r: number, i: number;
		let s: number, o: number, u: number, a: number;
		let f = 0;
		let e = this.value.replace(/[^A-Za-z0-9+/=]/g, "");

		while (f < e.length) {
			s = this.keyStr.indexOf(e.charAt(f++));
			o = this.keyStr.indexOf(e.charAt(f++));
			u = this.keyStr.indexOf(e.charAt(f++));
			a = this.keyStr.indexOf(e.charAt(f++));
			n = (s << 2) | (o >> 4);
			r = ((o & 15) << 4) | (u >> 2);
			i = ((u & 3) << 6) | a;
			t = t + String.fromCharCode(n);
			if (u != 64) {
				t = t + String.fromCharCode(r);
			}
			if (a != 64) {
				t = t + String.fromCharCode(i);
			}
		}

		t = Base64.utf8_decode(t);
		return t;
	}

	static decode(value: string): string {
		return new Base64(value).decode();
	}
}
