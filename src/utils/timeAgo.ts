export function timeAgo(timestamp: number): string {
  const now = Date.now();
  const difference = now - timestamp * 1000;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `há ${years} ${years === 1 ? "ano" : "anos"}`;
  if (months > 0) return `há ${months} ${months === 1 ? "mês" : "meses"}`;
  if (days > 0) return `há ${days} ${days === 1 ? "dia" : "dias"}`;
  if (hours > 0) return `há ${hours} ${hours === 1 ? "hora" : "horas"}`;
  if (minutes > 0)
    return `há ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  return `há ${seconds} ${seconds === 1 ? "segundo" : "segundos"}`;
}
