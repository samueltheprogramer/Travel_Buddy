import React from "react";
import { View, Text } from "react-native";
import ToastMessage from "react-native-toast-message";

const Toast = React.forwardRef((props, ref) => {
  return <ToastMessage ref={ref} {...props} />;
});

export default Toast;
