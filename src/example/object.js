/**
 * 모든 객체의 최상위
 * 정보를 구조화 할때 사용
 *
 */

//리터럴 방식
const user = {
  name: '',
  age: '',
}

console.log(user['name']) //객체의 값을 가져오는 방법
user['name'] = '재할당' // 객체의 값을 재할당 하는 방법

/*
 * 객체의 키값들만 빼오고 싶을때
 * Object.keys
 *
 * 값만 빼오고 싶을때
 * Objext.values
 */

Object.keys(user)
Object.values(user)
