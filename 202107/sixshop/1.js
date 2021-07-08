function solution(paper) {
    const decsendingPaper = paper.sort((a, b) => b - a);

    const getGIndex = () => {
        let answer = 0;

        decsendingPaper.forEach((element, elementIndex) => {
            const sliced = decsendingPaper.slice(0, elementIndex + 1);
            const sum = sliced.reduce((acc, cur) => acc + cur, 0);

            if (sum >= Math.pow(elementIndex + 1, 2)) {
                answer = elementIndex + 1;
            }
        });

        return answer
    }

    return getGIndex()
}

const paper = [7, 5, 8, 10, 6, 9, 5];

console.log(solution(paper))