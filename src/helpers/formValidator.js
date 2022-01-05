import validator from "validator";

const formValidator = ({ email, password }) => {
  let isErrorObj = {
    isErrorEmail: false,
    isErrorPassword: false,
    isErrorFind: false,
  };

  if (!validator.isEmail(email)) {
    isErrorObj.isErrorEmail = true;
    isErrorObj.isErrorFind = true;
  }

  if (!validator.isLength(password, { min: 8 })) {
    isErrorObj.isErrorPassword = true;
    isErrorObj.isErrorFind = true;
  }

  return isErrorObj;
};

export default formValidator;
