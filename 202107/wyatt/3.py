from functools import reduce

def solution(sticker):
    sortedSticker = sorted(sticker.copy(), reverse=True)
    cutted = [False] * len(sticker)
    values = []
    
    for sortedS in sortedSticker:
        for i, s in enumerate(sticker):
            if s == sortedS and cutted[i] != True:
                if i == 0:
                    cutted[i] = True
                    cutted[i + 1] = True
                    values.append(s)

                    if not False in cutted:
                        return reduce(lambda acc, cur: acc + cur, values, 0)

                    continue

                if i == len(sticker) - 1:
                    cutted[i] = True
                    cutted[i - 1] = True
                    values.append(s)

                    if not False in cutted:
                        return reduce(lambda acc, cur: acc + cur, values, 0)

                    continue

                cutted[i - 1] = True
                cutted[i] = True
                cutted[i + 1] = True
                values.append(s)
            
                if not False in cutted:
                    return reduce(lambda acc, cur: acc + cur, values, 0)
    
    return reduce(lambda acc, cur: acc + cur, values, 0)

    
sticker = [12, 12, 12, 12, 12]	

print(solution(sticker))