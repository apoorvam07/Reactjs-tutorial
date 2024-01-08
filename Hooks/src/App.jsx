import MyForm from "./components/MyForm";
import UseState from "./components/UseState";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import Useeffect from "./components/Useeffect";
import UseRef from "./components/UseRef";
import A from "./store/A";
import Usecontext from "./store/Usecontext";

function App() {
  return (
    <>
      <MyForm />
      <UseState />
      <Useeffect />
      <UseReducer />
      <UseMemo />
      <UseRef />
      <Usecontext />
      <A />
    </>
  );
}

export default App;
