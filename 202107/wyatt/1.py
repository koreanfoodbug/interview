def solution(p,s):
    numberOfTimes = 0
    
    for i, v in enumerate(p):
        eachRotation = 0
        intV = int(v)
        intSV = int(s[i])
        difference = intV - intSV

        if abs(difference) > 5:
            eachRotation = 10 - abs(difference)
        else:
            eachRotation = abs(difference)
        
        numberOfTimes += eachRotation
        
    return numberOfTimes

p = '82195'
s = '64723'

print(solution(p, s))