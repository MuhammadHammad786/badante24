import '../../assets/css/App.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner/index.jsx';
import Footer from '../../components/footer/index.jsx';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TitlebarGridList from '../../components/Card/index.jsx';
import Filters from '../../components/filters/index.jsx';

const Home = () => (
  <>
        <Navbar fixed="top"/>
        <Banner/>
        <Filters/>
        <TitlebarGridList/>
        <Footer/>
  </>
);

export default Home;
