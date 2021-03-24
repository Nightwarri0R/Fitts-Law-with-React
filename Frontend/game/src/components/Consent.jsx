
import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";

const Consent = () => {

  return (
    <div>
      <h1>Consent Form</h1>
      <p>

      </p>
    </div>
  )
}




 const Consent1 = () => {
  return (
    <div>
      <Link to ="./Consent" >
        <button >
          <p>Click me</p>
        </button>
      </Link>
      
    </div>
  )
}



export default Consent1;

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