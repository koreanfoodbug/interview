from collections import deque

n, m = map(int, input().split())

graph = []

for i in range(m):
    graph.append(list(map(int, input().split())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    minX = 0
    maxX = 0
    minY = 0
    maxY = 0

    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue

            if graph[nx][ny] == 0:
                continue

            if graph[nx][ny] == 1:
                if nx < minX:
                    minX = nx
                if nx > maxX:
                    maxX = nx
                if ny < minY:
                    minY = ny
                if ny > maxY:
                    maxY = ny

                graph[nx][ny] = 0
                queue.append((nx, ny))

    return (maxX - minX) * (maxY - minY)


answer = 0

for i in range(m):
    for j in range(n):
        if graph[i][j] == 1:
            answer += bfs(i, j)

print(answer)

# 5 7
# 1 1 1 0 0
# 0 0 1 0 0
# 1 1 0 0 0
# 1 1 0 0 0
# 1 1 0 0 0
# 1 1 0 0 0
# 1 1 0 0 0
