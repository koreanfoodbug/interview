N, Q = map(int, input().split())

connections = []
questions = []

for _ in range(N - 1):
    puddleFrom, puddleTo = map(int, input().split())
    connections.append([puddleFrom, puddleTo])

for _ in range(Q):
    command, number = map(int, input().split())
    questions.append([command, number])
# 입력

graph = { i + 1: [] for i in range(N) }
full = [0] * N

visitedForQuestion1 = [False] * N
visitedForQuestion2 = [False] * N

# 채움
def question1(node, destinationNode, visited):
    start = False
    
    def dfs(node, destinationNode, visited, start):
        visited[node - 1] = True

        if node == destinationNode:
            start = True

        if (start):
            full[node - 1] = 1

        newNode = 0

        for n in graph[node]:
            if not visited[n - 1]:
                newNode = n

        if not visited[newNode - 1]:
            dfs(newNode, destinationNode, visited, start)
    
    dfs(node, destinationNode, visited, start)
    
def question2(node, destinationNode, visited):
    def dfs(node, destinationNode, visited):
        visited[node - 1] = True
        full[node - 1] = 0

        if node == destinationNode:
            full[node - 1] = 0
            return

        newNode = 0

        for n in graph[node]:
            if not visited[n - 1]:
                newNode = n

        if not visited[newNode - 1]:
            dfs(newNode, destinationNode, visited)
    
    dfs(node, destinationNode, visited)

def question3(number):
    print(full[number - 1])

for c in connections:
    graph[c[0]].append(c[1])
    graph[c[1]].append(c[0])

for q in questions:
    if q[0] == 1:
        question1(1, q[1], visitedForQuestion1)
        visitedForQuestion1 = [False] * N
    if q[0] == 2:
        question2(1, q[1], visitedForQuestion2)
        visitedForQuestion2 = [False] * N
    if q[0] == 3:
        question3(q[1])

# print(graph)
# print(full)