def balancedSum(arr):
    for pivot, element in enumerate(arr):
        if (sum(arr[:pivot+1]) == arr[-1]):
            return arr[pivot]


print(balancedSum([1, 2, 3, 3]))
