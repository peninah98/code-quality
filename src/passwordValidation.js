export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

const isValidPassword = (password) => {
  if (!typeof password === "string") {
    password = String(password)
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{10}$/
  if (forbiddenPasswords.includes(password)) return false
  if (!regex.test(password)) return false 
  if (new Set([...password]).size <4) return false
  const arrayOfpassword = password.split("").filter(elements => Number(elements)).map(element => +element);

  const checkingAscending = arrayOfpassword.some(
    (char, index, array) => char + 1 === array[index + 1] || char - 1 === array[index + 1]
  )
  if (checkingAscending) return false
  return true
}

export default isValidPassword
