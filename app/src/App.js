import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Render/Navbar';
import Filter from './Component/Render/Filter'
import ListeData from './Component/Render/ListeData';
import ShowDataDetails from './Component/Render/ShowDataDetails';
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
					<Route path='/' element={<ListeData/>} />
					<Route path='/:id' element={<ShowDataDetails/>} />
				</Routes>
				<Footer/>
			</div>
		);
	}
} 