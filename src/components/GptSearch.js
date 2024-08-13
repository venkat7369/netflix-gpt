import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptMovieSuggestions';
import { BG_URl } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_URl}
          alt="logo"
        />
        </div>
       <GptSearchBar />
       <GptSearchSuggestions />
    </div>
  )
}

export default GptSearch