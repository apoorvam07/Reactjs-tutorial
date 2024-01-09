import MyForm from "./components/MyForm";
import UseState from "./components/UseState";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import Useeffect from "./components/Useeffect";
import UseRef from "./components/UseRef";
import A from "./store/A";
import Usecontext from "./store/Usecontext";
import Usecallback from "./components/Usecallback";

function App() {
  return (
    <>
      <MyForm />
      <UseState />
      <Useeffect />
      <UseReducer />
      <UseRef />
      <Usecontext />
      <A />
      <UseMemo />
      <Usecallback />
    </>
  );
}

export default App;
