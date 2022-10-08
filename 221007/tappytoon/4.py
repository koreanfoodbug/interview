import string
from collections import deque


def rotate(strg, n):
    return strg[n:] + strg[:n]


def solution(encrypted_text, key, rotation):
    def getEncAlphabet(alphabet, index):
        alphabets = list(string.ascii_lowercase + string.ascii_lowercase)

        corresponding = key[index]
        count = dict[corresponding]

        for targetIndex, letter in enumerate(alphabets):
            if letter == alphabet:
                return alphabets[targetIndex + count]

    result = []
    dict = {letter: i + 1 for i, letter in enumerate(string.ascii_lowercase)}

    for i, e in enumerate(encrypted_text):
        result.append(getEncAlphabet(e, i))

    print('result', ''.join(result))

    # return rotate(''.join(result), 1)
    s = ''.join(result)
    return s[-rotation:] + s[:-rotation]


print(solution('qyyigoptvfb', 'abcdefghijk', 3))
print(string.ascii_lowercase)
# print(solution('hellopython', 'abcdefghijk', 3))


def rightShift(text, n):
    return text[-n:] + text[:-n]


print(rightShift('hellopython', -3))
