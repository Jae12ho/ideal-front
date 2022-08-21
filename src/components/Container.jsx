import React, { useState } from 'react'
import Input from './Input'
import MainImage from './MainImage'
import Result from './Result'
import './style.css'
import TitleBar from './TitleBar'

const Container = ({ isModalOpen, setIsModalOpen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    korName: "",
    initial: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    nameMeaning: [""],
  });

  return (
    <div className="container">
        <TitleBar />
        <MainImage isSubmitted={isSubmitted} />
        {!isSubmitted && (
            <Input setIsSubmitted={setIsSubmitted} inputs={inputs} setInputs={setInputs} />
        )}
        {isSubmitted && (
            <Result setIsSubmitted={setIsSubmitted} inputs={inputs} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        )}
    </div>
  )
}

export default Container