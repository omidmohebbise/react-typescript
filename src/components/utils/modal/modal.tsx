import * as React from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalProps {
  headerTitle: string;
  body: React.ReactNode;
  size?: "sm" | "lg" | "xl";
  show: boolean;
  handleClose: () => void;
}

const AnyModal: React.FC<ModalProps> = ({
  headerTitle,
  body,
  size = "lg",
  show,
  handleClose,
}) => {
  return (
    <Modal size={size} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{headerTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnyModal;
