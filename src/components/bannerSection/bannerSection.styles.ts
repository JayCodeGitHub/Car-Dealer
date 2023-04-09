export const bannerSectionStyles = {
    wrapper: {
        backgroundImage: "url(./bannerCar.jpeg)",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        position: "relative",
        height: { xs: "12rem", md: "15rem" },
    },
    background: {
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
        fontSize: { xs: "1.4rem", md: "3rem" },
        color: "white",
        margin: "0",
        padding: "0 2rem",
        lineHeight: "1.5",
    }
};