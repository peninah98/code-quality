const penaltyPoints = (password = "") => {
  if (password === null) return 0
  if (typeof password !== "string") password = String(password)

  let count = 0
  const regex = /(.)\1+/g
  const matches = password.match(regex)
  if (!matches) return 0

  matches.map(item => item.length === 2 ? count++ : count+=2)

  return count 
}

export default penaltyPoints
