import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <TextField
                    placeholder="Search..."
                    fullWidth
                    margin="normal"
                    variant="outlined" />
            </>
        );
    }
}