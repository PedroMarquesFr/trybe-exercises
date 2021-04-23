def triangle(number):
    space = number // 2
    loop = True
    line = 1

    if number % 2 == 0:
        line = 2

    while loop:
        for i in range(space):
            print(' ', end='')
        for i in range(line):
            print('*', end='')
        print()
        if line >= number:
            loop = False
        space -= 1
        line += 2


triangle(31)