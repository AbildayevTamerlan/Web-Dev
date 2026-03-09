def sum13(nums):
    if len(nums) == 0:
        return 0

    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2  # Skip this 13 AND the next number
        else:
            total += nums[i]
            i += 1  # Move to the next number normally

    return total