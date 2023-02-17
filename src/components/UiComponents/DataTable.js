import React from 'react';
import {Paper} from "@mui/material";
import {TableContainer, TableHead, TableRow, TableCell, Table, TableBody} from "@mui/material";

const DataTable = (props) => {

    if (!props.data) {
        return null;
    } else if (props.data.year.length === 0) {
        return <div>No data</div>
    } else {
        return (
            <TableContainer component={Paper} style={{ width: props.width, height: props.height }} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell align="right">Payout</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.year.map((year, index) => (
                            <TableRow key={year}>
                                <TableCell component="th" scope="row">
                                    {year}
                                </TableCell>
                                <TableCell align="right">{props.data.payout[index]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
};

export default DataTable;
