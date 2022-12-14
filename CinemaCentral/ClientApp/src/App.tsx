import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import './App.css';
import Series from "./pages/Series";
import Episode from "./pages/Episode";

export default function App() {
    return (
        <div>
            <Navbar/>
    
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="movies" element={<Movies/>}/>
                    <Route path="movie/:id" element={<Movie/>}/>
                    <Route path="series/:id" element={<Series />}/>
                    <Route path="episode/:id" element={<Episode />}/>
                </Routes>
            </div>
        </div>
    )
};