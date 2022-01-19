import styled from "styled-components";

export const Logo = styled.h2`
  margin-left: 10px;
`;
export const Avatar = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapperAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export const Title = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  padding-right: 10px;
  margin-bottom: 10px;
`;
export const DataList = styled.ul`
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const ItemList = styled.li`
  font-size: 12px;
  padding-left: 5px;
  padding-bottom: 10px;
  font-weight: 300;
`;
export const Item = styled.a`
  cursor: pointer;
  :hover {
    font-size: 24px;
  }
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonClick = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
export const WrapperCardInfo = styled.div`
  border-radius: 5%;
  width: 400px;
  padding-bottom: 10px;
  margin: 20px auto;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperCardLanguage = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const WrapperSelect = styled.div`
  padding-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: 400;
  width: 100%;
  color: rgba(0, 0, 0, 0.54);
`;
