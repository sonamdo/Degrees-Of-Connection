import React, { useState } from "react";

export default ({user1, user2}) => {

    const [degrees, setDegrees] = useState("")
    const [connection, setConnection] = useState(false)

    function handleClick(){
        console.log("JSON Button")
        fetch(`/connections/show?user1=${user1}&user2=${user2}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setDegrees(response))
          .then(setConnection(true))
    }

    return(
        <div>
            <button
                onClick = {handleClick}
            >
                JSON
            </button>
            {
                connection ?
                <p>{degrees ? <p>User are connected through {degrees} steps</p>: <p>Users are not connected</p>}</p>
                : ""
            }
        </div>
    )

}