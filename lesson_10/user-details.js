let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        function userItem(user) {
            for (const userKey in user) {
                let div = document.createElement("div");
                div.innerHTML = `<b>${userKey}</b>:`;
                document.body.appendChild(div);

                if (typeof user[userKey] !== "object") {
                    div.innerHTML = `<b>${userKey}</b>: ${user[userKey]}`;
                } else {
                    userItem(user[userKey]);
                }
            }
        }

        userItem(user);
    })
