import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Explain from './Modal/Explain';

const Result = ({ setIsSubmitted, inputs, isModalOpen, setIsModalOpen }) => {
  const [resultList, setResultList] = useState([]);
  const [countRetry, setCountRetry] = useState(0);
  const [isRes, setIsRes] = useState(false);
  const [modalResultIndex, setModalResultIndex] = useState(0);
  const [isCoppied, setIsCoppied] = useState(false);

  useEffect(() => {
    setIsRes(false);

    const tmp = []
    inputs.nameMeaning.map(e => {
      if (e && (e !== '' || e !== 'undefined')) {
        tmp.push(e);
      }
    })

    const requestData = {
      korName: inputs.korName,
      initial: inputs.initial,
      birthDay: inputs.birthYear + inputs.birthMonth + inputs.birthDay,
      nameMeaning: tmp
    }

    axios.get('https://cors-anywhere.herokuapp.com/http://43.200.104.40/get', {
      params: requestData
    }).then(res => {
      setResultList(res.data);
      setIsRes(true);
    })
  },[inputs, countRetry]);

  const handleRetry = () => {
    setCountRetry(countRetry + 1);
  }

  const handleModalOpen = (index) => {
    setIsModalOpen(true);
    setModalResultIndex(index);
  }

  const handleCopy = (e) => {
    const text = e.target.parentNode.parentNode.childNodes[1].innerHTML;
    window.navigator.clipboard.writeText(text);
    setIsCoppied(true);
    setTimeout(() => { setIsCoppied(false) }, 1000);
  }

  return (
    <div className="input-container">
      <div className="result-title">ID 추천 (문구 고민 중...)</div>
      {isRes && resultList.map((e, index) => (
          <button key={index} className="result-item" onClick={() => { handleModalOpen(index) }}>
            <div></div>
            <div style={{fontSize: e[0].length > 25 ? '13px' : '15px'}}>{e[0]}</div>
            <button className="button-copy" onClick={handleCopy}><img className="img-copy" alt="copy" src="https://jae12ho.github.io/ideal-front/images/icons/copy.png" /></button>
          </button>
        ))
      }
      {!isRes && (
        <div className="loading"></div>
      )}
      <div className="button-container">
        <button className="button-tag purple" onClick={() => { setIsSubmitted(false); }}>HOME으로 돌아가기</button>
        <button className="button-retry" onClick={handleRetry}>
          <img className="img-retry" alt="retry" src="https://jae12ho.github.io/ideal-front/images/icons/reset.png" />
        </button>
      </div>

      {isModalOpen && (
        <Explain inputs={inputs} setIsModalOpen={setIsModalOpen} result={resultList} modalResultIndex={modalResultIndex}/>
      )}

      {isCoppied && (
        <div className="coppied-background">
          <div className="coppied-info">클립보드에 복사되었습니다.😆</div>
        </div>
      )}
    </div>
  )
}

export default Result