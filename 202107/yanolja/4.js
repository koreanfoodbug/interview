const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

const checkElement = (element) => {
    let check = []

    element.forEach((e, i) => {
        if (i < element.length - 3) {
            checkFlag = ![element[i], element[i + 1], element[i + 2]].every((e) => e === element[i])
            check.push(checkFlag)
        }
    })

    return !check.includes(false)
}

const check = (input) => {
    const answer = []

    input.forEach(element => {
        if (checkElement(element)) {
            a = checkElement(element)
            answer.push(element)
        }
    });

    return answer
}

function solution(A, B, C) {
    const AArray = Array(A).fill('a')
    const BArray = Array(B).fill('b')
    const CArray = Array(C).fill('c')

    const input = [...AArray, ...BArray, ...CArray]
    const permutation = permutator(input)
    const answer = check(permutation)

    if (answer.length === 0) {
        return ''
    }

    return answer[0].join('')
}

const A = 0
const B = 1
const C = 8

// 1. 순열 구한다
// 2. 연속 되는 문자 체크한다
// 3. 배열 길이가 0이면 빈 스트링을 리턴한다.

console.log(solution(A, B, C))
