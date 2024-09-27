function result(separator, symbol, symbolFirst, formatter) {
  // Return a function that takes one parameter (value)
  return function (value) {
    // Call the formatter with the correct arguments
    return formatter(separator, symbol, symbolFirst, value);
  };
}
 