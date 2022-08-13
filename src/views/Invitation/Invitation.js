import React from 'react'
import { useLocation } from "react-router-dom"

// Create styles

const image = {
  width: "40%",
  height: "40%",
  padding: 10,
  zIndex: "-10"
}

const center = {
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto"
}

// Create Document Component
function MyDocument() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  console.log(params)

  return (
    <div className="invitation-pdf">
      <h1>Gracias por atender nuestra invitación</h1>
      <div className={center}>
        <img style={image} src='Slide1.jpeg' alt="Logo" />
        <img style={image} src='Slide2.jpeg' alt="Logo" />
      </div>
    </div>
  )
}

/*const RealDoc = () => {
  <BlobProvider document={MyDocument}>
    {({ url, blob, loading }) => {
      console.log("d", url, blob, loading);
      return (
        <a href={url} target="_blank">
          View as PDF
        </a>
      );
    }}
  </BlobProvider>
}*/

export default MyDocument;
