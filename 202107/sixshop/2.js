function solution(n){
    const restBy5 = n % 5;
    const shareBy5 = Math.floor(n / 5);

    if (restBy5 === 0) return restBy5
    const restBy3 = restBy5 % 3;
    const shareBy3 = Math.floor(restBy5 / 3);
    if (restBy3 !== 0) return - 1
    if (restBy3 === 0) return shareBy5 + shareBy3
}

const n = 7;

console.log(solution(n))