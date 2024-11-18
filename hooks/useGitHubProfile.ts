import { useEffect, useState } from 'react';
import { getGitHubUserProfile } from '../services/githubService';

const useGitHubProfile = (username: string) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      getGitHubUserProfile(username)
        .then(data => setProfile(data))
        .catch(err => setError(err));
    }
  }, [username]);

  return { profile, error };
};

export default useGitHubProfile;
