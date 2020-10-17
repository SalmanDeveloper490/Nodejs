const register = (username) => {
  console.log(`User ${username} has been registered`);
};

const login = (username) => {
  console.log(`User ${username} has been logged in`);
};

module.exports = {
  register,
  login,
};
