//var
var foo = ''
var foo2 = 10
var foo3 = true
var foo4 = {}
var foo5 = function () {}

foo5 = {}
foo3 = 100

//ES6 let, const {}
//var는 아예안쓰고, let도 잘안쓰고, 거의 const쓴다.
//재사용성 때문에

let f1 = 'f1'
let f2 = 20

f1 = 20
f2 = 'f1'

//const 상수
//거의 const만 씀
//값이 변화하지 않는다
const c1 = 'c1'
const c2 = 2000
