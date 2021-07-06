def dfs(graph, i, visited, path, dirname, paths):
    visited[i] = True
    path = path + '/' + dirname[i]

    if not graph[i]:
        paths.append(path)
        path = ''

    for v in graph[i]:
        if not visited[v]:
            dfs(graph, v, visited, path, dirname, paths)

def solution(N, relation, dirname):
    visited = [0] * N
    graph = [[] for i in range(N)]

    for r in relation:
        graph[r[0] - 1].append(r[1] - 1)

    paths = []
    dfs(graph, 0, visited, '', dirname, paths)

    candidate = [len(p) - 1 for p in paths]

    return max(candidate)

N = 7
relation = [[1,2],[2,5],[2,6],[1,3],[1,4],[3,7]]
dirname = ["root","abcd","cs","hello","etc","hello","solution"]	

solution(N, relation, dirname)