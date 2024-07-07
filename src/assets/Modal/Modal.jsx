import React from 'react';
import './Modal.css';

const Modal = ({ children, closeModal }) => {
	return (
		<div className='modal'>
			<div className='modal-header'>
				<span
					className='close'
					onClick={closeModal}
				>
					&times;
				</span>
			</div>
			<div className='modal-content'>
				<img
					src='QCSP_Event-IMG.jpg'
					alt='Event Image'
					className='modal-image'
				/>
				{children}
			</div>
			<div className='modal-footer'>
				<button className='btn btn-submit'>RSVP Now</button>
				<button className='btn btn-more'>Know More</button>
			</div>
		</div>
	);
};

export default Modal;
