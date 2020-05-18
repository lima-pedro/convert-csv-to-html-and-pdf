class Processor {

  static Process (data) {
    let a = data.split('\r\n') // recebe uma string e fatia ela na quebra de linha
    // console.log(a) // aqui cada linha tem um índice dentro do array 
    // porém ainda precisamos salvar esses valores por linha 
    let rows = [] 

    a.forEach(row => { // percorre o array criado pelo split 
      let array = row.split(',') // e quebra mais uma vez nas vírgulas linha por linha 
      rows.push(array) // adiciona ao novo array 
    })

    return rows // retorna um array de linhas que por sua vez são arrays 
  }
}

module.exports = Processor