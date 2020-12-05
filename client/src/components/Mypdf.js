import React, { useState, useEffect } from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {StyleSheet} from '@react-pdf/renderer';
import Bcamp from "../data/Images/Coding Boot Camp Certificate Program.pdf"
import { useSelector, useDispatch } from "react-redux"
import Richland from "../data/Images/Richland College.pdf"
import Architecture from "../data/Aws certs/architecture.pdf"
import CloudSecurity from "../data/Aws certs/cloudSecurity.pdf"
import Practitoner from "../data/Aws certs/practitioner.pdf"
import PricingSupport from "../data/Aws certs/PricingSupport.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const aws = [Architecture, CloudSecurity, Practitoner, PricingSupport]
 
export default  function MyPdf() {

  const styles = StyleSheet.create({
    section: {
      '@media screen max-width: 600': {
        width: "75%",
        color: "black"
      }
    }
  });

    const [pdfValue, error] = useSelector((gState) => [
        gState.pdfValue,
        gState.error
    ])
    const [pdfUrl, setUrl] = useState("")

    useEffect(() => {
        if (pdfValue === "Richland"){
            setUrl(Richland)
            console.log(pdfUrl)
        }
        else if (pdfValue === "Bootcamp"){
            setUrl(Bcamp)
            console.log(pdfUrl)
        } else if(pdfValue === "AWS") {
            let timer;
            for(let i=0; i<aws.length; i++){
              console.log("head", i)
              if (i == aws.length-1){
                clearTimeout(timer)
                console.log("breaking", i)
                {break;}
              } else {
                timer = setTimeout(() => {
                console.log(i)
                setUrl(aws[i])
                }, 1000);

              }
              
            }
            
            setUrl(aws[3])
            console.log(pdfUrl)
        }
    }, [pdfUrl])

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 
  return (
    <div> 
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        style={styles.section}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}