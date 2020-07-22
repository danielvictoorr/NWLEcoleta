//pegar estados
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json())
    .then( states => {
        
        for( const state of states){
            ufSelect.innerHTML +=  `<option value= "${state.id}"> ${state.nome} </option>`
        }

    })
}

populateUFs()

//pegar cidades
function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("select[name=uf]")

     const ufValue = event.target.value

     const indexOfSelectedState = event.target.selectedIndex 
     //stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value> Selecione a cidade </option>"
    citySelect.disabled =true

    fetch(url)
    .then( res =>  res.json())
    .then( cities => {

        citySelect.innerHTML=""
        
        for( const city of cities){
            citySelect.innerHTML +=  `<option value= "${city.nome}"> ${city.nome} </option>`
        }

        citySelect.disabled = false

    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)


//Itens de coleta
//pegar todos os li's
const itemToCollect = document.querySelectorAll(" .items-grid li")

for( const item of itemToCollect){
    item.addEventListener("click", handleSelectedItem)
}

//atualizar o campo escondido com os itens selecionado
 const collectedItems = document.querySelector("input[name=items]")

//quais são os intens selecionados
let selectItems = []

function handleSelectedItem(event){

    const itemLi = event.target

    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")
    
    const itemId= event.target.dataset.id

    //console.log('ITEM ID: ', itemId)

   

    //verificar se existem itens selecionados,
    //se sim pegar o itens selecionados

    const alreadySelected = selectItems.findIndex (item=> {
        const itemFound = item == itemId
        return itemFound
    } )

    //se já estiver selecionados, tirar da seleção
    if(alreadySelected >= 0){
        //remover da seleção
        const filteredItems = selectItems.filter(item =>{
            const itemsIsDifferent = item != itemId
            return itemsIsDifferent
        })

        selectedItems= filteredItems
    }else{
            //se não estiver selecionado add á seleção
        selectItems.push(itemId)

    }

    console.log('select Items: ', selectItems)
    
    //atualizar o campo escondido com os itens selecionado
   // collectedItems.value = selectItems


}
