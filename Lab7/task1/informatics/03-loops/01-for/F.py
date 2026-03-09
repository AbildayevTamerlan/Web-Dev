x = input()

result = ""

for i in range(len(x) - 1, -1, -1):
    if not((result == "") and (x[i] == "0")):
        result += x[i]

print(result)