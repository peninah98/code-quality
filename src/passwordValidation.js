export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password) {
  if (typeof password !== 'string') password = String(password.sort((a,b)=>a-b));
   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{10}$/;
  if(regex.test(password) && !forbiddenPasswords.includes(password) ) {
    if(new Set([...password]).size > 3) return true
  }
    return false 
   
}






