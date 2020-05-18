const fs = require('fs')
const util = require('util') // para usar o promisify

class Reader {

  constructor () {
    this.reader = util.promisify(fs.readFile) // transforma a função numa promise
  } 

  async Read(filepath) {
    try {
      return await this.reader(filepath, 'utf-8') // 
    } catch (err) {
      return undefined
    }
    
  }
}

module.exports = Reader
