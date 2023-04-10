export const footerStyles = {
  outerWrapper: {
    backgroundColor: "#181A1B",
    color: "white",
    borderTop: "solid #FF055E 2px",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    padding: "2rem 0",
    flexDirection: { xs: "column", md: "row" },
  },
  infoWrapper: {
    width: "20rem",
    paddingTop: { xs: "2rem", md: "0" },
  },
  contactItem: {
    "&:hover": {
      color: "#FF055E",
    },
  },
  author: {
    color: "#FF055E",
    textAlign: "center",
    padding: "1rem 0",
    "&:hover": {
      color: "grey",
    },
  }
};