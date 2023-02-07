import { MovieCard } from './movieCard';
import styles from './moviesGrid.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { get } from '../utils/httpClient';
import Spinner from './Spinner';

export function MoviesGrid() {
    const [movies, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        setIsLoading(true);

        get("/discover/movie").then(data => {
           setMovie(data.results);
           setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return <Spinner/>;
    }

    return (
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
}