/**
 * Formats "YYYY-MM-DD" → "21 de marzo de 2026"
 */
export function formatDate(dateStr: string): string {
  // Parse without timezone shift
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('es-MX', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  });
}

/**
 * Returns a short relative label: "Hoy", "Ayer", or "21 mar"
 */
export function formatDateShort(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date  = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs   = today.getTime() - date.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
}
