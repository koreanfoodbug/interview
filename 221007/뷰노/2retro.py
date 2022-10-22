def travel(graph, prevIndex, level, max, n):
    if graph[level][prevIndex] > graph[level][prevIndex + 1]:
        max += graph[level][prevIndex]
        prevIndex = prevIndex
    else:
        max += graph[level][prevIndex + 1]
        prevIndex = prevIndex + 1

    if (level + 1 > n):
        return max

    travel(graph, prevIndex, level + 1, max)


n = 5
graph = []

for i in range(n):
    graph.append(list(map(int, input().split())))

travel(graph, 0, 0, 0, n)
