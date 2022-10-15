import math

def isPossible(a, b, c, d, count=1):
    n = 1000
    graph = [[0, 0]] * n
    temp = 0
    tree_level = 0

    while True:
        result = math.pow(2, temp)
        temp += 1

        tree_level = temp -1
        if result > 1000:
            break

    # for i in range(n):
        
    #     graph[i] = 1
    
    


print(isPossible(1, 1, 5, 2))
