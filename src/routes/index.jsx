import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
// import { getNews, getNewsByCategory } from "../apis/loaders";
import { getGnews, getGnewsByCategory } from "../apis/loaders";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import ContentBlogPage from "../pages/ContentBlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: getGnews
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/news/detail",
        element: <ContentBlogPage />
      },      
      {
        path: "/business",
        element: <BlogPage />,
        loader: getGnewsByCategory("business")
      },
      {
        path: "/entertainment",
        element: <BlogPage />,
        loader: getGnewsByCategory("entertainment")
      },
      {
        path: "/general",
        element: <BlogPage />,
        loader: getGnewsByCategory("general")
      },
      {
        path: "/health",
        element: <BlogPage />,
        loader: getGnewsByCategory("health")
      },
      {
        path: "/science",
        element: <BlogPage />,
        loader: getGnewsByCategory("science")
      },
      {
        path: "/sports",
        element: <BlogPage />,
        loader: getGnewsByCategory("sports")
      },
      {
        path: "/technology",
        element: <BlogPage />,
        loader: getGnewsByCategory("technology")
      },
    ]
  },
]
);
