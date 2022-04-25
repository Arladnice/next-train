import Link from "next/link";
import MainContainer from '../components/A/MainContainer';

const Users = ({users}) => {

  return (
    <>
      <MainContainer keywords={"users"}>
        <h1>Список пользователей:</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </MainContainer>
    </>
  );
};

export default Users;

export async function getStaticProps(context) {
	const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}