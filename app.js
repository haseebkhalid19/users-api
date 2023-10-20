const section = document.querySelector('section');
const tableBody = document.getElementById('table-body');
const tableBody1 = document.getElementById('table-body1');
const tableBody2 = document.getElementById('table-body2');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => {
        users.forEach(user => {
            // Create a new row for each user
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.address.city}</td>
                        <td><a href="post.html?id=${user.id}" class="btn btn-success">View Posts</a></td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch((error) => console.log('error :', error));

const postsUrl = new URLSearchParams(window.location.search);
const postId = postsUrl.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
    .then((data) => data.json())
    .then((posts) => {
        posts.forEach(post => {
            // Create a new row for each user
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td><a href="comment.html?id=${post.id}" class="btn btn-success">See Comment</a></td>
        `;
            tableBody1.appendChild(row);
        });
    })
    .catch((error) => console.log('error :', error));

const commentsUrl = new URLSearchParams(window.location.search);
const commentId = commentsUrl.get("id");

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
    .then((data) => data.json())
    .then((comments) => {
        comments.forEach(comment => {
            // Create a new row for each user
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
        `;
            tableBody2.appendChild(row);
        });
    })
    .catch((error) => console.log('error :', error));