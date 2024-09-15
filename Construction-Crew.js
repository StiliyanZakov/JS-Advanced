function result(worker) {
  if (worker.dizziness) {
    // Increase the worker's hydration level
    let requiredWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredWater;
    // Set dizziness to false after hydration
    worker.dizziness = false;
  }

  return worker;
}

// Example usage:

let worker1 = result({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

console.log(worker1);
// Expected Output:
// { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

let worker2 = result({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});

console.log(worker2);
// Expected Output:
// { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

let worker3 = result({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});

console.log(worker3);
// Expected Output:
// { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
