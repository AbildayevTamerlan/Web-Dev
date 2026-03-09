n = int(input())

count = 0
numbers = list(map(int, input().split()))

for number in numbers:
    if number > 0:
        count += 1

print(count)