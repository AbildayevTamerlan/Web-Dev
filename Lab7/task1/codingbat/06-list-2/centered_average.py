def centered_average(nums):
    total = sum(nums)
    smallest = min(nums)
    largest = max(nums)

    centered_sum = total - smallest - largest

    return centered_sum // (len(nums) - 2)