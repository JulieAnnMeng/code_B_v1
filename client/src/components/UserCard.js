import React from 'react'
import { Link } from 'react-router-dom'


function UserCard({id, type, topic, discussion, comment, date}) {
    
        return (
            <div className="container">
                { type === "discussion" ?
                <div className="card">
                    {/* <h1 className="title">{topic}</h1> */}
                    <Link to={`/Discussion/${id}`} className="title" > {topic} </Link>
                    <p>{discussion}</p>
                    <p><span>Date created/updated: </span>{date}</p>
                    &nbsp;
                </div>
            :
                <div className="card">
                    {/* <h1 className="title">{topic}</h1> */}
                    <Link to={`/Discussion/${id}`} className="title" > {topic} </Link>
                    <p>{discussion}</p>
                    <div className="card container">
                        <p>{comment}</p>
                        <p><span>Date created/updated: </span>{date}</p>
                    </div>
                    &nbsp;
                </div>
            }
                

                {/* <div className="d-grid gap-2 d-md-block">
                    <Link to={`/Discussion/${id}`} className="btn btn-primary bttn2">☆ <span className="badge bg-secondary">{interestCount}</span> Interests</Link>
                    &nbsp; &nbsp;
                    <Link to={`/Discussion/${id}`} className="btn btn-primary bttn2"><span className="badge bg-secondary">{commentCount}</span> Comments</Link>
                </div> */}
            &nbsp;
            <br/></div>       
    )
}

export default UserCard