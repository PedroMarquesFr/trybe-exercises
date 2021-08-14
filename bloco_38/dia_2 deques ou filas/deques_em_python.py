# ...


class Deque:
    # ...

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]
        return None


deque = Deque()
elements_1 = [6, 7, 8, 9, 10]
elements_2 = [1, 2, 3, 4, 5]

for elem in elements_1:
    deque.push_front(elem)

for elem in elements_2:
    deque.push_back(elem)

print(deque)  # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
print(deque.__len__())  # saída: 10

print(deque.pop_front())  # saída: 10, pois ele retorna o número retirado
print(deque.pop_back())  # saída: 5, pois ele retorna o número retirado

print(deque)  # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
print(deque.__len__())  # saída: 8

print(deque.peek_front())  # saída: 9
print(deque.peek_back())  # saída: 4
