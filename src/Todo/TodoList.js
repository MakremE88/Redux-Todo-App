import React from 'react';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';


function TodoList({ todoList, setTitle, setItem, setEdit, deleteItem }) {

    const handleEdit = (item) => {
        setTitle(item.value);
        setEdit();
        setItem(item);
    }

    const handleDelete = (item) => {
        setItem(item);
        deleteItem();
    }
    return (
        <Container className="card-todo" maxWidth="sm">
            {!todoList.length
                ?
                <p variant="h6" color="error" className="vide">No Data to display</p>
                :
                (<List>
                    {todoList.map(item => {
                        return (
                            <ListItem key={item.id} button>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>

                                <ListItemText primary={item.value} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
            }
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setItem: (item) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);