function solve(area, vol, input) {
  // Parse the input JSON to an array of objects (figures)
  let figures = JSON.parse(input);

  // Map each figure to an object with its area and volume
  return figures.map((figure) => {
    return {
      area: area.call(figure), // Call area with the figure as `this`
      volume: vol.call(figure), // Call vol with the figure as `this`
    };
  });
}
