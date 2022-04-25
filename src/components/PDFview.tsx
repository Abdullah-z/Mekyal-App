import * as React from 'react'
import PDFReader from 'rn-pdf-reader-js'
 
export default class App extends React.Component {
  render() {
    return (
      <PDFReader
        source={{
          uri: 'http://www.africau.edu/images/default/sample.pdf',
        }}
      />
    )
  }
}