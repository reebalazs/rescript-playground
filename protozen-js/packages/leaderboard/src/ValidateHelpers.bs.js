// Generated by ReScript, PLEASE EDIT WITH CARE


function validateName(name) {
  if (name === "") {
    return "Name is mandatory";
  } else {
    return "";
  }
}

function validateScore(score) {
  if (score === 0) {
    return "Hint: positive?";
  } else {
    return "";
  }
}

function fixedHelperText(value) {
  if (value !== "") {
    return value;
  } else {
    return " ";
  }
}

export {
  validateName ,
  validateScore ,
  fixedHelperText ,
  
}
/* No side effect */