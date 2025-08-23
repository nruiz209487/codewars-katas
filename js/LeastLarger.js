// Copilot: ignore file
// Kata: Least Larger
// Level: 7kyu
// Solved: 2025-08-23

function least_larger(lista, indice) {
    var target = lista[indice];
    var clostMax = null;
    for (var x = 0; x < lista.length; x++) {
        if (lista[x] > target) {
            if (clostMax == null || lista[x] < lista[clostMax]) {
                clostMax = x;
            }
        }
    }
    return clostMax == null ? -1 : clostMax;
}