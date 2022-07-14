function Validation(value) {
  const error = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
 
  if (value.firstname.length > 3 && value.firstname.length < 15) {
    error.firstname = " firstname length should be between 3 to 15 letters";
    
  }
  if (value.lastname.length > 3 && value.lastname.length < 15) {
    error.lastname = " last name length should be between 3 to 15 letters";
  }
 if (!regex.test(value.email)) {
    error.email = "this not valid email";
  }
 if (value.securityAns.length > 1 && value.securityAns.length < 15) {
    error.securityAns = "securityAns can't be empity";
  }

 if (value.bio.length < 15) {
    error.bio = " length should be 15 charachter";
  }

  return error;
}
export default Validation;
