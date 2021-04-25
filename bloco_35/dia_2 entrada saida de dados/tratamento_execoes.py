while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


# esse exemplo e perfeito pq ele responde todas as duvidas
# 1 sintax
# 2 a exception serve para nao parar a execucao, tanto que se tu rodar vai ver
# no caso de erro ele continua o loop
