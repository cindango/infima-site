const white = "#FFFFFF";
const red = "#B64164";
const purpleDark = "#482852";
const purpleLight = "#793A84";
const purple = "#61366E";
const green = "#128227";
const orange = "#C48A3D";
const grayLight = "#FAFAFA";
const gray = "#F5F5F5";
const blackMedium = "#333333";
const blackLight = "#555555";
const black = "#000000";
const darkGray = "#222222";
const codeBg = "#1D1F21";
const mediumGray = "#27292B";

export default {
  hideDownloadButton: true,
  scrollYOffset: 65,
  menuToggle: true,
  requiredPropsFirst: true,
  theme: {
    spacing: {
      unit: 8,
      sectionHorizontal: 24,
      sectionVertical: 24,
    },
    breakpoints: {
      small: "50rem",
      medium: "75rem",
      large: "105rem",
    },
    colors: {
      tonalOffset: 0.3,
      primary: {
        main: black,
        light: purpleLight,
        dark: purpleLight,
        contrastText: white,
      },
      success: {
        main: black,
        light: black,
        dark: black,
        contrastText: white,
      },
      warning: {
        main: black,
        light: black,
        dark: black,
        contrastText: white,
      },
      error: {
        main: black,
        light: black,
        dark: black,
        contrastText: white,
      },
      gray: {
        50: grayLight,
        100: gray,
      },
      text: {
        primary: black,
        secondary: black,
      },
      border: {
        dark: black,
        light: white,
      },
      responses: {
        success: {
          color: black,
          backgroundColor: grayLight,
        },
        error: {
          color: black,
          backgroundColor: grayLight,
        },
        redirect: {
          color: black,
          backgroundColor: grayLight,
        },
        info: {
          color: black,
          backgroundColor: grayLight,
        },
      },
      http: {
        get: purple,
        // TODO customize the following colors
        post: "#248fb2",
        put: "#9b708b",
        options: "#d3ca12",
        patch: "#e09d43",
        delete: "#e27a7a",
        basic: "#999",
        link: "#31bbb6",
        head: "#c167e4",
      },
    },
    schema: {
      linesColor: purpleLight,
      defaultDetailsWidth: "75%",
      typeNameColor: blackLight,
      typeTitleColor: blackLight,
      requireLabelColor: red,
      labelsTextSize: "0.9em",
      nestingSpacing: "1em",
      nestedBackground: gray,
      arrow: {
        size: "1.1em",
        color: blackLight,
      },
    },
    typography: {
      fontSize: "17px",
      lineHeight: "1.6em",
      fontWeightRegular: "400",
      fontWeightBold: "600",
      fontWeightLight: "300",
      fontFamily: "Barlow, sans-serif",
      smoothing: "auto",
      optimizeSpeed: false,
      headings: {
        fontFamily: "Barlow, sans-serif",
        fontWeight: "600",
        lineHeight: "1.6em",
      },
      code: {
        fontSize: "13px",
        fontFamily: "Roboto Mono, monospace",
        lineHeight: "1.6em",
        fontWeight: "400",
        color: blackLight,
        backgroundColor: grayLight,
        wrap: true,
      },
      links: {
        color: purple,
        visited: purpleLight,
        hover: black,
      },
    },
    sidebar: {
      width: "320px",
      backgroundColor: white,
      textColor: blackMedium,
      activeTextColor: black,
      groupItems: {
        textTransform: "uppercase",
      },
      level1Items: {
        textTransform: "none",
      },
      arrow: {
        size: "1.5em",
        color: blackMedium,
      },
    },
    logo: {
      maxHeight: "15%",
      maxWidth: "15%",
      gutter: "2px",
    },
    rightPanel: {
      backgroundColor: mediumGray,
      width: "45%",
      textColor: white,
    },
    codeBlock: {
      backgroundColor: codeBg,
    },
  },
};
