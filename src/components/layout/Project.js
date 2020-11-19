import React from 'react'
import { connect } from 'react-redux'

// "project_description": "Funding project for virtual reality venture",
// "project_goal": "5000.00",
// "project_image": null

function Project(props) {
    const {project_name, project_description, project_goal, project_image} = props
    return (
        <div className='project-container'>
            <div className="project-info">
                <img src={project_image} alt={`Avatar for ${project_name}.`} />
                <h3>{project_name}</h3>
                <p>{project_description}</p>  
            </div>
            <div className="project-funds">
                <p>{project_goal}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, {})(Project)
