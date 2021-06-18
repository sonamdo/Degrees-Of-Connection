import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Home Page</h1>
        <p className="lead">
          Practice app for react with ruby
        </p>
        <hr className="my-4" />
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View DB Entries
        </Link>
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
        <Upload />
      </div>
    </div>
  </div>
);