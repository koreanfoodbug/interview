function solution(S) {
    count = 0;
    answers = [];

    [...S].forEach((v, si) => {
        temp = [...S];
        const oneToNine = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        oneToNine.forEach((o, oi) => {
            temp[si] = o;
            number = parseInt(temp.join(''), 10);

            if ((number % 3 === 0) && !answers.includes(number)) {
                count += 1
                answers.push(number)
            }
        });
    });

    return count;
}

// S = '23';
S = '0081';
// S = '022';

console.log(solution(S));
