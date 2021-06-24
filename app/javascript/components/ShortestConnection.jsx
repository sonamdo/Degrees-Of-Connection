import React, { useState } from "react";

export default () => {

    const data = {"user1": 1, "user2":4 }
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