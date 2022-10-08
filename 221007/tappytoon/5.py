def getCountIfHasDuplicate(arr, n, index):
    count = 0

    for i, v in enumerate(arr[index + 1:]):
        count += 1
        if v == n:
            return [n, count]

    return [0, 0]


def solution(arr):
    result = []

    for i, v in enumerate(arr):
        # 리턴 [id, 일자]
        # 중복 아니면 [0, 0]
        result.append(getCountIfHasDuplicate(arr, v, i))

    days = list(map(lambda x: x[1], result))

    try:
        return min([i for i in days if i != 0])
    except ValueError:
        return -1


# print(solution([2, 1, 3, 1, 4, 2, 1, 3]))
print(solution([1, 2, 3]))
