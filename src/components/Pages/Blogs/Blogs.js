import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center my-5">Daily Blogs</h2>
      <div className="blogs-container">
        <div className="blogs-card">
          <h4>Q1: Difference between authorization and authentication</h4>
          <p>
            Authorization is the act of granting a user's access to specific
            programs, files, and data, whereas authentication is the process of
            authenticating a user's identity. Authentication is a mechanism used
            in the digital world to ensure that people are who they say they
            are. Following the authentication process, authorization is used to
            provide the user permission to access various levels of information
            and do specific tasks, based on the criteria set for different types
            of users. For example, the authentication process is a website's
            login/sign-in procedure, whereas the authorization process
            determines the user's level of access to various portions of the
            website. An administrator, for example, has more access to the
            website than a regular user.
          </p>
        </div>
        <div className="blogs-card">
          <h4>
            Q2: Why are we using firebase? What other options do we have to
            implement authentication?
          </h4>
          <p>
            We are using firebase for user authentication and website hosting.
            Firebase is one of the most popular services for authentication.
            Some other alternative options are listed below:
          </p>
          <span className="d-flex">
            <ul>
              <li>Auth0</li>
              <li>Okta</li>
              <li>Passport</li>
              <li>MongoDB </li>
            </ul>
            <ul>
              <li>Amazon Cognito</li>
              <li>Keycloak</li>
            </ul>
          </span>
        </div>
        <div className="blogs-card">
          <h4>
            Q3: What other services does firebase provide other than
            authentication?
          </h4>
          <p>
            Firebase offers a variety of features that aid in the development of
            high-quality mobile and online applications. Firebase is a complete
            solution for developing mobile and online applications faster and
            more efficiently with fewer resources. Other than authentication,
            Firebase offers a variety of features to make developers' lives
            easier. The following are some of the services provided by Firebase.
          </p>
          <span className="d-flex">
            <ul>
              <li>Predictions</li>
              <li>Remote Config</li>
              <li>Hosting</li>
              <li>Cloud Firestore</li>
            </ul>
            <ul>
              <li>Cloud Messaging</li>
              <li>Cloud Functions</li>
              <li>Dynamic Links</li>
              <li>Cloud Storage</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
