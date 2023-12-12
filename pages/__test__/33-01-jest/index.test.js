import { add } from "../../section33/33-01-jest";

it('더하기 잘 되는지 테스트 해보기', () => {
    const result = add(3, 5);
    expect(result).toBe(8)
    // expect(result).toBe(7)      // 값이 틀리므로 오류남
})


// 여러개
// describe("테스트 그룹 만들기", () => {
//     it("더하기 테스트", () => {

//     })

//     it("빼기 테스트", () => {
        
//     })

//     it("곱하기 테스트", () => {
        
//     })
// })