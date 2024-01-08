import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./page/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent/>,
    children: [
      {
        path: "about",
        element: <>Hello, React.</>
      },
      {
        path: "contact",
        element: <>Contact Us Here.</>
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <h1>Routing Concepts</h1>
    </RouterProvider>
  )
}

export default App;