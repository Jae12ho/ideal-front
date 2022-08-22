import React from 'react'

const MainImage = ({ isSubmitted }) => {
  return (
    <div className="mainImage">
        <img className="logo" alt="logo" src="/images/logo/logo.png" />
        {isSubmitted && (
            <img className="character" alt="character" src="/images/characters/result.gif" />
        )}
        {!isSubmitted && (
            <img className="character" alt="character" src="/images/characters/home.gif" />
        )}
    </div>
  )
}

export default MainImage