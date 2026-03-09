n = int(input())
english = set(input().split(" "))
b = int(input())
french = set(input().split(" "))

total = english.intersection(french)

print(len(total))