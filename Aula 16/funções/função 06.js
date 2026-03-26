function primo(n) {

    if (n <= 1) {
        return false
    }

    // for (let i = 2; i < n; i++) {            ======== Testa todos os números entre 2 e "n"
    for (let i=2; i < Math.sqrt(n); i++)  {   //======== Testa divisões até a raiz quadrada de "n" (+ otimizado)

        if (n % i === 0) {
            return false
        }

    }

    return true
}

console.log(primo(11))