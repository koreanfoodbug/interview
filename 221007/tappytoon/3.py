def checkBeautiful(n):
    li = list(str(n))
    for i in li:
        if li.count(i) > 1:
            return False

    return True


def solution(p):
    for i in range(p + 1, 10000 + 1):
        if checkBeautiful(i) == True:
            return i

    return -1


print(solution(2015))
