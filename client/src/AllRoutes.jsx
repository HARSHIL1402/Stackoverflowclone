import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Public from './pages/Public/Public';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/tags';
import Users from './pages/Users/Users';
import UsersProfile from './pages/UserProfile/UserProfile';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Public' element={<Public />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UsersProfile />} />
      <Route path='/VideoPlayer' element={<VideoPlayer />} />
    </Routes>
  );
};

export default AllRoutes;
