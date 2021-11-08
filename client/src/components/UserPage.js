import React from 'react'
import { Link } from 'react-router-dom'


function UserPage({user}) {
    console.log(user)

    return (
        <div className="container">
            &nbsp;
            &nbsp;
            <div className="card container">
                <table>
                    <tbody>
                        <tr>
                            <th className="board">🙂 Welcome {user.first_name}</th>
                            <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link to={`#`} className="btn btn-primary bttn2">Start a discussion</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            &nbsp;
            <div className="card container">
                <h2 className="title">Interested Discussion</h2>
                <div className="container">
                    <p>add interested discussion</p>
                </div>
            </div>
            &nbsp;
            <div className="card container">
                <h2 className="title">User Discussions</h2>
                <div className="container">
                    <p>add user added discussions</p>
                </div>
            </div>
            &nbsp;
            <div className="card container">
                <h2 className="title">User Comments</h2>
                <div className="container">
                    <p>add user added comments</p>
                </div>
            </div>
        </div>
    )
}

export default UserPage