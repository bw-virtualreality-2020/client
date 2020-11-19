import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { configs } from '../../config';
import logoutUser from '../../store/actions/logoutUser';

function Footer(props) {
    const isAuthorized = props.state.userAuthReducer.authenticated || window.localStorage.getItem(configs.TOKEN) ? true : false
    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        props.logoutUser()
        history.push('/')
    }

    const privateFooterNav = () => {
        return (
        <>
            <Link to='/dashboard'>DashBoard</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='' onClick={handleLogout}>Logout</Link>
        </>
        )
    }

    const publicFooterNav = () => {
        return (
            <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </>
            )        
    }
    
    return (
        <footer>
            <h2>VR Venture</h2>
            {/* todo (post mvp): add site map and other data */}
            {/* <nav>
                <Link to='/'>Home</Link>
                {isAuthorized ? privateNav() : publicNav()}
            </nav> */}
        </footer>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { logoutUser })(Footer)