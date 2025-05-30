import { useState } from 'react';
import api from '../services/api';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work Environment');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { text, category });
      setText('');
      setCategory('Work Environment');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        placeholder="Enter your feedback"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option>Work Environment</option>
        <option>Leadership</option>
        <option>Growth</option>
        <option>Others</option>
      </select>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
