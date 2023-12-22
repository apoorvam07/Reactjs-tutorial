import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      {/* //   <Navbar title="Textutils" Abouttext="about" /> */}
      <Navbar title="Textutils" Abouttext="About" />
      <div className="container">
        <Textform heading="Enter here" />
        <About></About>
      </div>
    </>
  );
}

export default App;
