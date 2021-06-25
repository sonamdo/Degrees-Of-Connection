import React, { useState } from "react";

export default ({user1, user2}) => {

    const data = {"user1": user1, "user2": user2 }
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    function handleClick(){
        console.log("JSON Button")

        fetch(`/connections/show`, {
            headers: {
                'X-CSRF-Token': csrf,
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(data)
          })
    }

    return(
        <div>
            <button
                onClick = {handleClick}
            >
                JSON
            </button>
        </div>
    )

}