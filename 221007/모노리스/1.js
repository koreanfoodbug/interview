// 오른쪽부터 시작
// makeRec
// y === 0 이면 오른쪽으로
// 이동 후에는 prev + 1
// 오른쪽으로 이동하기전에 왼쪽 대각선 체크
// 범위를 벗어낫는지? 숫자가 있는지?
// 범위를 벗어나지 않고 숫자가 없으면 채워넣는다
// 범위를 벗어나면 오른쪽

const makeRec = (rec, cur, prev, final, r, c, direct, n) => {
    prev += 1
    x = cur[0]
    y = cur[1]

    right = cur[1] + 1
    below = cur[0] - 1
    left = cur[1] - 1
    top = cur[0] + 1

    number = prev

    rec[x][y] = number;

    if (prev === final) {
        return rec[r - 1][c - 1]
    }

    if (y === n - 1) {
        if (direct) {
            return makeRec(rec, [top, y], prev, final, r, c, false, n)
        } else {
            return makeRec(rec, [top, left], prev, final, r, c, true, n)
        }
    }

    if (x === n - 1) {
        if (direct) {;
            return makeRec(rec, [x, right], prev, final, r, c, false, n)
        } else {
            return makeRec(rec, [below, right], prev, final, r, c, true, n)
        }
    }

    if (cur[0] !== 0 && cur[1] !== 0) {
        // 오른쪽, 위 대각선 방향
        if (rec[below][right] === undefined) {
            return makeRec(rec, [below, right], prev, final, r, c, true, n)
        } else {
            return makeRec(rec, [top, left], prev, final, r, c, true, n)
        }
    }

    if ((x === 0)) {

        if (direct) {
            return makeRec(rec, [cur[0], right], prev, final, r, c, false, n)
        } else {
            return makeRec(rec, [top, left], prev, final, r, c, true, n)
        }
    }

    if ((y === 0)) {
        if (direct) {
            return makeRec(rec, [top, cur[1]], prev, final, r, c, false, n)
        } else {
            return makeRec(rec, [below, right], prev, final, r, c, true, n)
        }
    }
}

function solution(n, r, c) {
    const x = new Array(n);
    for (let i = 0; i < x.length; i++) {
        x[i] = []
    }

    direct = true
    const answer = makeRec(x, [0, 0], 0, n * n, 3, 2, direct, n)

    return answer;
}

console.log(solution(6, 5, 4));