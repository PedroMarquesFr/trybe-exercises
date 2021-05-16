import statistics
import math


class Estatistica:
    def __init__(self, num_list):
        self.__num_list = num_list

    def media(self):
        print(sum(self.__num_list) / len(self.__num_list))

    def mediana(self):
        num_list = self.__num_list
        central_length = math.floor(len(num_list) / 2)
        if (len(num_list) % 2) == 0:
            return print(
                (num_list[central_length - 1] + num_list[central_length]) / 2
            )
        print(num_list[central_length])

    def moda(self):
        print(statistics.mode(self.__num_list))


alalala = Estatistica([4, 1, 2, 2, 3, 5, 4, 2])

alalala.media()
alalala.mediana()
alalala.moda()
