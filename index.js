const apidata={
    url:'https://pokeapi.co/api/v2/',
    type:'pokemon',
    id:'400',
}
const {url,type,id}=apidata;
    

const apiUrl= `${url}${type}/${id}`

console.log(apiUrl)

fetch(apiUrl)
.then( (data)=>data.json())
.then( (pokemon) =>generateHtml(pokemon))
const generateHtml=(data)=>{
    console.log(data);
    const html=`
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>height: ${data.height}</span>
        <span>weight: ${data.weight}</span>
    </div>
    `
    const pokemonDiv=document.querySelector('.pokemon')
    pokemonDiv.innerHTML=html;
}