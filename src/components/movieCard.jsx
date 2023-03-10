import styles from './movieCard.module.css';
import { Link } from "react-router-dom";


export function MovieCard({ movie }) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movie/"+movie.id}>
                <img width={230} height={345} className={styles.movieImg} src={imgUrl} alt={movie.title} />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}