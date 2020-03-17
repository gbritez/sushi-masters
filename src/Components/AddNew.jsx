import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div style={{margin: "10px"}}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Nueva Reseña
            </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Nueva reseña</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            En esta sección podrá agregar un nuevo restaurant y hacer una pequeña reseña.
                </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre del Restaurante:"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="score"
                            label="Calificación:"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="address"
                            label="Ubicación:"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="lastTimeVisited"
                            label="Última vez visitado:"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Enviar
                </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}