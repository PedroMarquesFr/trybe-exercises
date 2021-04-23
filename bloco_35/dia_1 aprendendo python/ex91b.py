# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de \
# descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.


def count_discount(price, percentage):
    return price - (price * percentage / 100)


def price_to_pay(type, liters):
    print(count_discount(2.5, 3))
    if type == "A":
        if liters <= 20:
            return liters * count_discount(2.5, 3)
        return liters * count_discount(2.5, 5)
    if liters <= 20:
        return liters * count_discount(1.9, 4)
    return liters * count_discount(1.9, 6)


print(price_to_pay("G", 50))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("G", 50))
