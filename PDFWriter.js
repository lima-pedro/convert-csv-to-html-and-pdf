const pdf = require('html-pdf')

class PDFWriter {
  static WritePDf (filename, html) {
    pdf.create(html,{}).toFile(filename, (err) => { })
  }
}

module.exports = PDFWriter
