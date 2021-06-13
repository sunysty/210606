// + - * % /

// and && , or ||
// && = 모두 참
// || = 하나라도 참이라면 참

const bool1 = true //항상 참
const bool2 = false //이친구가 간헐절으로 true, false
const bool3 = true //항상 참

if (bool2 && bool1 && bool3) {
  console.log('모두 참입니다')
}

if (bool1 || bool2 || bool3) {
  console.log('참입니다')
}

/**
 * falsy
 * undefined, null, 0, ''
 */

const u = 0

if (u) {
  //동작x
}

/*
*== vs ===
타입까지 비교하기 위해 항상 ===을 써줘야 한다
*/
