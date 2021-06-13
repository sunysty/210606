import User from './user'
import AdminSystem from '.'

describe('User Admin', () => {
  it('create user', () => {
    const user = new User('사원1', 30)
    expect(user.name).toBe('사원1')
  })

  it('user 한명을 추가하면 AdminSystem의 유저배열의 length은 1이 된다', () => {
    const adminSystem = new AdminSystem()

    adminSystem.addUser('사원1', 30)

    expect(adminSystem.users.length).toBe(1)
  })
  it('user 한명을 추가하고 삭제하면 유저배열의 length은 0이 된다.', () => {})
  it('사원1 => 사원2로 이름이 변경된다.', () => {})
  it('모든 회원이 40대 이하면 true를 반환한다.', () => {})
})

/*
import { expect, it } from '@jest/globals'
import AdminSystem from '.'

describe('User Admin', () => {
    it('create user', () => {
        const user = new User('사원1',32)

        expect(user.name).toBe('사원1')
    })

    if('user 한명을 추가하면 AdminSystem의 유저배열의 length는 1이된다', () =>{
        const adminSystem = new AdminSystem()

        adminSystem.addUser('사원1', 30)
        
        expect(adminSystem.users.length).toBe(1)
    })

    it('User 한명을 추가하면 AdminSystem의 유저 배열의 length은 1이 된다', ()=>{
        const adminSystem = new AdminSystem()

        adminSystem.addUser({
            name: '사원1', 
            age: 30
        })
        adminSystem.deleteUser({
            name: '사원2', 
            age:30,
        })
        adminSystem.deleteUser('사원1')

        expect(adminSystem.users.length).toBe(0)
    })
    it('사원1 => 사원2로 이름이 변경된다.', () => {
        const adminSystem = new AdminSystem()

        a
    })
    it('모든 회원이 40대 이하면 true를 반환한다', () => {
        const adminSystem = new AdminSystem()

        adminSystem.addUser({
            name:'사원1',
            age:30,
        })
        adminSystem.addUser({
            name:'사원1',
            age:30,
        })

        expect(adminSystem.isUnder40()).toBe(true)
    })
})
*/
