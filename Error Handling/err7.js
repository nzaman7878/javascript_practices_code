// Error Handling with Async/Await

async function fetchData() {
    try {
      // Simulating an asynchronous operation that fails
      const response = await fetch('https://example.com/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  fetchData();
  