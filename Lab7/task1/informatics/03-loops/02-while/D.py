n = int(input())
x = 1
is_power_of_2 = False

while x <= n:
    if x == n:
        is_power_of_2 = True
        break
    x *= 2

if is_power_of_2:
    print("YES")
else:
    print("NO")