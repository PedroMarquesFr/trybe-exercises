def square(number):
    lines = ''
    for index in range(number):
        for indx in range(number):
            lines += '*'
        print(lines)
        lines = ''


def square2(number):
    for index in range(number):
        for indx in range(number):
            print('*', end='')
        print('')

square2(5)
