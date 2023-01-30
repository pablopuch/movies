import { MoviesGrid } from './components/moviesGrid';
import styles from './web.module.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  import { MovieDetails } from './pages/movieDetails';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MoviesGrid/>,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetails/>,
    },
  ]);

export function Web(){
    return (
            <div>
                    
                <main>
                    <RouterProvider router={router} />
                </main>
            </div>
    );
}