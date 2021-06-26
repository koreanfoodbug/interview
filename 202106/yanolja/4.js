function solution(L1, L2) {
    let l1Start = false;
    let l1End = false;
    let l2Start = false;
    let l2End = false;
    let l1Working = [];
    let l2Working = [];

    [...L1].forEach((v, i) => {
        if (i === 0) {
            if (L2[1] !== 'x') {
                l1Start = true;
                l1Working.push('x');
            } else {
                l2Start = true;
                l2working.push('x');
            }
        }




    });
}

const L1 = '..xx.x.';
const L1 = 'x.x.x..';

console.log(solution(L1, L2));