function UserCount({ count }) {
  // This component is responsible for displaying the total number of users added. It receives a prop called 'count' which represents the total user count and renders it in a styled container.
  return (
    <div className="mb-6 bg-purple-200 p-4 rounded-xl">
      <h2 className="text-2xl font-semibold">
        Total Users Added: {count}
      </h2>
    </div>
  );
}
// The UserCount component takes in a single prop 'count' which is expected to be a number representing the total count of users. It renders this count inside a styled div, making it visually distinct and easy to read for users.
export default UserCount;