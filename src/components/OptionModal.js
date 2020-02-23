import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app') // removes console error
const OptionModal = (props) =>  (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={500}
        className="modal"
    >
       <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
       <button className="button" onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
)

export default OptionModal