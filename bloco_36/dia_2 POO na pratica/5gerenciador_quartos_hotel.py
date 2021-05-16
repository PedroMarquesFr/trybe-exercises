class Quarto:
    def __init__(
        self, numero, andar, quantidade_de_hospedes, preco, reservado
    ):
        self.numero = numero
        self.andar = andar
        self.quantidade_de_hospedes = quantidade_de_hospedes
        self.preco = preco
        self.reservado = False


class Hospede:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf

class Reserva:
    def __init__(self, quarto_numero, hospede):
        self.quarto_numero = quarto_numero
        self.hospede = hospede

class Hotel: