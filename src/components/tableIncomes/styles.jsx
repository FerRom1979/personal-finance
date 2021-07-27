import styled from "styled-components";

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
    border: 1px solid #ddd;
    padding: 8px;
  }
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
`;
