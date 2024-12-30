import { mvs } from "react-native-size-matters";

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  primary: "#F2F5FA",
  secondary: "#18C0C1",
  grayFill: "#D2DBEA",
  grayFill2: "#C9D4E4",
  customTabFill: "#546A83",
  text1: "#625B71",
};

const FontFamily = {
  Bold: "Poppins-Bold",
  Regular: "Poppins-Regular",
  Medium: "Poppins-Medium",
  SemiBold: "Poppins-SemiBold",
  BoldItalic: "Poppins-BoldItalic",
};

// Utility function to dynamically get font size and family
const dynamicFont = (familyType, size) => {
  let fontFamily;

  switch (familyType) {
    case "primaryBold":
      fontFamily = FontFamily.Bold;
      break;
    case "primaryBoldItalic":
      fontFamily = FontFamily.BoldItalic;
      break;
    case "primaryRegular":
      fontFamily = FontFamily.Regular;
      break;
    case "primaryMedium":
      fontFamily = FontFamily.Medium;
      break;
    case "primarySemiBold":
      fontFamily = FontFamily.SemiBold;
      break;
    default:
      fontFamily = FontFamily.Regular;
  }

  return {
    fontFamily: fontFamily,
    fontSize: size,
  };
};

export const FONTS = {
  h1: dynamicFont("primaryBold", mvs(24)),
  h2: dynamicFont("primaryBold", mvs(22)),
  h3: dynamicFont("primaryBold", mvs(20)),
  h4: dynamicFont("primaryBold", mvs(18)),
  h5: dynamicFont("primaryBold", mvs(16)),
  h6: dynamicFont("primaryBold", mvs(14)),
  body1: dynamicFont("primaryRegular", mvs(16)),
  body2: dynamicFont("primaryRegular", mvs(14)),
  body3: dynamicFont("primaryRegular", mvs(12)),
  body4: dynamicFont("primaryRegular", mvs(10)),
  body5: dynamicFont("primaryRegular", mvs(8)),
  body6: dynamicFont("primaryRegular", mvs(6)),
  subtitle1: dynamicFont("primarySemiBold", mvs(16)),
  subtitle2: dynamicFont("primarySemiBold", mvs(14)),
  subtitle3: dynamicFont("primarySemiBold", mvs(12)),
  subtitle4: dynamicFont("primarySemiBold", mvs(10)),
  subtitle5: dynamicFont("primarySemiBold", mvs(8)),
  subtitle6: dynamicFont("primarySemiBold", mvs(6)),
  button1: dynamicFont("primaryMedium", mvs(16)),
  button2: dynamicFont("primaryMedium", mvs(14)),
  button3: dynamicFont("primaryMedium", mvs(12)),
  button4: dynamicFont("primaryMedium", mvs(10)),
  button5: dynamicFont("primaryMedium", mvs(8)),
  button6: dynamicFont("primaryMedium", mvs(6)),
};

const appTheme = { COLORS, FONTS };

export default appTheme;
