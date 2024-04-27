// user-services.js
import User from './users.js';

// Function to find users by name and job simultaneously
export const findUsersByNameAndJob = (name, job) => {
  return User.find({ name: name, job: job });
};
