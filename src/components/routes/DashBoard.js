import React, { useEffect } from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { useSelector } from 'react-redux';


function Dashboard() {

    const [user] = useSelector(state => [state.userAuthReducer.user]);

    let dateTime = {date:'', time:''};

    const dateAndTime = () => {
        let fullDate = String(new Date()).split(' ');
        let date = fullDate.slice(0, 5);
        let time = date.pop();
        date = date.join(' ');
        dateTime.date = date;
        dateTime.time = time;
        return dateTime;
    }

    dateAndTime(); 

    return (
        <div>
            <h1>Hello Welcome {user.user_username} it is {dateTime.date} and the time is {dateTime.time}</h1>
        </div>
    )
}


export default Dashboard;