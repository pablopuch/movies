const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWVjYTljYTA4MWUzZjc3ZGFmMjgxZTcyMGE2ZDAzOSIsInN1YiI6IjYzZDZmMjE3NjA5NzUwMDA5ZGEwZGQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWloVS-BeHt8LDRDWaYkhbyvxWbYEYOPgeqyg2z0kXA",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json());
}