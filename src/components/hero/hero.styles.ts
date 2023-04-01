export const heroStyles = {
    wrapper: {
        display: "flex",
        paddingTop: "5rem",
        paddingBottom: "5rem",
    },
    header: {
        width: { xs: "100%", md: "50%" },
        paddingTop: { xs: "5rem", md: "0" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    title: {
        fontWeight: "bold",
        fontSize: "2.5rem",
        textAlign: "center",
    },
    description: {
        mt: 3,
        padding: "1rem",
        fontSize: "1.1rem"
    },
    buttonsWrapper: {
        width: { xs: "80%", md: "60%" },
        display: "flex",
        justifyContent: "space-around",
    },
    button: {
        mt: 3,
        backgroundColor: "#f50057",
        border: "solid transparent 2px",
        "&:hover": {
          border: "solid #f50057 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    },
    secondButton: {
        mt: 3,
        backgroundColor: "transparent",
        color: "black",
        border: "solid #f50057 2px",
        "&:hover": {
          backgroundColor: "#f50057",
          color: "white",
        },
    },
    imageWrapper: {
        width: "50%",
        display: { xs: "none", md: "flex" } 
    }
  };

export const secondaryHeroStyles = {
    wrapper: {
        backgroundImage: "url(./Ferrari.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        position: "relative",
        height: { xs: "15rem", md: "24rem" },
    },
    imageWrapper: {
        backgroundColor: "rgba(24, 26, 27, 0.92)",
        height: "100%",
        position: "absolute",
        right: "0",
        top: "0",
        width: "100%",
    },
    header: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    title: {
        mt: 3,
        textAlign: "center",
        fontSize: { xs: "2.8rem", md: "5rem" },
        color: "white",
        margin: "0",
    }
    
  };