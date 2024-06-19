const ambilDataUser = () => {
    return new Promise((resolve, reject) => {
      fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
          resolve(data.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  export default ambilDataUser;