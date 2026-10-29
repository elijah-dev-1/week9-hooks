import { useState, useEffect } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        city: 'London',
      });

      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section>
      <h2>Profile Card</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>City: {profile.city}</p>
        </div>
      )}
    </section>
  );
}

export default ProfileCard;
