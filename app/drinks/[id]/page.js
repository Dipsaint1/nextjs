import Link from 'next/link';
import Image from 'next/image';
import DrinkService from "@/services/api/DrinkService";

const SingleDrinkPage = async ({ params : { id } }) => {
  const drink = await DrinkService.getSingleDrink(id);
  const title = drink?.drinks[0]?.strDrink;
  const imgSrc = drink?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={title}
      />
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;