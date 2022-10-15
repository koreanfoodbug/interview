const getCount = (copiedS, word) => {
    let count = 0

    while (true) {
        let end = false;

        [...word].forEach((w, wi) => {
            const index = copiedS.findIndex((c) => c === w)
            copiedS.splice(index, 1)

            if (index === -1) {
                end = true;
            }

            if (index !== -1 && wi === [...word].length - 1) {
                count += 1;
            }
        })

        if (end) {
            break
        }
    }

    return count;
}

function solution(S, L) {
    const counts = [];

    L.forEach((ele) => {
        const count = getCount([...S], [...ele]);
        counts.push(count);
    })

    return Math.max.apply(null, counts);
}

console.log(solution('BILLOBILLOLLOBBI', ['BILL', 'BOB']));
