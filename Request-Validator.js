function validateRequest(request) {
  // Define regex patterns for validation
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const uriPattern = /^[a-zA-Z0-9.]+$|^\*$/; // Alphanumeric or periods or asterisk
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messagePattern = /^[^<>\\&'"]*$/; // Any character except special ones

  // Validate method
  if (!request.method || !validMethods.includes(request.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  // Validate uri
  if (!request.uri || !uriPattern.test(request.uri)) {
    throw new Error("Invalid request header: Invalid URI");
  }

  // Validate version
  if (!request.version || !validVersions.includes(request.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  // Validate message
  if (request.message === undefined || !messagePattern.test(request.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  // If all validations pass, return the unchanged request
  return request;
}
