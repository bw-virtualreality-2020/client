import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../store/actions/getCategory';
import getProjects from '../../store/actions/getProjects';

function ProjList(props) {
    const {getProjects, getCategories} = props


    const { projects } = props.state.projectsReducer

    useEffect(()=>{
        getProjects()
        getCategories()
    },[getProjects, getCategories])

    return (
        <section>
            <ul>
                {projects && projects.length}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    state
})

export default connect (mapStateToProps, {getCategories, getProjects})(ProjList);