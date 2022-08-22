import React from 'react'
import { useState } from 'react'

const Input = ({ setIsSubmitted, inputs, setInputs }) => {
  const [addedMeaning, setAddedMeaning] = useState(inputs.nameMeaning);

  const addMeaning = () => {
    if (addedMeaning.length < 4) {
      setAddedMeaning([...addedMeaning, '']);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleArray = (e) => {
    const { name, value } = e.target;
    const tmp = addedMeaning.map((el, index) => (index === parseInt(name) ? value : el));

    setAddedMeaning(tmp);
    setInputs({
      ...inputs,
      nameMeaning: tmp
    })
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  return (
    <div className="input-container">
      <div className="input-title">한글 이름 <span style={{ color: "#F2554B" }}>*</span></div>
      <input className="input-tag" name="korName" placeholder="김한양" value={inputs.korName} onChange={handleChange}/>
      <div className="input-title">이니셜 <span style={{ color: "#F2554B" }}>*</span></div>
      <input className="input-tag" name="initial" placeholder="KHY" value={inputs.initial} onChange={handleChange}/>
      <div className="input-title">생년월일 <span style={{ color: "#F2554B" }}>*</span></div>
      <div className="birth-container">
        <input className="input-tag birth-item" name="birthYear" placeholder="2000" value={inputs.birthYear} style={{ width: '50%' }} onChange={handleChange}/>
        <input className="input-tag birth-item" name="birthMonth" placeholder="01" value={inputs.birthMonth} style={{ width: '25%' }} onChange={handleChange}/>
        <input className="input-tag birth=item" name="birthDay" placeholder="01" value={inputs.birthDay} style={{ width: '25%' }} onChange={handleChange}/>
      </div>
      <div className="input-title">내 이름에 사용된 한자 뜻</div>

      <div className="add-meaning-container">
        <div style={{ width: '85%' }}>
          {addedMeaning.map((e, index) => (
            <input key={index} className="input-tag input-add-meaning" placeholder="빼어나다" name={index} value={addedMeaning[index]} onChange={handleArray}/>
          ))}
        </div>
        <button className="add-button" onClick={addMeaning}><div className="cross"></div></button>
      </div>
      <div className="button-container">
        <button className="button-tag mint" onClick={handleSubmit}>ID 추천 받기</button>
      </div>
    </div>
  )
}

export default Input