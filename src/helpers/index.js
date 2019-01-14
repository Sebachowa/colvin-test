export const parseQuoteContent = (string) => {
  string = string.slice(0, 100)
  string = string.replace('<p>', "")
  string = string.replace('</p>', "")
  return string
}

export const getRandomImage = (array) => {
  return array[Math.floor(Math.random() * array.length)].urls.regular
}

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}