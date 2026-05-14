import UserCard from "./UserCard";
// The Users component is responsible for rendering a grid of user cards. It receives an 'increment' function as a prop, which is passed down to each UserCard component. The component defines an array of user names and maps over this array to create a UserCard for each user, passing the appropriate props to each card.
function Users({ increment }) {
  // An array of user names that will be displayed in the user cards. This array is hardcoded for demonstration purposes, but in a real application, it could be fetched from an API or managed through state.
  const users = ["User-1", "User-2", "User-3", "User-4"];
  return (
    <div className="grid grid-cols-4 gap-6 justify-center bg-purple-200 rounded-xl">
      {users.map((user, index) => (
        <UserCard key={index} name={user} increment={increment} />
      ))}
    </div>
  );
}
// The Users component takes in a single prop 'increment', which is a function that will be called when the "Add User" button in any of the UserCard components is clicked. The component renders a grid layout using Tailwind CSS classes, and each UserCard is created by mapping over the 'users' array, passing the user's name and the increment function as props to each card.
export default Users;