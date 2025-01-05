import { useEffect, useState } from 'react';

interface Friend {
  name: string;
  caricature: string;
  quote: string;
}

export const App: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]); // State to hold friends data
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status
  const [error, setError] = useState<string | null>(null); // State to manage error status

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('http://localhost:3010/api/friends');

        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch friends');
        }

        const data: Friend[] = await response.json(); // Parse the JSON from the response
        setFriends(data); // Update state with friends data
      } catch (err) {
        // Check if err is an instance of Error
        if (err instanceof Error) {
          setError(err.message); // Update error state if there is an error
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchFriends(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  // Render loading, error, or friends list
  if (loading) return <div className="text-lg text-gray-700">Loading...</div>;
  if (error) return <div className="text-lg text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Hello, Tailwind CSS!
      </h1>
      <ul className="space-y-4">
        {friends.map((friend, index) => (
          <li key={index} className="p-4 border rounded shadow bg-white">
            <h2 className="text-xl font-semibold">{friend.name}</h2>
            <p className="text-gray-700">{friend.caricature}</p>
            <blockquote className="italic text-gray-500">
              "{friend.quote}"
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
