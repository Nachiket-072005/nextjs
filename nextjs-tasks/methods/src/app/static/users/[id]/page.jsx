export default async function StaticUsersPage(props) {
  // props.params is a Promise in Next.js 15+
  const { id } = await props.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Detail</h1>
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>Username: {data.username}</p>
    </div>
  );
}
