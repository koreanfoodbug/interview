function solution(A) {

    let count = 0;

    const increase = () => {
        let min = Math.min.apply(null, A);
        
        A.forEach((AElement, AIndex) => {
            if (AElement === min) {
                A[AIndex] = A[AIndex] + 1;
                count += 1;
            }
        });
    };

    const decrease = () => {
        let max = Math.max.apply(null, A);

        A.forEach((AElement, AIndex) => {
            if (AElement === max) {
                A[AIndex] = A[AIndex] - 1;
                count += 1;
            }
        });
    };

    let end = true;

    const step = () => {
        while (end) {
            if (A.every(v => v === A[0])) {
                break
            }

            increase();

            if (A.every(v => v === A[0])) {
                break
            }

            decrease();

            if (A.every(v => v === A[0])) {
                end = false;
            }
        }
    }

    step()

    return count;
}

// const A = [4, 1, 4, 1];
// const A = [3, 2, 1, 1, 2, 3, 1];
const A = [3, 3, 3];

console.log(solution(A));