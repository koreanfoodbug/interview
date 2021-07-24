function solution(A) {
    let count = 0
    const blurbs = A.map((a) => false);

    const isEveryBlurbsTurnedOnToThisIndex = (targetIndex) => {
        return blurbs
            .filter((_, index) => index <= targetIndex)
            .every((i) => i)
    }

    A.forEach((a) => {
        blurbs[a - 1] = true

        if (isEveryBlurbsTurnedOnToThisIndex(a - 1)) {
            count += 1
        }
    })

    return count
}



const A = [2, 1, 3, 5, 4]

console.log(solution(A))