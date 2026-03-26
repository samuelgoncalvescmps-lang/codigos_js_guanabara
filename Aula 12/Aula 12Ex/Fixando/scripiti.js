function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Insira uma data válida')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
               genero = "Homem"
            if(idade >= 0 && idade < 15) {
                    //kid
                    img.setAttribute('src', 'bbh.png')
                }
            else if (idade >= 15 && idade < 20) {
                    //jove
                    img.setAttribute('src', 'jvh.png')
            }       
            else if (idade < 55) {
                    //aduto
                    img.setAttribute('src', 'adh.png')
                }     
            else {
                    //veio
                    img.setAttribute('src', 'idh.png')
            }
        
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 15) {
                    //kid
                    img.setAttribute('src', 'bbm.png')
                }
            else if (idade > 15 && idade < 20) {
                    //jove
                    img.setAttribute('src', 'jvm.png')
            }
            else if (idade < 55) {
                    //aduto
                    img.setAttribute('src', 'adm.png')
            }
            else {
                    //veio
                    img.setAttribute('src', 'idm.png')
            }
        }

        res.innerHTML = `Você é ${genero} e tem ${idade} anos de idade`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
}