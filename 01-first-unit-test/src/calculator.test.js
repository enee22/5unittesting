/**
 *  calculator.js를 테스트하는 코드
 *  naming : 테스트대상파일명.test(spec).js
 */

//하나의 테스트 케이스 작성할 때 사용하는 함수
//test('테스트 시나리오', 실제로 테스트를 수행할 콜백함수)

import {expect,test} from 'vitest';
import {add} from "./calculator";

test('배열 내 모든 숫자요소들의 합을 구해야 한다.',()=>{
    const result = add([1,2,3]); //배열을 테스트용 데이터로 사용하도록 준비
    expect(result).toBe(6); //add함수가 호출되어 반환된 결과 값이 6일 것이다라고 기대
});

test('AAA 패턴을 활용하여 작성', () => {
    //Arrange - 테스트를 수행하기 위한 의존성 준비
    const numbers = [1,2,3];

    //Act - 실제 수행 할 테스트 대상 코드
    const result = add(numbers);

    //Assert - 테스트의 성공/실패 여부를 확인하기 위한단정문(~일 것이다.)
    //expect(result).toBe(6);

    //Array.prototype.reduce()를 통해서 배열의 합 계산하는 코드 작성
    const expectedResult = numbers.reduce((acc, cur) => acc + cur); 

    expect(result).toBe(expectedResult);

});

test('123이 전달될 경우 합은 7이 아닐 것이다.',()=>{
    const result = add([1,2,3]); //배열을 테스트용 데이터로 사용하도록 준비
    expect(result).not.toBe(7); //add함수가 호출되어 반환된 결과 값이 6일 것이다라고 기대
});