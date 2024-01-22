export const API_URL = 'https://pokeapi.co/api/v2';

export function GET_POKEMONS(){
    return{
        url: API_URL + '/pokemon?limit=20',
        options:{
            method: 'GET'
        }
    };
}

export function GET_POKEMON_INFO(name){
    return{
        url: API_URL + '/pokemon/'+ name,
        options:{
            method: 'GET'
        }
    };

}