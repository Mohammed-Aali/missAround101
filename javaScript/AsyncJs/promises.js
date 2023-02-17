const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"}
];

function getPost() {
    // we set a waiting time using the setTimeout function
    setTimeout(() => {
        // initilaized a variable name output to an empty string
        let output = "";
        // for each post i want to append the post in an li and get me its title
        posts.forEach(post => output+= `<li>${post.title}</li>`);
        //insert it in the body 
        document.body.innerHTML = output;

        // 1000 miliseconds
    }, 1000);
}

// creating the funciton with a call back function;
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);  
        }, 2000);

        const error = false;
        if(!error) {
            resolve(`im resolved`);
        } else {
            reject(`something went wrong`);
        }
    })
}

//calling the method here so our code excutes
// createPost({title: "post three", body: "this is post three"}).then(getPost).catch(err => console.log(err))

// Async / Await
async function init() {
    await createPost({title: "post three", body: "this is post three"});

    getPost();
}
init();


// Async / Awaits / Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}
fetchUsers()

//promes.all
// let promise1 = Promise.resolve("Hello World");
// let promise2 = 10;
// let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "GoodBye"))
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))

