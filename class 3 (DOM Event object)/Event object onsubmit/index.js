const form = document.querySelector("form");

const uname = form.querySelector("#name");
const umail = form.querySelector("#email");
const upass = form.querySelector("#password");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit");
    // console.log(uname.value);
    // console.log(umail.value);
    // console.log(upass.value);

    const userInfo = {
        name : uname.value,
        email : umail.value,
        password : upass.value,
    }
    console.log(userInfo);

    uname.value = "";
    umail.value = "";
    upass.value = "";
});
