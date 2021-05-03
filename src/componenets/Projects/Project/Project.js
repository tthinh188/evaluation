import React from 'react'

const Project = ({ projClass, title, description }) => {
    return (
        <div className="col-sm-4 col-md-4 text-center">
            <div className={projClass}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                        <div className="project-more-info">
                            <a className="btn btn-default btn-border" href="#">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
