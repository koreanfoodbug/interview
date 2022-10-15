function solution(A, R) {
    const nums = []

    A.forEach((element, idx) => {
        // idx 범위 체크
        if (idx + R > A.length) {
            return;
        }

        const copiedA = [...A];
        // copiedA, idx, R번 원소 제거
        [...Array(R)].forEach(() => copiedA.splice(idx, 1));
        const uniq = [...new Set(copiedA)];
        nums.push(uniq.length);
    });

    return Math.max(...nums);
}

// console.log(solution([2, 1, 2, 3, 2, 2], 3))
console.log(solution([2, 3, 1, 1, 2], 2))