import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      {/* //   <Navbar title="Textutils" Abouttext="about" /> */}
      <Navbar title="" Abouttext="m" />
      <div className="container">
        <Textform heading="Enter here" />
      </div>
    </>
  );
}

export default App;
