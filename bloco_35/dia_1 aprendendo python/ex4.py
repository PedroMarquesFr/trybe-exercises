def biggest_name(list_of_names):
    biggest = ""
    for name in list_of_names:
        if len(name) > len(biggest):
            biggest = name
    return biggest


resp = biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
print(resp)
