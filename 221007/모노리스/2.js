const isHitOnTarget = (target, direction) => {
    const directionX = direction[0];
    const directionY = direction[1];
    const targetX = target[0];
    const targetY = target[1];

    let tempX;
    let tempY;
    let count = 0;
    let success = false

    if (
        (directionX > 0 && targetX < 0) ||
        (directionX < 0 && targetX > 0) ||
        (directionY > 0 && targetY < 0) ||
        (directionY < 0 && targetY >0)
    ) {
        return success
    }

    // 같은 방향
    while (true) {
        if ((Math.abs(targetX) < Math.abs(directionX)) || (Math.abs(targetY) < Math.abs(directionY))) {
            count += 1;
            tempX = targetX * count;
            tempY = targetY * count;

            if ((Math.abs(directionX) < Math.abs(tempX)) || (Math.abs(directionY) < Math.abs(tempY))) {
                break
            }

            if ((tempX === directionX) && (tempY === directionY)) {
                success = true
                break
            }
        } else {
            count += 1;
            tempX = directionX * count;
            tempY = directionY * count;

            if ((Math.abs(targetX) < Math.abs(tempX)) || (Math.abs(targetY) < Math.abs(tempY))) {
                break
            }

            if ((tempX === targetX) && (tempY === targetY)) {
                success = true
                break
            }
        }
    }

    return success;
};

function solution(monsters, bullets) {
    let count = 0;

    bullets.forEach((bullet, bulletIndex) => {
        const hit = monsters.some((monster, monsterIndex) => {
            return isHitOnTarget(monster, bullet)
        })    

        if (hit) {
            count += 1
        }
    })    

    answer = count;

    if (count === 0) {
        return -1
    }

    return answer
}

const monsters = [[2, 3], [4, 5], [3, -3], [2, -4], [3, -6], [-3, -3], [-5, 0], [-4, 4]]
const bullets = [[4, 1], [4, 6], [1, -2], [-4, -4], [-3, 0], [-4, 4]]

// const monsters = [[-4, 4], [-2, 2], [6, 2], [0, -2]];
// const bullets = [[3, 1], [-1, 1], [-1, 1], [0, -4], [2, -3]]

console.log(solution(monsters, bullets))