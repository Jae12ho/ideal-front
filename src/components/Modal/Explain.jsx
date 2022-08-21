import React, { useRef, useEffect } from 'react'
import { useModalOutClick } from '../../hooks/useModalOutClick';
import './style.css'

const Explain = ({ setIsModalOpen, result, modalResultIndex }) => {
  const modalRef = useRef();
  useModalOutClick(modalRef, setIsModalOpen);
  const combination = ['한자어 + 한자어', '한자어 + 탄생석', '한자어 + 탄생화', '탄생석 + 탄생화', '한자어 + 이니셜'];

  return (
    <div className="modal-background">
        <div className="modal-container" ref={modalRef}>
          <div className="modal-title-bar">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <div className="modal-content">
            <div className="modal-word">{result[modalResultIndex][0]}</div>
            <div className="modal-combination">{combination[modalResultIndex]}</div>
            <div className="modal-explain">{result[modalResultIndex][1] ? "사용된 한자 : " : ""}{result[modalResultIndex][1].split(',').map(e => e + "  ")}</div>
          </div>
        </div>
    </div>
  )
}

export default Explain