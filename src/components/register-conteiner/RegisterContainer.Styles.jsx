import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: #184ee4;
  transition: 0.5s;
  &.active {
    background: #f43648;
  }
  @media (max-width: 991px) {
  }
`;
export const FormWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;
  @media (max-width: 991px) {
    max-width: 400px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  > .box {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h2 {
      color: #fff;
      font-size: 1.2em;
      font-weight: 500;
      margin-bottom: 10px;
    }
    > button {
      cursor: pointer;
      padding: 10px 20px;
      background: #fff;
      font-size: 16px;
      font-weight: 500;
      border: none;
    }
    @media (max-width: 991px) {
      position: absolute;
      width: 100%;
      height: 150px;
      bottom: 0;
    }
  }
  @media (max-width: 991px) {
    top: 110px;
    height: 100%;
    height: 500px;

    .signin {
      top: 0;
    }
    &.active {
      top: 0;
    }
  }
`;
export const WrapperForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #fff !important;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;
  &.active {
    left: 50%;
  }
  @media (max-width: 991px) {
    width: 100%;
    max-height: 500px;
    top: 0;
    box-shadow: none;
    &.active {
      top: 130px;
      left: 0;
    }
  }
`;
