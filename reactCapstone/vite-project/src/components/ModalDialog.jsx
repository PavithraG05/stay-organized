import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDialog = (props) => {

    const handleClose = () => props.setShow(false);

    return(
        <Modal show={props.show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDialog