import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
                            <TableCell>$ Gastado</TableCell>
                            <TableCell>Comentarios</TableCell>
                            <TableCell>Fecha de visita</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        );
    }

}