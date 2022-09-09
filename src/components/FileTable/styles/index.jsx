import styled from "styled-components";

const StyledTable = styled.table`
  margin-top: 12px;
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  width: 80vw;
`;

const StyledTableHeader = styled.thead`
  border-bottom: 0.5px solid rgb(178, 178, 178);
`;

const StyledTh = styled.th`
  text-align: left;
  padding: 8px;
`;

const StyledTableBody = styled.tbody`
`;

const StyledTableRow = styled.tr`
  display: grid;
  grid-template-columns: 32px 200px 200px 1fr 32px 200px;
  border-bottom: 0.5px solid rgb(178, 178, 178);
  border-top: 0.5px solid rgb(178, 178, 178);
  padding: 8px 0 8px 0;

  &:last-child {
    border-bottom: none;
  }
  
  color: ${props => props.disabled ? "rgb(181,181,181)" : "#3d3d3d"};

  &:hover {
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    background-color: ${props => props.disabled ? "white" : "rgb(239,239,239)"};
  }

  background: ${props => props.selected ? "rgb(239,239,239)" : "white"};
`;

const StyledTableHeaderRow = styled.tr`
  display: grid;
  grid-template-columns: 32px 200px 200px 1fr 32px 200px;
  padding: 8px;
`;

const AvailableStatus = styled.div`
  width: 16px;
  height: 16px;
  background-color: #01ab02;
  border-radius: 50%;
`;

const StyledTableData = styled.td`
  text-align: left;
  padding: 8px 0 8px 0;
  display: flex;
  align-items: center;
`;

export {
    StyledTable,
    StyledTableRow,
    StyledTh,
    StyledTableBody,
    StyledTableData,
    StyledTableHeader,
    StyledTableHeaderRow,
    AvailableStatus
}