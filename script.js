let inputvalue = document.querySelector('.inputvalue')

let meaning = document.querySelector('.meaning')

let submitbutton = document.querySelector('.submitbutton')

let inputform = document.querySelector('.inputform')

function showmeaning(event){
    event.preventDefault();
    let thirukkural = inputvalue.value
    getmeaning(thirukkural)
}

async function getmeaning(thirukkural){
    try{
            let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${thirukkural}`)
            let data =await response.json();
            let paragraph = document.createElement('p')
            meaning.innerHTML= ''
            paragraph.innerHTML= `<span>Thirukkural No. :</span> <b> ${data.number} </b> /1300
            </br>
            <span>பால் வகை :</span> <b> ${data.sect_tam} </b>
            </br>
            <span>Section Name :</span> <b> ${data.sect_eng} </b>
            </br>
            <span>Thirukkural/திருக்குறள் :</span> </br> <b> ${data.line1}</b> </br>
            <b>${data.line2} </b> </br>
            <span>பொருள் :</span> </br> <b>${data.tam_exp}</b></br>
            <span>English Meaning :</span></br><b> ${data.eng_exp} </b>
            `
            meaning.appendChild(paragraph)

    }
    catch(error)
    {
        let paragraph = document.createElement('p')
            meaning.innerHTML= 'Invalid Number, Enter number from 1 to 1300'
            meaning.appendChild(paragraph)

    }
}

inputform.addEventListener('submit', showmeaning)

submitbutton.addEventListener('click', showmeaning)

// getmeaning(1)