n = int(input())
numbers = list(map(int, input().split()))
consequent_signs = False

for i in range(n-1):
    if (numbers[i] > 0 and numbers[i+1] > 0) or (numbers[i] < 0 and numbers[i+1] < 0):
        consequent_signs = True
        break

if consequent_signs:
    print("YES")
else:
    print("NO")