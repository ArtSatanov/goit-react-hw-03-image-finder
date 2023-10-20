import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalСomponent = ({
  isModalOpen,
  imgModal,
  altModal,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
    >
      <button onClick={() => closeModal()}>close</button>
      <div className="modal">
        <img src={imgModal} alt={altModal} />
      </div>
    </Modal>
  );
};
