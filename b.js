import {funcA} from './a.js'
funcA();
function funcB(){
	console.log(funcA);
}
export {
	funcB
}