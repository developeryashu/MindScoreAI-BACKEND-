export function calculateScore(mood, stress, sleep) {
  return Math.round((mood * 0.4 + (10 - stress) * 0.3 + sleep * 0.3) * 10);
}
