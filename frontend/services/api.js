const API_URL = "http://localhost:3001/api";

const api = {
  register: async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  },
  login: async (userData) => {
    // Implement login logic here
  },
  // More API functions for post and comment operations
};

export default api;
