import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MovieDetails } from './pages/movieDetails';
import { LandingPage } from './pages/landingPage';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetails/>,
    },
    {
      path: "/hola",
      element: <h1>hola</h1>,
    },
  ]);

export function Web(){
    return (
            <div>   
                <main>
                    <RouterProvider router={router} />
                </main>
            </div>
    )
}