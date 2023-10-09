export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  if(String(password).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){10}$/gm) && new Set([...password]).size > 3){
    return true
  }
  else{
    return false
  }
  
}


