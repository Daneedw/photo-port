import React from 'react'

function Modal({description, category="landscape", name, closeModal, index=1}) {
    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt="current category" src= {require(`../../assets/small/${category}/${index}.jpg`).default} />
          <p>
            {description}
          </p>
          <button type="button" onClick={closeModal}>
            Close this modal
          </button>
        </div>
      </div>
    )
}

export default Modal
