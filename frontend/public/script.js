//console.log(beers);

//console.log(beers.cards);

//console.log(beers.logo);

//console.log(beers.cards[5])


window.addEventListener("load", loadEvent);

function loadEvent(){

   const rootElement = document.getElementById('root')
    //const beer= beers.cards[0];
    const beerCards = beers.cards;

    //const beerName = beer.title;
    //const beerCompany = beer.sub;
    //const beerType = beer.text;

    //const beerName1 = beerCards[1].title;
    //const beerCompany1 = beerCards[1].sub;
    //const beerType1 = beerCards[1].text;

    //rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beerName, beerCompany,beerType));
    //console.log(beers);

   // rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beerName1, beerCompany1,beerType1));
   
    //rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beerCards[2].title, beerCards[2].sub,beerCards[2].text));


    

    for (const beerCard of beerCards) {
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beerCard.title, beerCard.sub,beerCard.text));
        console.log(beerCard);
    }

}




const beerCardComponent = function (beerName, beerCompany, beerType) {
    return `
     <div class='card' onclick="onClick(this)">
        <div class="beer-name">${beerName}</div>
        <div class="beer-company">${beerCompany}</div>
        <div class="beer-type">${beerType}</div>
        </div>  
          `
}

function onClick (e) {
    if (e.classList.contains('green')){
        e.classList.remove('green');
    }
    else{
    e.classList.add('green');
    }  
}