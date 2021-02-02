import React from 'react';
import { TextField, Container, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux'
import * as actionTypes from '../actions';


const Form = ({ title, setTitle, addItem, editItem, edit, error, setError }) => {
    const handleChange = (event) => {
        const title = event.target.value;
        
        setTitle(title);
        if(title.length === 0){
            setError("Please enter title");
        }else{
            setError("");
        }
    }

    const handleClick = () => {
        if(title.length === 0){
            setError("Please enter title");
            return;
        }
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }
    return (
        <Container maxWidth="sm" className="form-todo">
            <Grid container alignItems="center">
                <Grid item md={9}>
                    <TextField value={title} onChange={handleChange} 
                    error={!!error} helperText={error} id="outlined-basic" fullWidth label="Enter Title" multiline variant="outlined" />
                </Grid>
                <Grid item md={3}>
                    <Button className="btn-add" variant="contained" color="primary" onClick={handleClick}>
                        {edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);