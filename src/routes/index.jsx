import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { getNews, getNewsByCategory } from "../apis/loaders";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: getNews
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/business",
        element: <BlogPage />,
        loader: getNewsByCategory("business")
      },
      {
        path: "/entertainment",
        element: <BlogPage />,
        loader: getNewsByCategory("entertainment")
      },
      {
        path: "/general",
        element: <BlogPage />,
        loader: getNewsByCategory("general")
      },
      {
        path: "/health",
        element: <BlogPage />,
        loader: getNewsByCategory("health")
      },
      {
        path: "/science",
        element: <BlogPage />,
        loader: getNewsByCategory("science")
      },
      {
        path: "/sports",
        element: <BlogPage />,
        loader: getNewsByCategory("sports")
      },
      {
        path: "/technology",
        element: <BlogPage />,
        loader: getNewsByCategory("technology")
      },
    ]
  },
]
);
