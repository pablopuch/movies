import { MovieCard } from './movieCard';
import styles from './moviesGrid.module.css';
import { MenuMovie } from './menu';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';

export function MoviesGrid() {
    const [movies, setMovie] = useState([]);
    useEffect(() =>{
        get("/discover/movie").then(data => {
           setMovie(data.results);
        });
    }, []);
    return (
        <div>
            <MenuMovie/>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
}