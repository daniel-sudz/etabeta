interface StyleSheet {
    [key: string]: React.CSSProperties;
  }
  
  const PageStyles: StyleSheet = {
    outlineWhite: {
      backgroundColor: "#fff",
      padding: "40px 30px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    topBar: {
      backgroundColor: "#d71361",
      paddingTop: "15px",
      paddingBottom: "15px",
      marginBottom: "15px",
      marginTop: "15px",
      textAlign: "center",
      color: "#fff",
    },
    padLogo: {
      margin: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      width: "30%",
      maxWidth: "200px",
    },
  };
  
  export default PageStyles; 