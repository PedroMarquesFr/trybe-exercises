# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e 
# imprima-o na vertical. Exemplo:


def print_name(name):
    for letter in name:
        print(letter)


name = input('Digite seu nome:')
print_name(name)
