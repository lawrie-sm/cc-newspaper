import React from 'react';

const AdminJournalists = ({authors}) => {

  const authorNodes = authors.map((a, i) => (
    <>
    <p key={i}>{a.name}, {a.title}</p>
    <button>edit</button>
    <button>delete</button>
    </>
  ));
  return (<>{authorNodes}</>)
}


export default AdminJournalists;
