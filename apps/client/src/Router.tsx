import { createBrowserRouter } from 'react-router-dom';
import AnonymousLayout from './layouts/AnonymousLayout';
import MembersLayout from "./layouts/MembersLayout.tsx";
import Profile from "./pages/Profile.tsx";
import Home from "./pages/Home.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AnonymousLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      }
    ]
  },
  {
    path: "/app",
    element: <MembersLayout/>,
    children: [
      {
        path: "profile",
        element: <Profile/>,
      }
    ]
  }
]);

export default router;
