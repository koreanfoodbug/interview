// length가 홀수 이면 가운데글자 제외
// length가 짝수이면 무름표를 만났을때 반대편에 있는 무름표에 대입
// 반대편에도 무름표이면 a대입

const isPelin = (arr) => {
    const isPelinFromSome = arr.some((ele, idx) => {
        if (ele !== arr[arr.length - 1 - idx]) {
            return true
        }
    })

    if (isPelinFromSome) {
        return false
    } else {
        return true
    }
}

function solution(S) {
    let result = [...S];
    const Arr = [...S];

    if (Arr.length % 2 === 0) {
        Arr.forEach((element, index) => {
            if (element === '?') {
                // 반대도 ? 이면
                if ((Arr[Arr.length - 1 - index]) === '?') {
                    result[index] = 'a';
                    result[result.length - 1 - index] = 'a';
                // 문자면 문자 넣음
                } else {
                    result[index] = result[result.length - 1 - index];
                }
            }
        });
    } else {
        Arr.forEach((element, index) => {
            const middle = Math.floor(S.length / 2);
            
            if (index !== middle && element === '?') {
                // 반대도 ? 이면
                if ((Arr[Arr.length - 1 - index]) === '?') {
                    result[index] = 'a';
                    result[result.length - 1 - index] = 'a';
                // 문자면 문자 넣음
                } else {
                    result[index] = result[result.length - 1 - index];
                }
            }
        });
    }

    if (!isPelin(result)) return 'NO'

    return result.join('')
}

// console.log(solution('?ab??a'))
// console.log(solution('bab??a'))
console.log(solution('?a?'))