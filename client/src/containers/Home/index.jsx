import '../../assets/css/App.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner/index.jsx';
import Footer from '../../components/footer/index.jsx';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TitlebarGridList from '../../components/Card/index.jsx';
import './home.css';

const Home = () => (
  <>
        <div className="home">
        <Navbar fixed="top"/>
        <Banner/>
        <TitlebarGridList/>
        <Footer/>
        </div>
  </>
);

export default Home;
