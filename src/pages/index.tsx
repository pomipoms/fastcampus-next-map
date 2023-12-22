import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
          <h1 className='font-bold'>Map Index Page</h1>

<ul className='px-4 py-2'>
  <li>
    <Link href="/stores">Restaurant List</Link>
  </li>
  <li>
    <Link href="/stores/new">Create a new restaurant</Link>
  </li>
  <li>
    <Link href="/stores/1">Restaurant Detail</Link>
  </li>
  <li>
    <Link href="/stores/1/edit">Edit Restaurant Detail</Link>
  </li>
  <li>
    <Link href="/users/login">Login Page</Link>
  </li>
  <li>
    <Link href="/users/mypage">My Page</Link>
  </li>
  <li>
    <Link href="/users/likes">Likes </Link>
  </li>

</ul>
    </div>


  )
}
