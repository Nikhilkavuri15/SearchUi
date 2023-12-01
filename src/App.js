import "./App.css";
import SearchInput from "./components/SearchInput";
import UserData from "./components/UserData";
import { useResultDataContext } from "./context/Resultdata";
import Loading from "./components/Loading";
function App() {
  const { showLoading } = useResultDataContext();
  return (
    <div className="App p-3 h-100 w-100">
      <SearchInput />
      <UserData />
      {showLoading && <Loading />}
    </div>
  );
}

export default App;
