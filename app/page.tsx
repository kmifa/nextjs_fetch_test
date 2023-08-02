import Link from 'next/link';
import Counter from './counter';
import UserList from './users/userList';
export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline">
        About
      </Link>
      <Link href="/users" className="underline">
        Users
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className='font-bold text-lg mt-4'>ユーザー一覧</h2>
        <UserList />
      </ Counter>
    </div>
  )
}
