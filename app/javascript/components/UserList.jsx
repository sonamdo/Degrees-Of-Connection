import React, { useState } from "react";

export default () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    const searchResults = users.filter(user => user.name.toLowerCase().startsWith(search))

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

    return (
        <div>
            <button onClick = {loadUsers}>
                loadUsers
            </button>
            <input
                type = "text"
                placeholder = "Search Users"
                value = {search}
                onChange = {(e) => setSearch(e.target.value.toLowerCase())}
            >
            </input>
            <table>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                </tr>
            {   searchResults?  
                searchResults.map((user) => {
                    return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                }) : null
        } 
        </table>
        </div>
    )
}