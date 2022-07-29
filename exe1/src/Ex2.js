function Ex2() {
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const abc = users.map((user) => <li>{user.name} and {user.id}</li>)

  return (
    <>
      <h3>User names</h3>
      <ul>
        {abc}
      </ul>
    </>
  );

}

export default Ex2;