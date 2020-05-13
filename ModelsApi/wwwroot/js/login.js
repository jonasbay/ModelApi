fetch('/api/Account/login', {
    method: 'POST',
    body: JSON.stringify(({
            email: username,
            password: password
        }),
        headers: new Headers({
        'Content-Type': 'application/json'
    })
}).then(res => res.json().then((token) => {
        localStorage.setItem("token", token.jwt);
    )
    .catch(error => console.error('Error:', error))