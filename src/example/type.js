/*
 Javascript 타입 0

 * - 원시타입(기본타입)
 String = 문자열
 number = 숫자
 booldean= 논리값
 null = null
 undefined = undefined
 symbol = symbol

 *기본타입 외에는 다 object(함수, 객체...)
 *-객체
  object = object
  function = object
*/

/*
 *null vs undefined

 null = 정말 아무것도 없는 상태
 undefined = 선언은 되어있지만 값이 할당되지 않은 상태
*/

console.dir({})

function foo() {}
console.log(foo)

/*
Typescript
*/

/*
@param {number} a
@param {number} a
returns number

function add(a,b){
    if (typeof a === 'number' || typeof b === 'number') ==={
        return a + b
    }
}

function add(a:Number, b:number): number{
    return a + b
}

add('이', '름');
*/
