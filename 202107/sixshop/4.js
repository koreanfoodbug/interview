function solution(foods) {
    const emptyArray = new Array(foods.length).fill(0);
    let answer = 0;

    for (let j = 1; j < emptyArray.length; j++) {
        for (let i = 2; i < emptyArray.length; i++) {
            if (j >= i) continue;

            const firstPigSum = foods
                .slice(0, j)
                .reduce((acc, cur) => acc + cur, 0);

            const secondPigSum = foods
                .slice(j, i)
                .reduce((acc, cur) => acc + cur, 0);

            const thirdPigSum = foods
                .slice(j + 1, foods.length)
                .reduce((acc, cur) => acc + cur, 0);

            if ([firstPigSum, secondPigSum, thirdPigSum].every(v => v === firstPigSum)) answer += 1;
        }
    }

    return answer;
}

const foods = [1,2,3,0,3];

console.log(solution(foods));