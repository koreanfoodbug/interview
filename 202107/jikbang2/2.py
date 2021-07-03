import itertools
from functools import reduce

num = int(input())
cards = list(map(int, input().split()))

permus = itertools.permutations(cards, num)
candidates = []

def applyRules(permutation):
    list = []
    
    for index, card in enumerate(permutation):
        num = 0

        if (index + 1) % 2 == 0:
            num = card * (index + 1) * -1
        else:
            num = card * (index + 1)
        
        list.append(num)

    return reduce(lambda acc, cur: acc + cur, list, 0)

for p in permus:
    appliedValue = applyRules(p)
    candidates.append(appliedValue)

print(max(candidates))





