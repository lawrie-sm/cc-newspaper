const url = 'http://localhost:8080'

export const postArticle = (article) => new Promise((res, rej) => {
  if (article.id) delete article.id;
  article.author = `${url}/authors/${article.authorId}`;
  fetch(`${url}/articles`,
    {
      method: 'POST',
      body: JSON.stringify(article),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(newArticle => res(newArticle))
    .catch(err => rej(err))
});

export const patchArticle = (article) => new Promise((res, rej) => {
  article.author = `${url}/authors/${article.authorId}`;
  fetch(`${url}/articles/${article.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(article),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(newArticle => res(newArticle))
    .catch(err => rej(err))
});

export const deleteArticle = (id) => {
  fetch(`${url}/articles/${id}`, { method: 'DELETE' })
    .catch(err => console.log(err));
};

export const postAuthor = (author) => new Promise((res, rej) => {
  fetch(`${url}/authors`,
    {
      method: 'POST',
      body: JSON.stringify(author),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(newAuthor => res(newAuthor))
    .catch(err => rej(err));
});

export const deleteAuthor = (id) => {
  fetch(`${url}/authors/${id}`, { method: 'DELETE' })
    .catch(err => console.log(err));
};


