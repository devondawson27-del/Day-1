function randomizerApi() {
  if (!globalThis.Day1Randomizer) {
    throw new Error("Day 1 randomizer is not ready. Load index.html before importing this module.");
  }
  return globalThis.Day1Randomizer;
}

export function generateWorkout(options) {
  return randomizerApi().generateWorkout(options);
}

export function generateWeek(options) {
  return randomizerApi().generateWeek(options);
}

export function completeWorkout(workout, options) {
  return randomizerApi().completeWorkout(workout, options);
}
