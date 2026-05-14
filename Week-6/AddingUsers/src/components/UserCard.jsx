function UserCard({ name, increment }) {
  // This component is responsible for rendering a user card with a name and an "Add User" button.
  return (
    <div className="bg-purple-200 shadow-md rounded-xl p-5 w-40 text-center">
      <h3 className="mb-3 font-medium">{name}</h3>

      <button
        onClick={increment}
        className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-700"
      >
        Add User
      </button>
    </div>
  );
}
// The UserCard component takes in two props: 'name' which is the name of the user to be displayed, and 'increment' which is a function that will be called when the "Add User" button is clicked. The component renders a styled card with the user's name and a button to add the user.
export default UserCard;