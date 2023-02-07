import { useState } from "react";
import styles from "./search.module.css";
import { ImSearch } from "react-icons/im";
import { useNavigation } from "react-router-dom";

export function Search() {
  
  const [searchText, setSearchText] = useState("");
  const navigate  = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
      navigate("/hola");
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit }>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <ImSearch size={20} />
        </button>
      </div>
    </form>
  );
}
