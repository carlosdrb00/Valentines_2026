import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import GalleryPage from './components/GalleryPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;