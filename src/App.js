import "./App.css";
import SearchInput from "./components/SearchInput";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App p-3 h-100 w-100">
      <SearchInput />
      <span>User data will be displayed here...</span>
      <UserData />
    </div>
  );
}

export default App;
