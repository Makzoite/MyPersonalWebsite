import React, { Component } from 'react';
import './css/resume.css';
import NavigationBar from './navigationbar';
import myPDF from '../pdf/MaheshResume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import throttle from "lodash.throttle";
import Footer from './footer';
import Spinner from './spinner';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {width: null, spinner: false}
  }
  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount () {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }
  hideSpinner = () => {
    this.setState({
      spinner: true
    });
  }
  render(){
    return(
      <>
      <NavigationBar/>
      {this.state.spinner?<></>:<Spinner/>}
      <div id="pdfWrapper" style={{width: "95vw", margin:"6px auto"}} ref={(ref) => this.pdfWrapper = ref}>
        <div className="download-button">
            <a href={myPDF} download>Download Resume</a>
          </div>
          <Document
            file={myPDF}
            onLoadSuccess={this.hideSpinner}
            >
            <Page pageNumber={1}
            width={this.state.width}/>
            </Document>
     </div>
     <Footer/>
      </>
    );
  }
}
export default Resume;
