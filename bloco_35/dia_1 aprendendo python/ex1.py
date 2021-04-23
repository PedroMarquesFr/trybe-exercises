# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def witch_number_is_bigger (n1, n2):
    if n1 < n2:
        return n2
    return n1

print(witch_number_is_bigger(20, 5)) 