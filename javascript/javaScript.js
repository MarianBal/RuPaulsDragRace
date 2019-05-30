console.log('Hola Mundo')

//Selecciones

const participantes = document.querySelector('.participantes');
console.log(participantes)


const all = `http://www.nokeynoshade.party/api/queens/all`
const winners =`http://www.nokeynoshade.party/api/queens/winners`

fetch(all)
  .then(res => res.json())
  .then(data => {

    let lis = '';

    for (let i = 0; i < data.length; i++) {
      lis += `
        <li class"cadaParticipante">
        <div class="img">
          <img src="${data[i].image_url}" />
          </div>
          <p class="nombre">${data[i].name}</p>
        </li>
      `;
    }
    participantes.innerHTML = lis;
            
        })
