import React from 'react'

const StickyBar = () => {
    return(
        <div  className="position-sticky" style={{top:'2rem'}} >
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                Task Mate Todo allows users to easily create and manage their to-do lists. Users can add tasks, set due dates, and prioritize them based on their importance. Users can also categorize tasks into different groups such as work, personal, or shopping, making it easier to manage and track tasks</p>
            </div>  
            <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                    <li><a href="#">March 2023</a></li>
                    <li><a href="#">February 2023</a></li>
                    <li><a href="#">January 2023</a></li>                    
                </ol>
            </div>

            <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                    <li><a href="https://github.com/prabhu88/TaskMate.git">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                </ol>
            </div>
        </div>
    )
}

export default StickyBar