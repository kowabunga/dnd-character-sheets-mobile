const createUserData = {
  name: 'Test Testerton',
  email: 'test@test.com',
  password: '123456',
  confirmPassword: '123456',
};

const updatedUserData = {
  name: 'Testerton Test',
  password: '123456',
  confirmPassword: '123456',
  oldPassword: 'ggagaga',
  email: 'testUpdated@test.com',
};

const userDataLogin = {
  email: 'test@test.com',
  password: '123456',
};

const incorrectUserLoginPassword = {
  email: 'test@test.com',
  password: 'gs44haf',
};

const incorrectUserLoginEmail = {
  email: 'test@tesdft.com',
  password: '123456',
};

export {
  createUserData,
  updatedUserData,
  userDataLogin,
  incorrectUserLoginEmail,
  incorrectUserLoginPassword,
};
