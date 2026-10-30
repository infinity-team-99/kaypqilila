const odam = document.getElementById('odam')
const narsa = document.getElementById('narsa')
const total = document.getElementById('total')
const savat = document.getElementById('savat')
const tola = document.getElementById('tola')
const inp = document.getElementById('inp')
const narxSelect = document.getElementById('narx')
const sartiropkaSelect = document.getElementById('sartiropka')

let xammasi = []
let a1 = 0

function gettavar(products) {
    odam.innerHTML = ''

    products.forEach(yello => {
        const w2 = yello.description ? yello.description.slice(0, 50) : ''

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${yello.image}" alt="" class="im">
            <h3>${yello.title}</h3>
            <p>${w2}...</p>
            <div class="flex" id="w1"><h2 class="green">$${yello.price}</h2></div>
        `
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = 'Sotib olish'

        btn.addEventListener('click', () => {
            a1 += yello.price;
            total.textContent = `Total: $ ${a1.toFixed(2)}`;
            narsa.innerHTML += ` ${yello.title} <br>`
            alert('Maxsulot savatga qoshildi')
            savat.style.border = '2px solid red'
        })

        odam.appendChild(card);
        card.appendChild(btn);
    })
}

function filterProducts() {
    let filtered = [...xammasi]

    const searchText = inp.value.toLowerCase().trim()
    if (searchText) {
        filtered = filtered.filter(item => item.title.toLowerCase().includes(searchText))
    }

    const selectedCategory = sartiropkaSelect.value
    if (selectedCategory) {
        filtered = filtered.filter(item => item.category === selectedCategory)
    }

    const selectedNarx = narxSelect.value
    if (selectedNarx === 'qimmat') {
        filtered.sort((a, b) => b.price - a.price)
    } else if (selectedNarx === 'arzon') {
        filtered.sort((a, b) => a.price - b.price)
    }

    gettavar(filtered)
}

inp.addEventListener('input', filterProducts)
narxSelect.addEventListener('change', filterProducts)
sartiropkaSelect.addEventListener('change', filterProducts)

savat.addEventListener('click', () => {
    tola.style.display = 'flex'
})

async function opkee() {
    try {
        const nimabu = await fetch('https://fakestoreapi.com/products')
        xammasi = await nimabu.json()
        gettavar(xammasi)
    } catch (error) {
        console.error("FAAAAAAH", error);
    }
}

opkee()

tola.addEventListener('click', () => {
    if (a1 > 0) {
        alert('Tolov amalga oshirildi bizning dokonimizdan foydalanganingiz uchun raxmat')
        narsa.innerText = ' '
        total.innerText = '0'
        a1 = 0
        savat.style.border = 'none'
    } else {
        alert('Biror nima sotib olsangiz savatga tushadi va tolov qilish imkoni boladi')
    }
})

total.textContent = a1;


const dark = document.getElementById('dark')


let i = 0

dark.addEventListener('click', () => {
    i++
    if (i % 2 == 0) {
       document.head.innerHTML = `<style>
       * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    max-width: 85%;
    width: 100%;
    margin: 0 auto;
}

img {
    width: 180px;
    height: 200px;
}

#sartiropka {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    cursor: pointer;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}
.card {
    height: 450px;
    border: 1px solid rgba(128, 128, 128, 0.529);
    width: 300px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 20px;
    transition: 0.3s;

    box-shadow: 0px 3px 10px 1px rgba(137, 137, 137, 0.436);
}

.card:hover {
    box-shadow: 0px 5px 15px 5px rgba(137, 137, 137, 0.436);
    transform: scale(1.05);
}

.green {
    color: rgb(0, 199, 0);
}

h1 {
    text-align: center;
    margin: 20px 0px;
    color: rgb(0, 252, 97);
}

.btn {
    background-color: rgb(1, 254, 1);
    border: none;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    color: white;
    box-shadow: inset 0px 0px 30px 0.01px rgb(112, 112, 112);
    transition: 0.2s;
}

.btn:active {
    box-shadow: inset 0px 0px 10px 1px rgb(65, 249, 105);

}

.nav {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
}

nav {
    backdrop-filter: blur(15px);
    position: fixed;
    gap: 20px;
    left: 5%;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    max-width: 100%;
    margin-top: 30px;
    width: 90%;
    border-radius: 999px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.456);
    z-index: 10;
    box-shadow: 0px 0px 10px 0px rgb(2, 250, 93);
}

#dark {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;

    cursor: pointer;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}


#inp {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 0px 20px;
    outline: none;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}

#narx {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    cursor: pointer;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}

.ota {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
    gap: 30px;
    padding: 150px 0px;
}

.drop {
    display: none;
    padding: 30px;
    background-color: rgb(254, 255, 254);
    border-radius: 10px;
    position: absolute;
    top: 80px;
    right: 0px;
    width: 300px;
    box-shadow: 0px 0px 5px 0px rgb(2, 250, 93);

}

.drop p {
    border-bottom: 1px solid black;
    padding: 7px 0px;
    width: 100%;
    line-height: 25px;
}

.tola {
    border-radius: 99px;
    height: 40px;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100px;

    cursor: pointer;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}


.savat {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    z-index: 2;

    cursor: pointer;
    border: none;
    background-color: rgb(254, 255, 254);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);

}

.savat:focus .drop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

