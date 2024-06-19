const ambilDataUserAsync = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default ambilDataUserAsync;