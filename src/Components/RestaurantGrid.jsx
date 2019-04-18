import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddNew from "./AddNew";
import { Delete, Edit, RemoveRedEye } from '@material-ui/icons';


export default class RestaurantGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Restaurant</TableCell>
                            <TableCell>Calificación</TableCell>
                            <TableCell>Ubicación</TableCell>
                            <TableCell>Última vez Visitado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.dataGrid.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.score}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.lastTimeVisited}</TableCell>
                                <TableCell><RemoveRedEye /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AddNew />
            </>
        );
    }

}