button {
    transition: 1.2s;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

button:hover {
    animation-name: knopka;

}

@keyframes knopka {
    0% {
        box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    }

    20% {
        box-shadow: 10px 0px 10px 1px rgba(17, 251, 0, 0.49);
    }

    40% {
        box-shadow: 0px 10px 10px 1px rgba(17, 251, 0, 0.49);
    }

    60% {
        box-shadow: -10px 0px 10px 1px rgba(17, 251, 0, 0.49);
    }

    80% {
        box-shadow: 0px -10px 10px 1px rgba(17, 251, 0, 0.49);
    }

    90% {
        box-shadow: 0px 0px 40px 10px rgba(17, 251, 0, 0.49);
    }

    100% {
        box-shadow: 0px 0px 40px 10px rgba(17, 251, 0, 0.49);
    }
}

@media(max-width:368px) {
    nav {
        /*  */
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;
        justify-content: center;
        align-items: center;
        height: 55px;
        border-radius: 20px;
    }

    .nav {
        position: relative;
        bottom: 20px;
        gap: 10px;
        transform: scale(0.5);
    }

    h1 {
        font-size: 13px;
    }

    input {
        max-width: 140px;
    }

    .ota{
        padding: 120px 0px;
        display: flex;
        justify-content: center;
        
    }
}
</style>`
    }
    else { document.head.innerHTML = `<style>
* {
    color:white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    max-width: 85%;
    width: 100%;
    margin: 0 auto;
}

img {
    width: 180px;
    height: 200px;
}
    body{
    background-color:black;
    }

.card {
    height: 450px;
    border: 1px solid rgba(138, 138, 138, 0.53);
    width: 300px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 20px;
    transition: 0.3s;
    background-color:#333;

    box-shadow: 0px 3px 10px 1px rgba(255, 255, 255, 0.64);
}

.card:hover {
    box-shadow: 0px 5px 15px 5px rgba(246, 246, 246, 0.86);
    transform: scale(1.05);
}

.green {
    color: rgb(0, 199, 0);
}

h1 {
    text-align: center;
    margin: 20px 0px;
    color: rgb(0, 252, 97);
}

.btn {
    background-color: rgb(1, 254, 1);
    border: none;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    color: white;
    box-shadow: inset 0px 0px 30px 0.01px rgb(220, 220, 220);
    transition: 0.2s;
}

.btn:active {
    box-shadow: inset 0px 0px 10px 1px rgb(65, 249, 105);

}

.nav {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
}

nav {
    backdrop-filter: blur(15px);
    position: fixed;
    gap: 20px;
    left: 5%;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    max-width: 100%;
    margin-top: 30px;
    width: 90%;
    border-radius: 999px;
    height: 70px;
    background-color: rgba(136, 136, 136, 0.46);
    z-index: 10;
    box-shadow: 0px 0px 10px 0px rgb(2, 250, 93);
}

#sartiropka {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    cursor: pointer;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}
#dark {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;

    cursor: pointer;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}


#inp {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 0px 20px;
    outline: none;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}

#narx {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    cursor: pointer;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}

.ota {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
    gap: 30px;
    padding: 150px 0px;
}

.drop {
    display: none;
    padding: 30px;
    background-color: rgb(38, 38, 38);
    border-radius: 10px;
    position: absolute;
    top: 80px;
    right: 0px;
    width: 300px;
    box-shadow: 0px 0px 5px 0px rgb(2, 250, 93);

}

.drop p {
    border-bottom: 1px solid white;
    padding: 7px 0px;
    width: 100%;
    line-height: 25px;
}

.tola {
    border-radius: 99px;
    height: 40px;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100px;

    cursor: pointer;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);
    z-index: 2;
}


.savat {
    border-radius: 99px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    z-index: 2;
color:white;
    cursor: pointer;
    border: none;
    background-color: rgb(38, 38, 38);
    box-shadow: 0px 0px 10px 1px rgba(17, 251, 0, 0.49);

}

.savat:focus .drop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

button {
    transition: 1.2s;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

button:hover {
    animation-name: knopka;

}

@keyframes knopka {
    0% {
        box-shadow: 0px 0px 10px 1px rgb(84, 255, 71);
    }

    20% {
        box-shadow: 10px 0px 10px 1px rgb(84, 255, 71);
    }

    40% {
        box-shadow: 0px 10px 10px 1px rgb(84, 255, 71);
    }

    60% {
        box-shadow: -10px 0px 10px 1px rgb(84, 255, 71);
    }

    80% {
        box-shadow: 0px -10px 10px 1px rgb(84, 255, 71);
    }

    90% {
        box-shadow: 0px 0px 40px 10px rgb(84, 255, 71);
    }

    100% {
        box-shadow: 0px 0px 40px 10px rgb(84, 255, 71);
    }
}

@media(max-width:368px) {
    nav {
        /*  */
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;
        justify-content: center;
        align-items: center;
        height: 55px;
        border-radius: 20px;
    }

    .nav {
        position: relative;
        bottom: 20px;
        gap: 10px;
        transform: scale(0.5);
    }

    h1 {
        font-size: 13px;
    }

    input {
        max-width: 140px;
    }

    .ota{
        padding: 120px 0px;
        display: flex;
        justify-content: center;
        
    }
}
        </style>`}
})






































































































































































































