import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST,
});

export const postAuth = (idToken, user) => {
  return apiRequest({
    url: "/auth/login",
    method: "post",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    data: {
      name: user.displayName,
      email: user.email,
    },
  });
};

export const getProblemList = async (user_id) => {
  return await apiRequest({
    url: `/users/${user_id}/problems`,
    method: "get",
  });
};

export const getSolvingProblemList = async (user_id, problem_id) => {
  return await apiRequest({
    url: `/users/${user_id}/problems/${problem_id}`,
    method: "get",
  });
};

export const getSubmitedProblemList = async (user_id) => {
  return await apiRequest({
    url: `/users/${user_id}`,
    method: "get",
  });
};

export const postSolution = async (user_id, problem_id, solutionCode) => {
  return await apiRequest({
    url: `/users/${user_id}/problems/${problem_id}`,
    method: "post",
    data: {
      solutionCode,
    },
  });
};

export const postCreateProblem = async (user_id, inputs) => {
  return await apiRequest({
    url: `/users/${user_id}/problems`,
    method: "post",
    data: {
      inputs,
    },
  });
};
