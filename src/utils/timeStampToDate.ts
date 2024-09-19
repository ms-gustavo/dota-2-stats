import moment from "moment-timezone";

export const formatTimestampToBrasilia = (timestamp: number): string => {
  const date = moment.unix(timestamp).tz("America/Sao_Paulo");

  return date.format("DD/MM/YYYY HH:mm:ss");
};
