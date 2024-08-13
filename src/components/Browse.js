import Header from "./Header.js";
import GptSearch from "./GptSearch.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopratedMovies from "../hooks/useTopratedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import useHorrorMovies from "../hooks/useHorrorMovies.js";
import { useSelector } from "react-redux";



const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch /> 
        ): (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      )}
      
    </div>
  );
};

export default Browse;