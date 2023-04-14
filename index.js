// Add your code here
function submitData(name, email) {
  return fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name, email }),
  })
    .then(res => res.json())
    .then(data => {
      const h1 = document.createElement('h1');
      h1.textContent = data.id;
      document.body.appendChild(h1);
    })
    .catch(err => {
      const div = document.createElement('div');
      div.textContent = err.message;
      document.body.appendChild(div);
    });
}
