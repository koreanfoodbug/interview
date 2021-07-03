import operator

N, M = map(int, input().split())
persons = list(map(str, input().split()))

relations = []

for _ in range(M):
    relations.append(list(map(str, input().split())))
# 입력    
    
relationDict = { p: [] for p in persons}

for relation in relations:
    relationDict[relation[0]].append(relation[1])
    relationDict[relation[1]].append(relation[0])
    
answerDict = {}

for AKey, AVal in relationDict.items():
    for BKey, BVal in relationDict.items():
        answerDict[AKey + BKey] = len(list(set(AVal) & set(BVal)))

filteredAnswerDict = {key: val for key, val in answerDict.items() if key[:int(len(key)/2)] != key[int(len(key)/2):]}

answer = max(filteredAnswerDict, key=filteredAnswerDict.get)

names = sorted([answer[:int(len(answer)/2)], answer[int(len(answer)/2):]])
print('%s %s'%(names[0], names[1]))
print(filteredAnswerDict[answer])