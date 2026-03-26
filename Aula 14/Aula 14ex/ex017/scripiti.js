function gerar() {
    var num = document.getElementById("num")
    var tab = document.getElementById("tab")
    if (num.value.length == 0) {
        window.alert("Defina um número!")
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10;c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            tab.value = `tab ${c}`
        }
    }
    
}