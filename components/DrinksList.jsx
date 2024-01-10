import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      { drinks.map(({ idDrink, strDrink }) => {
        return(
          <li key={idDrink}>
            <Link href={`/drinks/${idDrink}`}> {strDrink} </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default DrinksList;