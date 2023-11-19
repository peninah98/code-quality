export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

const isValidPassword = (password) => {
  if (!typeof password === "string") {
    return String(password.sort((a, b) => a - b))
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{10}$/
  if (forbiddenPasswords.includes(password)) return false
  if (!regex.test(password)) return false
  if (!new Set([...password]).size > 3) return false
  if (password < 4) return false
  if (
    ![...password].every(
      (char, index, array) => index === 0 || char >= array[index - 1]
    )
  )
    return false
}

export default isValidPassword
