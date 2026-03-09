n = int(input())
x = 2
prime = True

while x * x <= n:
    if n % x == 0:
        prime = False
        break
    x += 1

if not prime:
    print(x)
else:
    print(n)