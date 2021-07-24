import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./modal";
import ModalPortal from "./modalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal one</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal one</h3>
        <p>Hello this is content of my modal one</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal two</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, in quaerat beatae officia,
          animi, sapiente quam earum pariatur magnam consequuntur veniam corrupti sit. Ad, dicta
          minima hic ea cum nisi.
        </p>
        <img src="https://placeimg.com/400/400/peoples" alt="Peoples" />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM gracias a un react-portal
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
