import React from 'react';

export default () => (
  <div>
    <a href="https://github.com/busywork/crud-academy">
      <h1>CRUD Academy</h1>
    </a>
    <p>
      This project utilizes Node.js running Express/Sequelize with a PostgreSQL database for the
      backend and React-Redux for the front-end to create a full stack CRUD application.
    </p>
    <h2>Installation</h2>
    <p>Clone the repository and install NPM packages</p>
    <pre>
      <code>npm install</code>
    </pre>
    <p>Create a PostgreSQL database</p>
    <pre>
      <code>createdb crud-academy</code>
    </pre>
    <p>Run the seed script (optional)</p>
    <pre>
      <code>npm run seed</code>
    </pre>
  </div>
);
