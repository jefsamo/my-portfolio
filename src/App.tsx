import Header from "./components/Header/Header";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Tools from "./components/Tools/Tools";
import Featured from "./components/Featured/Featured";
import Extra from "./components/Extra/Extra";
import Addendum from "./components/Addendum/Addendum";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Tools />
      <Featured />
      <Extra />
      <Addendum />
      <Header />
    </>
  );
}

export default App;
