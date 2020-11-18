import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


function Project(props) {

    useEffect(()=>{
        fetchUser();
    },[])

    const fetchUser = () => {
        axios.get('https://bw-virtualreality-2020.herokuapp.com/api/projects')
        .then(res => {
            console.log(res); 
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
        <h1>This is where the projects live!</h1>
        {console.log(props.data)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.userAuthReducer
    }
}

export default connect (mapStateToProps, {})(Project);