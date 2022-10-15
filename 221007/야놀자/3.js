// A, 원소들 배열로
// direction [1, 2, 3, 4], 위, 우, 아래, 좌
// 방문, visited [[True, False]...]
// cur = [0, 0]
// curDir = direction[1]
// 재귀로 풀면 좋을듯
// travel()

const visited = [];
const cur = [0, 0];
const direction = [1, 2, 3, 4];
const curDir = direction[1];
const count = 0;

const travel = (map, cur, visited, curDir, count) => {
    let nextDir;
    let nextCur;

    if (visited[cur[0], cur[1]] === true) {
        return count;
    }

    count += 1

    if (curDir === 1) {
        if (map[cur[0]][cir[1] + 1] === 'X') {
            nextDir = 3
        } else {
            nextDir = curDir
            nextCur = [...cur][cur[0], cur[1] + 1]
        }
    }

    if (curDir === 2) {
        if (map[cur[0]][cir[1] + 1] === 'X') {
            nextDir = 3
        } else {
            nextDir = curDir
            nextCur = [...cur][cur[0], cur[1] + 1]
        }
    }

    if (curDir === 3) {
        if (map[cur[0]][cir[1] + 1] === 'X') {
            nextDir = 3
        } else {
            nextDir = curDir
            nextCur = [...cur][cur[0], cur[1] + 1]
        }
    }
    
    if (curDir === 4) {
        if (map[cur[0]][cir[1] + 1] === 'X') {
            nextDir = 3
        } else {
            nextDir = curDir
            nextCur = [...cur][cur[0], cur[1] + 1]
        }
    }

    travel(map, nextCur, visited, nextDir, count)
};

travel(cur, visited, curDir, cur, count);