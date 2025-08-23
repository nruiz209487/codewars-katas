# Copilot: ignore file
# Kata: Least Larger
# Level: 7kyu
# Solved: 2025-08-23

def least_larger(lista, indice): 
    target = lista[indice]
    clostMax = None
    for x in range(len(lista)):
        if lista[x] > target:
            if clostMax is None or lista[x] < lista[clostMax]:
                clostMax = x
    return -1 if clostMax is None else clostMax