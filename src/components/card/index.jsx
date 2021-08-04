import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { Title, Description, IconWrapper, Content } from "./styles";

const Card = ({ icon, title, description }) => (
  <Content>
    <IconWrapper>
      <FontAwesomeIcon icon={icon} />
    </IconWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Content>
);

Card.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
Card.defaultProps = {
  icon: "",
  title: "",
  description: "",
};
export default Card;
