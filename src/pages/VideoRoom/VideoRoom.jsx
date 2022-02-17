import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoom, setUrlInRoom } from '../../store/reducers/actions/ActionCreators';

//player
import { VideoPlayer } from '../../components';
//

export default function VideoRoom(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { roomId } = useParams();
    const [ currentUrl, setCurrentUrl ] = useState(''); 
    const { check, url } = useSelector(state => state.RoomReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUrlInRoom(currentUrl));
    };

    useEffect(() => {
        dispatch(checkRoom(roomId));
    }, []);

    useEffect(() => {
        if(check !== undefined){
            if(!check) navigate('/roomNotFound')
        }

    }, [check]);
    
    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Label>URL YOUTUBE</Form.Label>
                <Form.Control value={currentUrl} onChange={(e) => setCurrentUrl(e.target.value)} type="url" placeholder="url" />
                <Button className="mt-2" type="submit">Го</Button>
            </Form>

            { url !== '' ? <VideoPlayer url={url} /> : (null) }
        </>
    );
}