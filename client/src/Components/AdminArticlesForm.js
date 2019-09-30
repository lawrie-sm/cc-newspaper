import React from 'react';

const AdminArticlesForm = ({categories, authors}) => {

  const categoryNodes = categories.map((category, index) => (
    <option key={index}>{category}</option>
  ))

  const authorNodes = authors.map((author, index) => (
    <option key={index}>{author.name}, {author.title}</option>
  ))
  return(
    <>
    <p>AdminArticlesForm</p>
    <form action="/" method="post">
    <div>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" />
    </div>

    <div>
    <label for="summary">Summary:</label>
    <input type="text" id="summary" name="summary" />
    </div>

    <div>
    <label for="text">Text:</label>
    <input type="text" id="text" name="text" />
    </div>

    <div>
    <label for="date">Date:</label>
    <input type="date" id="date" name="date" />
    </div>

    <div>
    <label for="category">Category:</label>
    <select name="category">
    <>
    {categoryNodes}
    </>
    </select>
    </div>

    <div>
    <label for="author">Author:</label>
    <select name="author">
    <>
    {authorNodes}
    </>
    </select>
    </div>

    <input type="submit" value="Submit" />

    </form>

    </>
  )
}

export default AdminArticlesForm;
