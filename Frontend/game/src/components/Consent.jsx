
import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Button from './Button';




const Consent = () => {

  return (
    <div>
      <h1 id="Participation_tittle">Participation Sheet</h1>
      <p>
        
      </p>
      <div>
        <h1 id="Participation_tittle"> Consent Form</h1>
        <p>

        </p>
      </div>
      <Button/>
    </div>
  )
}
export default Consent;



// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";


// export default function Consent(props) {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const { pdf } = props;

//   return (
//     <Document
//     onLoadError={console.error}
//       file={pdf}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// }