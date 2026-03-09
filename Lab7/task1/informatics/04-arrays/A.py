n = int(input())

numbers = list(map(int, input().split()))

for i in range(n):
    if i % 2 == 0:
        print(numbers[i], end=" ")