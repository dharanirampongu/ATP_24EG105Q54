import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";
// App component that manages the user count state and renders UserCount and Users components
function App() {
  // State to keep track of the number of users
  const [count, setCount] = useState(0);

  // Function to increment the user count
  const increment = () => {
    setCount(count + 1);
  };
// Render the App component with a styled container, UserCount, and Users components
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-200">
      
      <h1 className="text-3xl font-bold mb-5">User App</h1>

      <UserCount count={count} />

      <Users increment={increment} />
    </div>
  );
}
// Export the App component as the default export
export default App;