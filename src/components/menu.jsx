import styles from "./menu.module.css"
import { Link } from "react-router-dom";

export function MenuMovie(){
    return <div>
                <header>
                       <Link to={"/"}><h1 className={styles.title}>Movies</h1></Link>
                </header>
            </div>
}