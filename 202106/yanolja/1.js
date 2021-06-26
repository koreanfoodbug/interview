function solution(S, A) {
    let answer = '';
    let index = 0;

    A.forEach((_) => {
        answer = [...answer, S[index]];
        index = A[index];
    })

    return answer.join('');
}

// const S = 'cdeenetpi';
// const A = [5, 2, 0, 1, 6, 4, 8, 3, 7];

const S = 'bytdag'
const A = [4, 3, 0, 1, 2, 5]

console.log(solution(S, A))