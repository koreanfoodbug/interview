from collections import deque

n, m = list(map(int, input().split()))
graph = []

for i in range(n):
    graph.append(list(map(int, input().split())))

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx > n - 1 or ny > m - 1:
                continue

            if graph[nx][ny] == 0:
                continue

            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))


bfs(0, 0)
