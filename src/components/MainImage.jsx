import React from 'react'

const MainImage = ({ isSubmitted }) => {
  return (
    <div className="mainImage">
        <img className="logo" alt="logo" src="http://ideal.p-e.kr/images/logo/logo.png" />
        {isSubmitted && (
            <img className="character" alt="character" src="http://ideal.p-e.kr/images/characters/result.gif" />
        )}
        {!isSubmitted && (
            <img className="character" alt="character" src="http://ideal.p-e.kr/images/characters/home.gif" />
        )}
    </div>
  )
}

export default MainImage