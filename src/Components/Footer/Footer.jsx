import React, {useState} from 'react'
import "./Footer.css"
import Modal from 'react-modal'

function Footer() {
  //create state to control modal
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'600px'
    
  },
  overlay:{
    backgroundColor: "rgba(0,0,0,0.6)"
  }
}


  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));

  return (
    <div className='footer-container'>
      <button className='contact-btn' onClick={()=>setIsOpen(true)}>Contact Us</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact us modal"
      >
        <div className='modal-header'>
          <h2>Contact Us</h2>
          <button onClick={()=>setIsOpen(false)} className="modal-close-btn">close</button>
        </div>
        <form>
        <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit">Send</button>
          </form>
      </Modal>
    </div>
  )
}

export default Footer