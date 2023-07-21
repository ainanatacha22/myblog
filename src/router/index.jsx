import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "article/:id",
    element: <ArticlePage />,
  },
]);

export default router;
