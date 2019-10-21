export const now = Date.now();

export function getTime() {
  const time = Date.now() - now;

  if (time < 1000) {
    return `${time}ms`;
  }
  return `${time / 1000}s`;
}
