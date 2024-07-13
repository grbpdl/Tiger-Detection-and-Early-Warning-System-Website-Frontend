import toast from 'react-hot-toast';

/**validate register form */
export async function registerValidation(values){
    const errors = emailVerify({}, values);
    passwordVerify(errors, values);
    usernameVerify(errors, values);
    confirmPassword(errors, values);

    return errors;
}

//**validate recovery form */
export async function recoveryValidation(values){
    const errors = passwordVerify({}, values);
    confirmPassword(errors, values);

    return errors;
}
/** validate login form */
export async function loginValidation(values){
    const errors = emailVerify({}, values);
    passwordVerify(errors, values);

    return errors;
}
export async function addRangerValidation(values){
    const errors = firstnameVerify({}, values);
    lastnameVerify(errors, values);
    emailVerify(errors, values);
    passwordVerify(errors, values);

    return errors;
}
export async function addPostValidaton(values) {
    const errors = {};

    // Validate title
    if (!values.title) {
        errors.title = "Title is required.";
        toast.error(errors.title);
    } else if (values.title.length < 5) {
        errors.title = "Title must be more than 5 characters.";
        toast.error(errors.title);
    }

    // Validate upload file
    if (!values.uploadfile) {
        errors.uploadfile = "File is required.";
        toast.error(errors.uploadfile);
    }

    return errors;
}

export async function addVictimValidation(values) {
    const errors = {};

    // Validate name
    if (!values.name) {
        errors.name = "Name is required.";
        toast.error(errors.name);
    } else if (values.name.length < 2) {
        errors.name = "Name must be more than 1 character.";
        toast.error(errors.name);
    }

    // Validate age
    if (!values.age) {
        errors.age = "Age is required.";
        toast.error(errors.age);
    } else if (!/^\d+$/.test(values.age)) {
        errors.age = "Age must be a number.";
        toast.error(errors.age);
    }

    // Validate address
    if (!values.address) {
        errors.address = "Address is required.";
        toast.error(errors.address);
    }

    // Validate phone number
    if (!values.phonenumber) {
        errors.phonenumber = "Phone number is required.";
        toast.error(errors.phonenumber);
    } else if (!/^\d+$/.test(values.phonenumber)) {
        errors.phonenumber = "Phone number must be a number.";
        toast.error(errors.phonenumber);
    } else if (values.phonenumber.length !== 10) {
        errors.phonenumber = "Phone number must be 10 digits.";
        toast.error(errors.phonenumber);
    }

    // Validate description
    if (!values.description) {
        errors.description = "Description is required.";
        toast.error(errors.description);
    }

    // Validate upload file
    if (!values.uploadfile) {
        errors.uploadfile = "File is required.";
        toast.error(errors.uploadfile);
    }

    return errors;
}


/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}

/** validate username */
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.length < 4){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}

/** validate email */
function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

/** validate firstname */
function firstnameVerify(error = {}, values){
    if(!values.firstname){
        error.firstname = toast.error("First name Required...!");
    }else if(values.firstname.length < 2){
        error.firstname = toast.error("First name must be more than 1 character long");
    }

    return error;
}

/** validate lastname */
function lastnameVerify(error = {}, values){
    if(!values.lastname){
        error.lastname = toast.error("Last name Required...!");
    }else if(values.lastname.length < 2){
        error.lastname = toast.error("Last name must be more than 1 character long");
    }

    return error;
}

/** confirm password validation */
function confirmPassword(error = {}, values){
    if(!values.confirmPassword){
        error.confirmPassword = toast.error('Type password Again');
    }else if(values.password !== values.confirmPassword){
        error.confirmPassword = toast.error('Passwords do not match');
    }

    return error;
}
