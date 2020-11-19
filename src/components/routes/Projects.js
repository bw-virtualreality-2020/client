import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Project(props) {

    useEffect(()=>{
        fetchUser();
    },[])
 
    const fetchUser = () => {
        axiosWithAuth()
        .get('https://bw-virtualreality-2020.herokuapp.com/api/projects')
        .then(res => {
            console.log(res.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
        <h1>This is where the projects live!</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.userAuthReducer
    }
}

export default connect (mapStateToProps, {})(Project);