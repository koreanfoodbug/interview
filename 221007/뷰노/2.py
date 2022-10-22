user_input = input()

d = [input().split() for _ in range(int(user_input) + (int(user_input) - 1))]

dia = list(map(lambda x: list(map(int, x)), d))
answer = dia[0][0]
prevIndex = 0

for i in range(len(dia) - 1):
    if len(dia[i+1]) == prevIndex:
        answer += dia[i + 1][prevIndex - 1]
        prevIndex = prevIndex - 1
    elif dia[i + 1][prevIndex] > dia[i + 1][prevIndex + 1]:
        answer += dia[i + 1][prevIndex]
        prevIndex = prevIndex
    else:
        answer += dia[i + 1][prevIndex + 1]
        prevIndex = prevIndex + 1

print(answer)
