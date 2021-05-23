import React, { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonCustom } from "../index";

import {
  WrapperItems,
  WrapperDate,
  ButtonDiscountDay,
  ButtonAddDay,
  Item,
  MessageDefault,
  Content,
  WrapperMessage,
  WrapperAddButton,
} from "./styles";
import CreateIncome from "../createIncome";

const CardIncome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(0);
  const [dataType, setDataType] = useState("day");
  const [messageDefault, setMessageDefault] = useState("");
  const today = moment();
  const day = moment().subtract(date, dataType);
  useEffect(() => {
    switch (dataType) {
      case "day":
        return setMessageDefault("today there were no expenses");
      case "week":
        return setMessageDefault("to week there were no expenses");
      case "month":
        return setMessageDefault("to month there were no expenses");
      case "year":
        return setMessageDefault("to year there were no expenses");
      default:
        return setMessageDefault("to period there were no expenses");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataType]);
  const modal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <Content>
        <WrapperItems>
          <li>
            <Item role="button" onClick={() => setDataType("day")} tabIndex="0">
              Day
            </Item>
          </li>
          <li>
            <Item role="button" onClick={() => setDataType("week")} tabIndex="0">
              Week
            </Item>
          </li>
          <li>
            <Item role="button" onClick={() => setDataType("month")} tabIndex="0">
              Month
            </Item>
          </li>
          <Item>
            <Item role="button" onClick={() => setDataType("year")} tabIndex="0">
              Year
            </Item>
          </Item>
          <li>
            <Item role="button" onClick={() => setDataType("period")} tabIndex="0">
              Period
            </Item>
          </li>
        </WrapperItems>
        <WrapperDate>
          <ButtonDiscountDay onClick={() => setDate(date + 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonDiscountDay>
          <span>{day.format("dddd D MMMM")}</span>
          {day < today ? (
            <ButtonAddDay onClick={() => setDate(date - 1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonAddDay>
          ) : null}
        </WrapperDate>
        <WrapperMessage>
          <MessageDefault>{messageDefault}</MessageDefault>
        </WrapperMessage>
        <WrapperAddButton>
          <ButtonCustom type={"button"} onClick={modal} values={"+"} />
        </WrapperAddButton>
      </Content>
      {openModal && <CreateIncome />}
    </div>
  );
};

export default CardIncome;
