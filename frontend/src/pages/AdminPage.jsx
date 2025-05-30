import { useState } from 'react';
import FeedbackTable from '../components/FeedbackTable';

const AdminPage = () => {
  const [newFeedback, setNewFeedback] = useState(false);

  const handleNewFeedback = () => setNewFeedback(!newFeedback);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <FeedbackTable onReview={handleNewFeedback} />
    </div>
  );
};

export default AdminPage;
