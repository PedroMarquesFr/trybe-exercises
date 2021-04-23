def amount_of_tin (wall_size):
    litro = wall_size // 3
    print(litro)
    amout_tin = litro / 18
    total_price = amout_tin * 80
    return (amout_tin, total_price)


print(amount_of_tin(10400))