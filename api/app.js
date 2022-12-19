const api = "https://restcountries.com/v2/all"
const paises = document.querySelector('.paises')
const buscarPaises = document.querySelector('#buscarPaises')
const continentes = document.querySelector('#region')


async function getPaises() {
    const resApi = await fetch(api)
    const res = await resApi.json()

    console.log(res)

    res.forEach(element => {
        mostrarBanderas(element)
    });

}

getPaises()

function mostrarBanderas(data) {
    const info_paises = document.createElement('div')
    info_paises.innerHTML = `
    <div class="box">
        <div class="country-img">
            <img class="country-flag" src="${data.flag}"/>
        </div>

        <div class="country-info">
            <h3 class="nombrePais">${data.name}</h3>
            <p><span>Population:</span>${data.population}</p>
            <p class="pais-region"><span>Region:</span>${data.region}</p>
            <p><span>Capital:</span>${data.capital}</p>
        </div>
    </div>
    `
    paises.appendChild(info_paises)
}


function buscarContinentes (){
    continentes.addEventListener('change', () => {
        const paisRegion = document.querySelectorAll('.pais-region')
        let inputValue = region.value;
        paisRegion.forEach( (countReg) => {
            if(countReg.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
                countReg.parentElement.parentElement.parentElement.style.display = 'block';
             } else {
                countReg.parentElement.parentElement.parentElement.style.display = 'none';
             }
        })
    })
}

buscarContinentes()
