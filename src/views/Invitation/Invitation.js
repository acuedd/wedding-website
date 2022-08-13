import React from 'react'
import { useLocation } from "react-router-dom"

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "transparent",
    color: "white",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  image: {
    width: "40%",
    height: "40%",
    padding: 10,
    zIndex: "-10"
  },
  pdfView: {
    height: window.innerHeight,
    overflow: "auto",
    //width: "-webkit-fill-available"
    width: window.innerWidth
  },
  topLeft: {
    position: "absolute",
    top: "48px",
    left: "150px",
    zIndex: 10,
    fontSize: 25
  },
  labelBottom1: {
    position: "absolute",
    top: window.innerHeight + 200,
    left: "150px",
    zIndex: 10,
    fontSize: 25
  },
  labelBottom2: {
    position: "absolute",
    top: window.innerHeight + 250,
    left: "150px",
    zIndex: 10,
    fontSize: 25
  },
  center: {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

// Create Document Component
function MyDocument() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  console.log(params)

  return (
    <div className="invitation-pdf">
      <h1>Gracias por atender nuestra invitación</h1>
      <div className={styles.center}>
        <img style={styles.image} src='Slide1.jpeg' alt="Logo" />
        <img style={styles.image} src='Slide2.jpeg' alt="Logo" />
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
