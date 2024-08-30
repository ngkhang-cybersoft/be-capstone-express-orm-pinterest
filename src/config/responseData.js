/**
* Sends a JSON response with a structured format.
*
* @param {object} data - The content to include in the response.
* @param {string} message - A message describing the response.
* @param {number} statusCode - The HTTP status code for the response.
* @param {object} response - The Express response object.
* @return {void} This function doesn't return a value; it sends a response.
*/
const responseData = (data, message, statusCode, response) => {
  response
    .status(statusCode)
    .json({
      statusCode,
      message,
      content: data,
      date: new Date(),
    });
};

export default responseData;
