if __name__ == '__main__':
    records = []
    names = []
    scores = []
    for _ in range(int(input())):
        name = input()
        score = float(input())

        records.append([name, score])
        scores.append(score)

    scores.sort()

    second_lowest = scores[0]
    for score in scores:
        if score > second_lowest:
            second_lowest = score
            break

    for record in records:
        if record[1] == second_lowest:
            names.append(record[0])

    names.sort()

    for name in names:
        print(name)