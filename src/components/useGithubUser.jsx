import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération de l'utilisateur");
        const data = await response.json();

        const { name, location, bio, public_repos, followers, following } =
          data;

        setUser({ name, location, bio, public_repos, followers, following });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGithubUser();
  }, [username]);

  return { user, loading, error };
};

export default useGithubUser;
