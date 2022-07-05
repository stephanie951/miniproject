let userDetailsDatabase = {};

function getUserDetails() {
  let userName = prompt("Enter your username");
  if (userName == null) {
    return;
  }

  function validateUsername(userName) {
    if (userName.length > 0 && userName.length < 10) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUsername(userName) == false) {
    userName = prompt("Username must be greater than 0 and less than 10");
  }
  userDetailsDatabase["userName"] = userName;

  let email = prompt("Enter your email");
  if (email == null) {
    return;
  }
  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  while (validateEmail(email) == false) {
    email = prompt("Enter valid email");
  }
  userDetailsDatabase["email"] = email;

  let phoneNumber = prompt("Enter your phone number");
  if (phoneNumber == null) {
    return;
  }

  function validateNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validateNumber(phoneNumber) == false) {
    phoneNumber = prompt("Enter a valid phone number");
  }
  userDetailsDatabase["Phonenumber"] = phoneNumber;

  let password = prompt("Enter your password");
  if (password == null) {
    return;
  }

  function validatePassword(password) {
    if (password.length > 6 && password.length < 12) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt("Password must be greater than 6 and less than 12");
  }

  let confirmPassword = prompt("Confirm password");
  if (confirmPassword == null) {
    return;
  }

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  while (validateConfirmPassword(confirmPassword) == false) {
    password = prompt("Password does not match");
  }
}
function viewUserDetails() {
  alert(
    `YOUR DETAILS\n\nUsername: ${userDetailsDatabase.userName}\nPhone Number: ${userDetailsDatabase.Phonenumber}\nEmail: ${userDetailsDatabase.email}`
  );
  console.log(userDetailsDatabase);
}
