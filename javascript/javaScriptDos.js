console.log('Hola Mundo')

//Selecciones

const cadaParticipante = document.getElementsByClassName('cadaParticipante');

const all = `https://www.nokeynoshade.party/api/queens`
const winners = `https://www.nokeynoshade.party/api/queens/winners`

fetch(all)
  .then(res => res.json())
  .then(data => {

    const seasonOne = [];
    const seasonTwo = [];
    const seasonThree = [];
    const seasonFour = [];
    const seasonFive = [];
    const seasonSix = [];
    const seasonSeven = [];
    const seasonEight = [];
    const seasonNine = [];
    const seasonTen = [];
    const seasonEleven = [];

    data.map(e=>{
        e.seasons.map(f=>{
            if(f.seasonNumber==='1'){

                seasonOne.push(e)

            }else if(f.seasonNumber==='2'){

                seasonTwo.push(e)

            }else if(f.seasonNumber==='3'){

                seasonThree.push(e)

            }else if(f.seasonNumber==='4'){

                seasonFour.push(e)

            }else if(f.seasonNumber==='5'){

                seasonFive.push(e)

            }else if(f.seasonNumber==='6'){

                seasonSix.push(e)

            }else if(f.seasonNumber==='7'){

                seasonSeven.push(e)

            }else if(f.seasonNumber==='8'){

                seasonEight.push(e)

            }else if(f.seasonNumber==='9'){

                seasonNine.push(e)

            }else if(f.seasonNumber==='10'){

                seasonTen.push(e)

            }else if(f.seasonNumber==='11'){

                seasonEleven.push(e)

            }
        })
    })

    console.log(seasonThree)
    










  })