def count_substring(string, sub_string):
    count = 0
    index = 0

    for i in range(0, len(string)):
        for j in range(i, len(string)):
            if index == len(sub_string):
                count += 1
                index = 0
                break
            else:
                if string[j] == sub_string[index]:
                    index += 1
                else:
                    index = 0
                    break

    return count


if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()

    count = count_substring(string, sub_string)
    print(count)