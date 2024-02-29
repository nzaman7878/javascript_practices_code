// Custom Error Handling:


class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  function processInput(input) {
    if (!input) {
      throw new CustomError('Invalid input');
    }
    return input.toUpperCase();
  }
  
  try {
    const result = processInput('');
    console.log(result);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error('Custom error occurred:', error.message);
    } else {
      console.error('An unexpected error occurred:', error.message);
    }
  }
  