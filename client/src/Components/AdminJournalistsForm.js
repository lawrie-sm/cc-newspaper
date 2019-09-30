import React from 'react';

const AdminJournalistsForm = () => (

  <>
  <p>AdminJournalistsForm</p>
  <form action="/" method="post">
  <div>
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" />
  </div>

  <div>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" />
  </div>


  <input type="submit" value="Submit" />

  </form>

  </>
)

export default AdminJournalistsForm;
