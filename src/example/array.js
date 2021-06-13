/*
 *[]
 *[10, 'string', true]
    하나의 배열안에 다양한 타입을 넣을 수는 있지만, 그런경우는 거의 없다
 */

/*
1. 배열의 값 추가

- push
원본을 건드리는걸 하지 말자는 요즘의 태새, 그래서 잘 쓰지 않는다

- spread 전개구문
 */

const jobs = ['dev', 'design']
jobs.push('기획자')

const newJobs = jobs
newJobs.push = ['pm']
//erro

//이전에 추가했떤 값을 찾아서 그 값을 원본배열에서 제거하고 다시 세팅한다
//너무 귀찮은 과정

const newJobs = [...jobs, 'pm'] //여기다가 작업을 하고
// newJobs.push = ['pm']

//error newJobs 버린다
//원본을 쓴다


console.log(jobs)



/**
 * array.map
 * =>기존의 배열을 가지고 새로운 배열을 만든다
 */

const numbers = [1,2,3,4]

const result = number.map((n) => {
    result n * 2
})//원본배열을 손상시키지 않고, 새로운 배열을 만들수 있다.

console.log(numbers)
console.log(result)

/**
 * reduce
 * => 기본 배열을 가지고 무엇이든 만들 수 있는 함수
 * 
 * 배열의 최고 값
 * 
 * 이전의 값보다 지금의 값이 크다면 return
 */

const maxValue = numbers.reduce((prev, current) => { 
    // 0,1 => 1,2
    return current > prev ? current : prev
}, 0)

console.log(maxValue)


/*
 * some, every
 * some = ||
 * every = &&
 */

numbers.every((n) => {
    return n === 1
})
numbers.some((n) => {
    return n === 1
})

/**
 * filter
 */

numbers.filter((n) => n !== 1)