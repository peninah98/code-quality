/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  let count =0
  const pattern = /([a-z0-9])\1+/gi;
  const matches = password.match(pattern);
  for(let i = 0; i<matches.length;i++){
    if(matches[i].length === 2){
      count += 1
    }
    else if(matches[i].length > 2){
      count += 2
    }
  }

  return count || 0

}
