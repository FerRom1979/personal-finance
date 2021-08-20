import React, { useState } from "react";
import Header from "../../components/header";
import Modal from "../../components/modal/modal";
import { useModal } from "../../hooks/useModal";
import CreateIncome from "../../components/createIncome";
import Dashboard from "../dashboard";

import { Content } from "./styles";

const Home = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <Content>
      <Header openModal={openModal} />
      <Dashboard />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <CreateIncome closeModal={closeModal} />
      </Modal>
    </Content>
  );
};

export default Home;
