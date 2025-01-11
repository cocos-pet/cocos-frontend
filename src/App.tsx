import { RouterProvider } from "react-router-dom";
import "@style/global.css";
import "./App.css";
import router from "./route/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
