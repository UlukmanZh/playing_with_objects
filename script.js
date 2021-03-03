
var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

    // How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this

    //John's age
    for(let i = 0; i<users.length;i++){
        if(users[i].name === "John"){
            console.log(users[i].age);
        }
    }
    //name of the first object
    console.log(users[0].name);

    //Michael - 37
    // John - 30
    // David - 27 

    for(let i = 0; i<users.length;i++){
        console.log(users[i].name + " - " + users[i].age);
    }   




