const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if(!response.ok){
    throw new Error(`Something went wrong: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

const Drinks = async () => {
  const data = await fetchDrinks();

  console.log(data);
  return (
    <div>
      Enter
    </div>
  );
}

export default Drinks;