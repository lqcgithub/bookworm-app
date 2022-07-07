import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from "./layout/NavbarComponent";
import Footer from "./layout/Footer";
import BookListSlider from "./pages/Homepage/BookListSlider";
import BookFeatureSection from "./pages/Homepage/BookFeatureSection";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookShop from "./pages/Shop/BookShop";

function App() {
    return (
        <>
            <NavbarComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="container">
                            <div className="row justify-content-center">
                                <BookListSlider/>
                                <BookFeatureSection/>
                            </div>
                        </div>
                    }>
                    </Route>
                    <Route path="/shop" element={
                        <div className="container">
                            <div className="row justify-content-center">
                                <BookShop/>
                            </div>
                        </div>
                    }>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;

