import { useRoutes } from "react-router-dom";
import ClientLayout from "./resources/layouts/ClientLayout";

import HomeView from "./resources/views/HomeView";

const Routes = () => {
  return useRoutes([
    {
      element: <ClientLayout />,
      children: [
        { index: true, path: '/', element: <HomeView /> },
        { path: 'explore', element: <HomeView /> },
        { path: 'view', element: <HomeView /> },
        { path: 'book', element: <HomeView /> },
      ]
    },
  ]);
}

export default Routes;
