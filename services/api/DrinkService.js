export default class DrinkService {
  static getSingleDrink = async (id) => {
    if(!id){
      throw new Error(`${id} not found`);
    }
    const url =  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Failed to fetch drink`);
    }
    const data = response.json();
    return data;
  } 
}