import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeebbackStats from './components/FeedbackStats';
import FeedbackFrom from './components/FeedbackFrom';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

import FeedBackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are your sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackFrom handleAdd={addFeedback} />
                <FeebbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
