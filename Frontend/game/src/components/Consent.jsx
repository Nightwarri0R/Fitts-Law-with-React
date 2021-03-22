
// import React from 'react'

// const Consent = () => {
   
//     return (
//         <div>
//             <h1>Consent Form</h1>
//             <p>

//             </p>
//         </div>
//     )
// }

// export default Consent;

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
    onLoadError={console.error}
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}