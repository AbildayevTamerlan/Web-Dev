def xor(x, y):
    if (x and not y) or (y and not x):
        return 1
    else:
        return 0

x, y = map(int, input().split())

print(xor(x, y))