import { createBrowserRouter,RouterProvider } from "react-router-dom";
// styles
import "../styles/App.css";
// components
import Main from "./Main";
import Quiz from "./Quiz";
import Results from "./Results";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/quiz',
      element: <Quiz />
    },
    {
      path: '/result',
      element: <Results />
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
