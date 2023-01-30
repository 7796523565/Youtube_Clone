
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from "@mui/material";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; 
import Feed from './Components/Feed';
import VideoDetails from './Components/VideoDetails';
import ChannelDetail from './Components/ChannelDetail';
import SearchFeed from './Components/SearchFeed';

const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundcolor: "black" }}>
      <Navbar />

      <Routes>

        <Route exact path = "/" element = {<Feed />}></Route>
        <Route path = "/video/:id" element = {<VideoDetails />}></Route>
        <Route path = "/channel/:id"  element = {<ChannelDetail />}></Route>
        <Route path = "/search/:searchitem"  element = {<SearchFeed />}></Route>

      </Routes>


    </Box>
    
    
    </BrowserRouter>
  );

export default App;

