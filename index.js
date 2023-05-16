import { poke_file2 } from './pokeapi2.js'
import {createCard} from './createCardFile.js'
let pokeParse = JSON.parse(poke_file2)
let pokemonArray = pokeParse.result
let grid = document.getElementById("grid")
let numPokemon = 50


const binarySearch = (arr, x, start, end) => {
    console.log("The input is a number")
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    console.log(`Is input ${x} equal to number ${arr[mid].number*1}?`)
    // Compare mid with given key x
    if ((arr[mid].number*1)===x) return arr[mid];
    console.log("no")
    // If element at mid is greater than x,
    // search in the left half of mid
    if((arr[mid].number*1) > x)
        return binarySearch(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, x, mid+1, end);
}

const linearSearch = (input)=>{
    console.log("linear search begins")
    for (let i=0; i<numPokemon;i++){
        let pokemon = pokemonArray[i].name.toLowerCase()
        if(pokemon.includes(input.toLowerCase())) { 
            console.log(pokemonArray[i].name+" contains "+input)
            document.getElementById(pokemonArray[i].name).className="show-card" }
        else {
            console.log(`${pokemonArray[i].name} does not contain ${input}`)
            console.log(`${pokemonArray[i].name} will be hidden`)
            document.getElementById(pokemonArray[i].name).className= "hide-card"}
        }
}

const allCards = (input) => {
    for (let i=0; i<pokemonArray.length;i++){
        document.getElementById(pokemonArray[i].name).className = `${input}-card`
    }
}

const searchPokemon = (input) => {
    let isString = isNaN(input)

    if(input==""){allCards('show')}
    else{
    if(isString) linearSearch(input)
    else {
        allCards('hide')
        console.log(pokemonArray[input*1].name)
        document.getElementById(pokemonArray[input*1].name).className="show-card"
        
        }
    }
    
}

//-----------------START-------------------
//create all cards

for (let i=0; i<numPokemon; i++){
    grid.innerHTML = createCard(pokemonArray[i], grid.innerHTML)
}

setInterval(readInput,2000)


    function readInput(){
        let input = document.getElementById("searchbar").value
        console.log("The input is "+input)
        searchPokemon(input)
    }

