/*
* for while
그냥 생 for while은 잘 안씀

* for of, for in => [], {}
를 오히려 많이 씀
*/

/*
*if, else
*switch
많이 씀

* 그렇다면 언제 쓰지?
- 조건 3개 이상 넘어가면 switch
- 3개 아래면 if
- 2개면 삼항연산자

실제 현업에서는 생 조건문보다는, 배열에서 조건문을 많이 씀
*/

const bool1 = true
const bool2 = false
const bool3 = false

const type = 'A'

switch (false) {
  case 'A' === 'd': {
  }
  case 'B' === 'c': {
  }
}

/*
* 삼항연산자

if (response === 'SUCCESS'){
    result = '성공'
} else{
    result = '실패'
}
*/

const response = 'SUCCESS'

const result = response === 'SUCCESS' ? '성공' : '실패'
