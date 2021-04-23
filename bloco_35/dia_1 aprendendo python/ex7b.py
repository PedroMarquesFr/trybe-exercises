def min_number(numbers:list):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller

print(min_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))