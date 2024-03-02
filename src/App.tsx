import { HomeOutlined, PlayCircleFilled } from "@ant-design/icons";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { AppNavigation } from "./Navigation/Navigation";

import { FlappyEnergy } from "./Navigation/Pages/FlappyEnergy";
import { Home } from "./Navigation/Pages/Home";

const pages = [
  {
    path: "/home",
    label: "Home",
    icon: <HomeOutlined />,
    element: <Home />,
  },
  {
    path: "/flappyenergy",
    label: "Flappy Energy",
    icon: <PlayCircleFilled />,
    element: <FlappyEnergy />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppNavigation pages={pages}></AppNavigation>,
    children: [
      ...pages.map((p) => {
        return {
          path: `${p.path}/*`,
          element: p.element,
        };
      }),
      {
        path: "*",
        element: <Navigate to={pages[0].path} replace />,
      },
      {
        path: "",
        element: <Navigate to={pages[0].path} replace />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
