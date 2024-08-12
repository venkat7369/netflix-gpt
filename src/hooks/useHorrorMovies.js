import { useDispatch } from "react-redux";
import {useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";



const useHorrorMovies = (movieId) => {
    const dispatch = useDispatch();


    const getHorrorMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27?page=1",
            API_OPTIONS
          );
        const json = await data.json();
        

        const filterData = json.results.filter(video => video.type =="Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getHorrorMovies();
    }, []);
}

export default useHorrorMovies;