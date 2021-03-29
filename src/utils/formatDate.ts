export function formatDate(date: number) {
  return Intl.DateTimeFormat('pt-BR').format(date);
}
