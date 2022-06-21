import React, { Component } from 'react';
import ListeVideo from './Component/Render/ListeVideo';
import Navbar from './Component/Render/Navbar';
import { Routes, Route } from 'react-router-dom'
import AffichageVideo from './Component/Render/AffichageVideo';
import Filter from './Component/Render/Filter'
import Footer from './Component/Render/Footer'

export default class App extends Component {
  render(){
    return (
      <div className='app-component'>
          <Navbar/>
          <div className='filter'>
            <Filter/>
          </div>
            <Routes>
              <Route path='/' element={<ListeVideo/>} />
              <Route path='/:id' element={<AffichageVideo/>} />
            </Routes>
            <Footer/>
      </div>
      
    );
  }
} 