import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//Styling
import "./VideoModal.scss";

function VideoModal(props) {
  const {show,onHide} = props
  const videoURL = "/Videos/IMG_5474.mp4"

  return (
    <>
     <Modal
          show={show}
          onHide={onHide}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body>
            <video controls muted loop autoPlay>
              <source src={videoURL} type="video/mp4" />
              <source src={videoURL} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
        </Modal>
    </>
  );
}

export default VideoModal;
