# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
nome = input("Digite um nome")

nome = list(nome)
tamanho_nome = len(nome)
for letra in range(tamanho_nome):
    print(''.join(nome))
    nome = list(nome).pop()
