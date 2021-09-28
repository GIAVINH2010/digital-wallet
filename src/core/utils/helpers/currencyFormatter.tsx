const currencyFormatter = (number: number) => {
  return new Intl.NumberFormat('de-DE').format(number)
}

export default currencyFormatter


