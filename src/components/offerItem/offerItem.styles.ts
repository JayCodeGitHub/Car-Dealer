export const offerItemStyles = {
    wrapper: {
        width: "100%",
        height: "35rem",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "4%",
        boxShadow: "0px 8px 16px 0px rgb(0 0 0 / 3%)",
        backgroundColor: "#f1f1f3",
    },
    img: {
        height: "40%",
        objectFit: "cover",
        borderRadius: "0.5rem",
        overflow: "hidden",
    },
    title: {
        fontSize: "2rem",
        marginLeft: "1rem"
    },
    price: {
        fontSize: "1.5rem"
    },
    type: {
        fontSize: "1.2rem"
    },
    drive: {
        fontSize: "1.2rem"
    },
    button: {
        mt: 3,
        alignSelf: "center",
        backgroundColor: "#f50057",
        border: "solid transparent 2px",
        "&:hover": {
          border: "solid #f50057 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    }
};