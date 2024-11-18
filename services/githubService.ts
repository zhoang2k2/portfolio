import apiClient from './apiClient';

export const getGitHubUserProfile = async (username:string) => {
  const response = await apiClient.get(`/users/${username}`);
  return response.data;
};
