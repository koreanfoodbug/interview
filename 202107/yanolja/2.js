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

function solution(N, A, B) {
    const vertexs = Array(N)
        .fill(0)
        .map((_, i) => i + 1)
    
    const vertexesCandidates = permutator(vertexs)

    const sum = (candi) => {
        let sum = 0;

        candi.forEach((_, i) => {
            if (candi[A[i] - 1]) {
                sum += (candi[A[i] - 1] + candi[B[i] - 1])
            }
        })

        return sum
    }

    const answers = []

    vertexesCandidates.forEach((vertexesCandidate) => {
        answers.push(sum(vertexesCandidate))
    })

    return Math.max(...answers)
}

const N = 5
const A = [2, 2, 1, 2]
const B = [1, 3, 4, 4]

// 1. vertex 순열 구함
// 2. 가중치 합 구함
// 3. 최대값

console.log(solution(N, A, B))