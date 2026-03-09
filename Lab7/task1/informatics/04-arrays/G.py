n = int(input())
numbers = list(map(int, input().split()))

for i in range(n//2):
    temp = numbers[i]
    numbers[i] = numbers[n-i-1]
    numbers[n-i-1] = temp

for number in numbers:
    print(number, end=" ")