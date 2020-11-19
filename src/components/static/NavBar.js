import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { configs } from '../../config';
import logoutUser from '../../store/actions/logoutUser';

function NavBar(props) {
    const isAuthorized = props.state.userAuthReducer.authenticated || window.localStorage.getItem(configs.TOKEN) ? true : false
    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        props.logoutUser()
        history.push('/')
    }

    const privateNav = () => {
        return (
        <>
            <Link to='/dashboard'>DashBoard</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='' onClick={handleLogout}>Logout</Link>
        </>
        )
    }

    const publicNav = () => {
        return (
            <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </>
            )        
    }
    
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                {isAuthorized ? privateNav() : publicNav()}
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { logoutUser })(NavBar)
