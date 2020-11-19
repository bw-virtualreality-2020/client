import React from 'react'
import { connect } from 'react-redux'

function Project(props) {
    const {project_name, project_description, project_goal, project_image} = props.project
    return (
        <li className='project-container'>
            <div className="project-info">
                <img src={project_image || 'https://specials-images.forbesimg.com/imageserve/1150698673/960x0.jpg?fit=scale'} alt={`Avatar for ${project_name}.`} />
                <h3>{project_name}</h3>
                <p>{project_description}</p>  
            </div>
            <div className="project-funds">
                <p>{project_goal}</p>
            </div>
        </li>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, {})(Project)
