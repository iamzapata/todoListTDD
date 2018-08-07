const splitToLowerCase = string => delimeter => {
  const name = string.split(delimeter).pop()
  return name.toLowerCase().replace(/^\w/, c => c.toUpperCase())
}

export default splitToLowerCase
