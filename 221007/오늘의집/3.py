from itertools import combinations


def solution(nums, k):
    subArr = []

    for i in range(1, len(nums) + 1):
        for j in range(len(nums)):
            if (j+i) <= (len(nums)):
                subArr.append(sum(nums[j:j+i]))

                if len(subArr) == k:
                    subArr.sort()
                    return subArr[-1]


# print(solution([3, 3, 5, 5], 7))
print(solution([2, 1, 3], 4))
