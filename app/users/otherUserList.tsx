type User = {
  id: string,
  name: string,
  email: string,
};

const OtherUserList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // const response = await fetch('https://jsonplaceholder.typicode.com/user'); // エラーを確認する用
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default OtherUserList;