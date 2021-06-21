import React, { useState, useEffect } from "react";

export default () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [search2, setSearch2] = useState('')

    const searchResults = users.filter(user => user.name.toLowerCase().startsWith(search))
    const searchResults2 = users.filter(user => user.name.toLowerCase().startsWith(search2))

    function loadUsers(){
        fetch("/users/index")
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setUsers(response))
    }

    useEffect(() => { loadUsers() }, []);

    return (
        <div className = "row">
            <div className = "col-md-6 d-flex justify-content-center">
                <div>
                    <input
                        type = "text"
                        placeholder = "Search Users"
                        value = {search}
                        onChange = {(e) => setSearch(e.target.value.toLowerCase())}
                    >
                    </input>
                    <table className = "table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   searchResults?  
                            searchResults.map((user) => {
                                return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                    </tr>
                                }) : null
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className = "col-md-6 d-flex justify-content-center">
                <div>
                    <input
                        type = "text"
                        placeholder = "Search Users"
                        value = {search2}
                        onChange = {(e) => setSearch2(e.target.value.toLowerCase())}
                    >
                    </input>
                    <table className = "table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   searchResults2?  
                                searchResults2.map((user) => {
                                    return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                        </tr>
                                }) : null
                            } 
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}