import styled from 'styled-components';

export const DataGridContainer = styled.div``;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: separate;
  margin-bottom: 64px;
  border-spacing: 0 12px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  & tr {
    td {
      &:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
    &:nth-child(even) {
      & > td {
        background: rgba(40, 42, 51, 0.32);
      }
    }
    &:nth-child(odd) {
      & > td {
        background: rgba(36, 39, 49, 0.2);
      }
    }
  }
`;
export const TableHeadRow = styled.tr`
  background: #353945;
  height: 60px;
  position: relative;
`;
export const TableHeadCol = styled.td`
  position: relative;
  z-index: 2;
  padding: 0 24px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #777e90;
  text-transform: uppercase;
  background: #23252c;

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;