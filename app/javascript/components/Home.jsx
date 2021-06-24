import React from "react";
import UploadUser from "./UploadUser";
import UploadConnection from "./UploadConnection";
import UserList from "./UserList";
import ShortestConnection from "./ShortestConnection";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Degrees of Seperation</h1>
        <hr className="my-4" />
        <h4>Next steps</h4>
        <ul>
            <li>DB: Controller and Model</li>
                <ul>
                    <li>rails generate model Name field:type field:type</li>
                    <li>add validation to model</li>
                    <li>rails db:migrate</li>
                    <li>generate controller with index, create, show, destroy actions</li>
                </ul>
            <li>Update CSS</li>
            <li>Connect to api and retrieve data</li>
        </ul>
        <ShortestConnection />
        <UploadUser />
        <UploadConnection />
        <UserList />
      </div>
    </div>
  </div>
);