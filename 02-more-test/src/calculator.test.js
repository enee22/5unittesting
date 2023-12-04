/**
 *  calculator.js를 테스트하는 코드
 *  naming : 테스트대상파일명.test(spec).js
 */

//하나의 테스트 케이스 작성할 때 사용하는 함수
//test('테스트 시나리오', 실제로 테스트를 수행할 콜백함수)

import {expect,test,describe} from 'vitest';
import {add} from "./calculator";

test.skip('1.배열 내 모든 숫자요소들의 합을 구해야 한다.',()=>{
    const numbers = [1,2,3];

    //Act - 실제 수행 할 테스트 대상 코드
    const result = add(numbers);

    //Assert - 테스트의 성공/실패 여부를 확인하기 위한단정문(~일 것이다.)
    //expect(result).toBe(6);

    //Array.prototype.reduce()를 통해서 배열의 합 계산하는 코드 작성
    const expectedResult = numbers.reduce((acc, cur) => acc + cur); 

    expect(result).toBe(expectedResult);
});

//describe('비슷한 테스트 케이스끼리 그룹화',() => {});
describe('2. 유효하지 않은 입력값', () => {
    test('2-1. 하나라도 공백 값이 전달될 경우, NaN을 반환한다.', () => {
        const numbers = [1,'',3];
        const result = add(numbers);
        expect(result).toBeNaN;
    });

    test('2-2. 문자열로 작성된 숫자값이 전달되어도 연산 결과를 반환한다.', () => {
        const numbers = ['1','2','3'];
        const result = add(numbers);
        expect(result).toBe(6);
    });

    test('2-3.하나라도 숫자가 아닌 값이 전달될 경우, NaN을 반환한다.', () => {
        const numbers = [1,'c',3];
        const result = add(numbers);
        expect(result).toBeNaN;
    });

    test('2-4. 빈 배열이 전달될 경우 0을 반환한다.', () => {
        const numbers = [];
        const result = add(numbers);
        expect(result).toBe(0);
    });
});