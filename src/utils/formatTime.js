import { format, getTime, formatDistanceToNow, addDays, addMinutes } from "date-fns";

export function fDate(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date) {
  return date ? getTime(addMinutes(new Date(date), -330)) : "";
}

export function fTimestampNow() {
  return getTime(new Date());
}

export function fAddDays(date, days) {
  return addDays(new Date(date), days);
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}
