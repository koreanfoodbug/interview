
n = int(input())
layers = [int(value) for value in input().split()]

answer = 0

for i, v in enumerate(layers):
    if (i < len(layers) - 1):
        answer += (layers[i] * layers[i + 1])


print(answer)
