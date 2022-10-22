# while
# if 예하 - 동생 = 0: break
# second + 1
# 예하 += 2
# if 예하 - 동생 == 1: return second + 1

# i == 예하
# j == 동생
i, j = map(int, input().split())

second = 0

while True:
    if i == j:
        print(second)
        break

    if i - j == 1 or j - 1 == 1:
        print(second + 1)
        break

    second += 1

    # if i > j:
    #     i -= 2
    # else:
    #     i += 2

    if i > j:
        if (i * 2) > j:
            i -= 1
        else:
            i = i * 2
    else:
        if (i * 2) < j:
            i -= 1
        else:
            i = i * 2
