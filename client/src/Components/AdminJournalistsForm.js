import React from 'react';

const AdminJournalistsForm = () => (

  <>
  <p>AdminJournalistsForm</p>
  <form action="/" method="post">
  <div>
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" />
  </div>

  <div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  </div>


  <input type="submit" value="Submit" />

  </form>

  </>
)

export default AdminJournalistsForm;
