'use strict'

console.log(`index.js loaded`);

function fetchInfo(userId) {
    fetch(`https://api.github.com/users/${userId}`)
    .then(res => {
        console.log(res.status);
        if (res.ok) {
            res.json().then(userInfo => {
                console.log(userInfo);
                createDom(userInfo);
            });
        }
    }).catch(e => console.log(e.messge()));
}

function createDom(info) {
    const result = document.getElementById("result");
    result.innerHTML = `
    <h4>${info.name} (@${info.login})</h4>
    <img src="${info.avatar_url}" alt="${info.login}" height="100">
    <dl>
        <dt>Location</dt>
        <dd>${info.location}</dd>
        <dt>Repositories</dt>
        <dd>${info.public_repos}</dd>
    </dl>
    `;
}