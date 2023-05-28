import React from 'react';
import Row from './Row';
import Col from './Col';
import {
  DataGridContainer,
  DataTable,
  TableHead,
  TableBody,
  TableHeadRow,
  TableHeadCol,
} from './styles';

interface DataGridProps {
  rows: object[];
  cols: string[];
  renderRow: any;
}

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  cols,
  renderRow,
}) => {
  return (
    <DataGridContainer>
      <DataTable>
        <TableHead>
          <TableHeadRow>
            {cols.map((col: string, index: number) => (
              <TableHeadCol key={index}>{col}</TableHeadCol>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {rows.map((row: object, index: number) => (
            <React.Fragment key={index}>{renderRow(row)}</React.Fragment>
          ))}
        </TableBody>
      </DataTable>
    </DataGridContainer>
  );
};

export default DataGrid;
export { Col, Row };
