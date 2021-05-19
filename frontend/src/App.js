import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyles/>
      <Routes/>
  </>
  );
}

export default App;
