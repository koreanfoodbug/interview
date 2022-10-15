def solution(n, delay, forget):
    person = [True, delay, forget]
    arr = []
    arr.append(list(person))

    for i in range(n):
        for j, element in enumerate(arr):
            if (arr[j][1] != 0):
                arr[j][1] = arr[j][1] - 1

            if (arr[j][2] != 0):
                arr[j][2] = arr[j][2] - 1

            if (arr[j][2] == 0):
                arr[j][0] = False

        for j, element in enumerate(arr):
            if (arr[j][1] == 0 and arr[j][2] != 0 and arr[j][0] == True):
                arr.append(list(person))

    return len(list(map(lambda x: x[0], arr)))

    # person[1] = person[1] - 1
    # person[2] = person[2] - 1
    # [[True, delay, forget]]
    # for i in range(n):
    # 원소들의 delay와 forget을 -1 한다
    # delay가 0이고 forget이 0이 아니면 True인 원소 갯수만큼 배열에 initial 원소를 추가한다
    # i와 n이 같으면 True인 사람의 숫자를 반환한다


solution(6, 2, 4)
