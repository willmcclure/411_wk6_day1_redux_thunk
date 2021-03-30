import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/Delete'
import { MoreVert } from '@material-ui/icons'

import { Button, Container, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import styles from './import.module.css';

const ITEM_HEIGHT = 62;
const Import = (props) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [idNum, setIdNum] = useState(null)

     const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIdNum(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
			<h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Make</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make["MakeId"]}</TableCell>
                            <TableCell>{make["MakeName"]}</TableCell>
                            <TableCell>
                                <MoreVert></MoreVert>
                                <MenuItem onClick={handleClose}>
                                <Button onClick={() => props.deleteMake(index)}>Delete</Button>
                            </MenuItem>
                              
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import