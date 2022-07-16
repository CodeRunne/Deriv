function ValidateUsers(user) {
    const error = {};

    if(user.email === "") {
        error.email = "Email is required";
    } else if(!(/[\D][\w]{4,15}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/ig).exec(user.email)) {
        error.email = "That doesn't look like an email address.";
    }

    if(user.password === "") error.password = "Password cant be empty";

    return error;
}

export default  ValidateUsers