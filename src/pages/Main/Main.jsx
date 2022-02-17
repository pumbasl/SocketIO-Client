import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Form, Button } from 'react-bootstrap';
import { createRoom } from '../../store/reducers/actions/ActionCreators';

import { useDispatch, useSelector } from 'react-redux';

export default function Main(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { roomId } = useSelector(state => state.RoomReducer);
    const handleCreateRoom = () => {
        dispatch(createRoom());
    };

    useEffect(() => {
        if(roomId !== '') navigate(`/room/${roomId}`);
    }, [roomId]);

    return(
        <Form className="text-center mt-5">
            <Button onClick={handleCreateRoom}>Создать комнату</Button>
        </Form>
    );
}