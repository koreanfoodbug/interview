def solution(n):
    print(list(map(int, list(dict.fromkeys(list(str(n)))))))
    intArr = list(map(int, list(dict.fromkeys(list(str(n))))))
    intArr2 = [i for i in intArr if i != 0]

    count = 0

    for i in intArr2:
        if n % i == 0:
            count += 1

    return count

# 0은 빼는 로직 추가


print(solution(2232))
