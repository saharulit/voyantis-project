import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Queue {
  name: string;
  messageCount: number;
}

interface Message {
  text: string;
  timestamp: number;
  sender?: string;
}

const API_URL = 'http://localhost:3010/api/que';

export const App: React.FC = () => {
  const [queues, setQueues] = useState<Queue[]>([]);
  const [selectedQueue, setSelectedQueue] = useState<string | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch all queues
  const fetchQueues = async () => {
    try {
      const response = await axios.get(`${API_URL}/queues`);
      setQueues(response.data);
    } catch (error) {
      console.error('Error fetching queues:', error);
    }
  };

  useEffect(() => {
    fetchQueues();
  }, [message]);

  // Handle "Go" button click
  const fetchMessage = async () => {
    if (
      !selectedQueue ||
      queues.find((queue) => queue.name === selectedQueue)?.messageCount === 0
    ) {
      // Prevent fetching message if there are no messages in the selected queue
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${selectedQueue}`);
      setMessage(response.data || null);

      // Update the queue's message count after fetching a message
      setQueues((prevQueues) =>
        prevQueues.map((queue) =>
          queue.name === selectedQueue
            ? { ...queue, messageCount: queue.messageCount - 1 }
            : queue
        )
      );
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-[#002F6C] text-center mb-8">
        Message Queue System
      </h1>

      {/* Queues Table */}
      <div className="w-full max-w-4xl px-4 mb-8">
        <h2 className="text-2xl font-semibold text-[#004F91] mb-4">
          Available Queues
        </h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#002F6C]">
                Queue Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#002F6C]">
                Message Count
              </th>
            </tr>
          </thead>
          <tbody>
            {queues.map((queue) => (
              <tr key={queue.name} className="border-t border-[#f0f0f0]">
                <td
                  className="px-6 py-4 text-sm text-[#004F91] cursor-pointer hover:text-[#002F6C]"
                  onClick={() => setSelectedQueue(queue.name)}
                >
                  {queue.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#004F91]">
                  {queue.messageCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Go Button & Message Display */}
      {selectedQueue && (
        <div className="mt-8 w-full max-w-4xl px-4">
          <button
            onClick={fetchMessage}
            className={`w-full py-3 text-xl font-semibold rounded-lg ${
              queues.find((queue) => queue.name === selectedQueue)
                ?.messageCount === 0
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-[#004F91] text-white hover:bg-[#00356b]'
            }`}
            disabled={
              queues.find((queue) => queue.name === selectedQueue)
                ?.messageCount === 0
            }
          >
            Go
          </button>

          {loading && (
            <p className="mt-4 text-[#004F91] text-center">Loading...</p>
          )}

          {message && (
            <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg font-semibold text-[#00356b]">
                <strong>Message:</strong>
              </p>
              {Object.keys(message).length === 0 ? (
                <p>No message content available</p>
              ) : (
                Object.keys(message).map((key) => (
                  <p key={key} className="mt-2 text-sm text-[#6c757d]">
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{' '}
                    {message[key] || 'No data'}
                  </p>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
