/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function cntRbt(ls) {
  var cnt = 0;
  let regex = /R/
  for (var i = 0; i < ls.length; i++) {
    if ((ls[i]).match(regex)) {
      cnt++;
    }
  }
  return cnt;
}


