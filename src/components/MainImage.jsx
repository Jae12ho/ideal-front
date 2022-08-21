import React from 'react'

const MainImage = ({ isSubmitted }) => {
  return (
    <div className="mainImage">
        <img className="logo" alt="logo" src="https://jae12ho.github.io/ideal-front/images/logo/logo.png" />
        {isSubmitted && (
            <img className="character" alt="character" src="https://jae12ho.github.io/ideal-front/images/characters/result.gif" />
        )}
        {!isSubmitted && (
            <img className="character" alt="character" src="https://jae12ho.github.io/ideal-front/images/characters/home.gif" />
        )}
    </div>
  )
}

export default MainImage