import React, {useState} from "react";
import UploadUser from "./UploadUser";
import UploadConnection from "./UploadConnection";
import UserList from "./UserList";
import ShortestConnection from "./ShortestConnection";


export default () => {
 
  const [user1, setUser1] = useState('')
  const [user2, setUser2] = useState('')
 
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Degrees of Seperation</h1>
          <hr className="my-4" />
          <h4>Choose two users to see how many steps are required to connect them</h4>
          <ShortestConnection
            user1 = {user1}
            user2 = {user2}
          />
          <UploadUser />
          <UploadConnection />
          <UserList  
            setUser1 = {setUser1} 
            setUser2 = {setUser2}
            />
        </div>
      </div>
    </div>
  )
};