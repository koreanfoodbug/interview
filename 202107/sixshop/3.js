function solution(n) {
    const bin = n.toString(2);

    let k = 0;

    [...bin].forEach(b => {
        if (b === '1') {
            k += 1
        }
    })

    const zeros = new Array(n - 1).fill(0)
    const arr = zeros.map((z, i) => i + 1);

    const answerArr = []

    arr.forEach((a, ai) => {
        let count = 0;

        const bin = a.toString(2);

        [...bin].forEach(c => {
            if (c === '1') {
                count += 1
            }
        })

        if (count === k) answerArr.push(true)
    })

    return answerArr.length;
}

const n = 9;

console.log(solution(n))