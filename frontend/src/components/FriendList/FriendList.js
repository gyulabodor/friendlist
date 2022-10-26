import React, { useEffect, useState } from 'react'
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow, 
    Paper
} from "@mui/material"
import { fetchGetFriends } from '../../requests/fetchGetFriends';
import { convertEnumNumToString } from '../../utilities/convertEnum';
export const FriendList = () => {
 
    const [friendList,setFriendList] = useState([]);
    
    useEffect(() =>  {
        friendListRequest()
    },[])

    const friendListRequest = async () => {
        const friends = await fetchGetFriends();
        setFriendList(friends)
    }



 
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Favourite food</TableCell>
                <TableCell align="right">Comment</TableCell>
                <TableCell align="right">Relationship type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {friendList.map((friend) => (
                <TableRow
                key={friend.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {friend.name}
                </TableCell>
                <TableCell align="right">{friend.email}</TableCell>
                <TableCell align="right">{friend.favFood.name}</TableCell>
                <TableCell align="right">{friend.comment}</TableCell>
                <TableCell align="right">{convertEnumNumToString(friend.relationShipStatus)}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  )
}

