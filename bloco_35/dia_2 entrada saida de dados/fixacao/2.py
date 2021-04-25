def sum_nubers(numbers: str):
    each_number = numbers.split(" ")
    soma: int = 0
    for number in each_number:
        if not number.isdigit():
            print(
                "Erro ao somar valores, {} é um valor inválido".format(number)
            )
        else:
            soma += int(number)
    print(soma)
    return soma


numbers = input("Digite numeros separados por virgula")
sum_nubers(numbers)
