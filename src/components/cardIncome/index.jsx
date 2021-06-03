import React, { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonCustom } from "../index";
import { useSelector } from "react-redux";
import { colors } from "../../constants";
import { axiosHttp } from "../../helpers/axiosHttp";
import PropTypes from "prop-types";

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
  WrapperCard,
} from "./styles";
import CreateIncome from "../createIncome";

const CardIncome = ({ typeData }) => {
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [dataIncome, setDataIncome] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(0);
  const [dataType, setDataType] = useState("day");
  const [messageDefault, setMessageDefault] = useState("");
  const today = moment();
  const day = moment().subtract(date, dataType);
  const d = incomes.filter((el) => {
    if (moment(el.createdAt.slice(0, 19)) >= today.format()) return el;
  });

  useEffect(() => {
    switch (dataType) {
      case "day":
        setDataIncome(incomes.filter((el) => moment(el.createdAt.slice(0, 19)) === today.format()));
        return dataIncome ? dataIncome : setMessageDefault("today there were no expenses");
      case "week":
        setDataIncome(incomes.filter((el) => el.createdAt.slice(0, 19) < today.format()));
        return dataIncome ? dataIncome : setMessageDefault("to week there were no expenses");
      case "month":
        setDataIncome(incomes.filter((el) => el.createdAt.slice(0, 19) < today.format()));
        return dataIncome ? dataIncome : setMessageDefault("to month there were no expenses");
      case "year":
        setDataIncome(incomes.filter((el) => el.createdAt.slice(0, 19) < today.format()));
        return dataIncome ? dataIncome : setMessageDefault("to year there were no expenses");
      default:
        return setMessageDefault("to period there were no expenses");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataType]);
  const modal = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    setDataIncome(incomes.filter((el) => el.createdAt.slice(0, 19) < day));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const incomeData = incomes.filter((income) => income.category === typeData);

  const deleteIncome = async (id) => {
    const api = axiosHttp();
    try {
      const res = await api.del(`${process.env.REACT_APP_SERVER_URI}/incomes/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
          <ButtonDiscountDay
            onClick={() => {
              setDate(date + 1);
              return setDataIncome(
                incomes.filter((el) => el.createdAt.slice(0, 19) < day.format())
              );
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonDiscountDay>
          <span>{day.format("dddd D MMMM")}</span>
          {day < today ? (
            <ButtonAddDay
              onClick={() => {
                setDate(date - 1);
                return setDataIncome(
                  incomes.filter((el) => el.createdAt.slice(0, 19) < day.format())
                );
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonAddDay>
          ) : null}
        </WrapperDate>
        {incomeData && incomeData?.length !== 0 ? (
          incomeData.map((income) => (
            <WrapperCard key={income.id} bgColor={typeData === "incomes" ? "#6feb50" : "red"}>
              <p>Category: {income.category}</p>
              <p>Description: {income.description}</p>
              <p>Income: {income.totalIncome}</p>
              <p>Type: {income.typeOfIncome}</p>
              <p>{income.IncomePermanent ? "Income Permanent" : "occasional"}</p>
              <button onClick={() => deleteIncome(income._id)}>-</button>
            </WrapperCard>
          ))
        ) : (
          <WrapperMessage>
            <MessageDefault>{messageDefault}</MessageDefault>
          </WrapperMessage>
        )}

        <WrapperAddButton>
          <ButtonCustom type={"button"} onClick={modal} values={"+"} background={colors.BLUE} />
        </WrapperAddButton>
      </Content>
      {openModal && <CreateIncome />}
    </>
  );
};
CardIncome.propTypes = {
  typeData: PropTypes.string,
  placeholder: PropTypes.string,
};
CardIncome.defaultProps = {
  typeData: "",
};

export default CardIncome;
