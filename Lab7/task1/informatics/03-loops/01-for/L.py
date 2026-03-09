x = input()
result = 0

for i in range(len(x)):
    result += int(x[i]) * (2 ** (len(x) - i - 1))

print(result)