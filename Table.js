class Table {
  constructor (array) {
    this.header = array[0] // o caebçalho sempre estará na posição 0 do array, na 1° linha
    array.shift() // shift remove o primeiro elemento do array 
    this.rows = array // salva o restante do array em rows 
  }

  get RowCount () {
    return this.rows.length
  }

  get ColumnCount () {
    return this.header.length
  }
}

module.exports = Table
