import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">Homepage</h1>
      <Link href='/about'>about</Link>
    </div>
  )
}

export default Home