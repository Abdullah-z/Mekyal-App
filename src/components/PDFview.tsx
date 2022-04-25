import * as React from 'react';
import PDFReader from 'rn-pdf-reader-js';

const PDFview = () => {
  return (
    <PDFReader
      source={{
        uri: 'http://www.africau.edu/images/default/sample.pdf',
      }}
    />
  );
};

export default PDFview;
