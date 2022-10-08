def solution(phone_number):
    if phone_number[3] == '-' and len(phone_number.split('-')[2]) != 4:
        return -1

    if not phone_number[3] == '-':
        return 2
    elif phone_number[0] == '+' and phone_number[6] == '-':
        return 3
    else:
        return -1


print(solution("010-1234-333"))
