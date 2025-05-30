import { useEffect, useState } from 'react';
import api from '../services/api';

const FeedbackTable = ({ onReview }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await api.get(filter ? `/category/${filter}` : '/');
        setFeedbacks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeedbacks();
  }, [filter]);

  const handleReview = async (id) => {
    try {
      await api.patch(`/${id}/reviewed`);
      setFeedbacks(feedbacks.filter((fb) => fb._id !== id));
      onReview();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      setFeedbacks(feedbacks.filter((fb) => fb._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="">All Categories</option>
        <option value="Work Environment">Work Environment</option>
        <option value="Leadership">Leadership</option>
        <option value="Growth">Growth</option>
        <option value="Others">Others</option>
      </select>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Feedback</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback._id}>
              <td className="border p-2">{feedback.text}</td>
              <td className="border p-2">{feedback.category}</td>
              <td className="border p-2">
                {!feedback.reviewed && (
                  <button
                    onClick={() => handleReview(feedback._id)}
                    className="mr-2 text-blue-500"
                  >
                    Mark as Reviewed
                  </button>
                )}
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
