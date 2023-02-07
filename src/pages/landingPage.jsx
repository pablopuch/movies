import { MoviesGrid } from "../components/moviesGrid";
import { MenuMovie } from '../components/menu';
import { Search } from "../components/Search";


export function LandingPage(){
    return ( 
        <div>
            <MenuMovie/>
            <Search/>
            <MoviesGrid/>
        </div>
    );
}