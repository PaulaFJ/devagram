const validateName = (name) => {
  return name?.toString().lenght > 2;
}

const validateEmail = (email) => {
  const mail = email?.toString()
  return mail.lenght >= 5 && mail.includes('@') && mail.includes('.')
}

const validatePassword = (password) => {
  return password?.toString().lenght > 3
}

const validatePasswordConfirm = (password, passwordConfirm) => {
  return validatePassword(password) && password === passwordConfirm
}

export {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm
}