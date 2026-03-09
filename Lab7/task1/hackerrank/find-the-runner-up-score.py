if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    length = len(arr)

    arr.sort()

    maximum = arr[length - 1]
    for i in range(length - 1, -1, -1):
        if arr[i] < maximum:
            print(arr[i])
            break