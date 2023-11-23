import { format, isValid, formatDistanceToNow } from "date-fns";

export const bgColors = ["#F79256", "#FBD1A2", "#7DCFB6", "#00B2CA", "#1D4E89"];
export const bgColors1 = [
  "#d44c2c",
  "#e9c474",
  "#1c717c",
  "#8f834b",
  "#d6742b",
];

export const PUBLIC_URL = process.env.PUBLIC_URL;

export const isOtpValid = (value) => {
  var regex = /\b\d{6}\b/;
  return regex.test(value);
};

export function fToNow(value) {
  if (!isValid(parseInt(value))) return "";
  return value
    ? formatDistanceToNow(parseInt(value), {
        addSuffix: true,
      })
    : "";
}
