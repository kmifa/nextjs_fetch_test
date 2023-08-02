import UserList from './userList';
import OtherUserList from './otherUserList';
import { Suspense } from 'react';

export const metadata = {
  title: 'ユーザの一覧ページ',
  description: 'JSONPlaceHolderから取得したユーザ一覧です。',
};

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
      <p>-------------------------------------------------</p>
      <Suspense fallback={<p>Loading OtherUserList...</p>}>
        <OtherUserList />
      </Suspense>
    </div>
  );
};

export default Page;