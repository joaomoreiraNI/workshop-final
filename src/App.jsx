import "./App.css";
import Header from "./components/header";
import Profile from "./components/profile";
import Post from "./components/post";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Post name="João Moreira" office="Garoto de programa" nameButton="Ir para publicação"></Post>
        <Profile name="João Moreira" office="Garoto de programa" ></Profile>
      </div>
    </>
  );
}

export default App;
