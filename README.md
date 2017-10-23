demo to show the difference between webpack3 and webpack
webpack3: 3.5.5
webpack2: 2.4.0

同一份代码，经过webpack3 和 webpack2编译后分别在如下目录
dist/bundle3.js
dist/bundle2.js


源码为
``` js
// a.js
function funcA(){
	console.log(funcA);
}
export {
	funcA
}

// ...

// index.js
import {funcA} from './a.js'
funcA();
function test(){
	console.log('liuhui');
}
function test2(){
	console.log('liuhui01');
}
export {
	test,
	test2
}
```

可以看到基本webpack代码是一样的

webpack2编译完后，数组中有两个函数，分别为a.js和index.js

bundle2.js如下
``` js
[
	(function (module, __webpack_exports__, __webpack_require__) {
		"use strict";
		__webpack_require__.d(__webpack_exports__, "a", function () { return funcA; });
		function funcA() {
			console.log(funcA);
		}
	}),
	(function (module, __webpack_exports__, __webpack_require__) {
		"use strict";
		Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
		var __WEBPACK_IMPORTED_MODULE_0__a_js__ = __webpack_require__(0);
		__webpack_require__.d(__webpack_exports__, "test", function () { return test; });
		__webpack_require__.d(__webpack_exports__, "test2", function () { return test2; });
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__a_js__["a"])();
		function test() {
			console.log('liuhui');
		}
		function test2() {
			console.log('liuhui01');
		}
	})
]
```

webpack3打完包后，将a.js和index.js合并到一起了，减少了一些不必要的代码

bundle3.js如下

``` js
[
	(function (module, __webpack_exports__, __webpack_require__) {
		"use strict";
		Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
		function funcA() {
			console.log(funcA);
		}
		__webpack_require__.d(__webpack_exports__, "test", function () { return test; });
		__webpack_require__.d(__webpack_exports__, "test2", function () { return test2; });
		funcA();
		function test() {
			console.log('liuhui');
		}
		function test2() {
			console.log('liuhui01');
		}
	})
]
```