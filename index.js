
const rock = document.getElementById('imgrock')
const papel = document.getElementById('imagpapel')
const tesoura = document.getElementById('imgtesoura')
const ia_img = document.getElementById('ia_img')

function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function pedra() {
    const vc = document.getElementById('vc').src = "./imgs/mãorock.png"
    let resultado_ia = gerarAleatorio(3, 1)
    if (resultado_ia == 1) {
        ia_img.src = "./imgs/mãorock.png"

    } else if (resultado_ia == 2) {
        ia_img.src = "./imgs/pngegg (1).png"

    } else if (resultado_ia == 3) {
        ia_img.src = "./imgs/mãotesoura.png"

    }

}

function paper() {
    const vc = document.getElementById('vc').src = "./imgs/pngegg (1).png"
    let resultado_ia = gerarAleatorio(3, 1)
    if (resultado_ia == 1) {
        ia_img.src = "./imgs/mãorock.png"

    } else if (resultado_ia == 2) {
        ia_img.src = "./imgs/pngegg (1).png"

    } else if (resultado_ia == 3) {
        ia_img.src = "./imgs/mãotesoura.png"

    }


}

function tesoura_fun() {

    const vc = document.getElementById('vc').src = "./imgs/mãotesoura.png"
    let resultado_ia = gerarAleatorio(3, 1)
    if (resultado_ia == 1) {
        ia_img.src = "./imgs/mãorock.png"

    } else if (resultado_ia == 2) {
        ia_img.src = "./imgs/pngegg (1).png"

    } else if (resultado_ia == 3) {
        ia_img.src = "./imgs/mãotesoura.png"

    }

}

rock.addEventListener('click', function () {
    pedra()
})
papel.addEventListener('click', function () {
    paper()
})
tesoura.addEventListener('click', function () {
    tesoura_fun()
})




const bg = [
    'background-color:rebeccapurple',
    'background-color:lightcoral',
    'background-color:cadetblue'

]


setInterval(function() {
    document.getElementById('bg').style=bg[gerarAleatorio(2,0)]
}, 800);


