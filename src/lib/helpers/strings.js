export const truncateString = (string, limit = 30) => {
  if (!string) return ''

  if (string.length > limit) {
    string = string.substring(0, limit).trim()
    string = string.replace(/[^A-Za-z\d]+$/g, '') + '...'
  }
  return string
}
