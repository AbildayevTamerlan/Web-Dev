n = int(input())

count = 0
numbers = list(map(int, input().split()))

for i in range(n-1):
    if numbers[i+1] > numbers[i]:
        count += 1

print(count)