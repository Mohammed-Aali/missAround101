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
        posts.forEach(post => output+= `<li>${post.title}</li>`)
        //insert it in the body 
        document.body.innerHTML = output;

        // 1000 miliseconds
    }, 1000)
}

// creating the funciton with a call back function;
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000)
}

//calling the method here so our code excutes
createPost({title: "post three", body: "this is post three"}, getPost)