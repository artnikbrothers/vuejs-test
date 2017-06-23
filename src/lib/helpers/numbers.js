export const round = (n, precision) => {
  let prec = Math.pow(10, precision)
  return Math.round(n * prec) / prec
}

export const abbrNum = (n) => {
  let base = Math.floor(Math.log(Math.abs(n)) / Math.log(1000))
  let suffix = 'kmb'[base - 1]
  return suffix ? round(n / Math.pow(1000, base), 2) + suffix : '' + n
}
