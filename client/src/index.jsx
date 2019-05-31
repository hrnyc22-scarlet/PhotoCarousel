import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './components/Carousel.jsx';
import Container from 'react-bootstrap/Container'


import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }

    }

    getPhotosById(id){
        axios.get(`http://3.215.111.101:3005/hotelphotos/${id}`)
        
        .then(({data}) => {
            console.log(data);
            this.setState({photos: data});
        })
        .catch((err) => {
            console.log(`There was an error : ${err}`);
        })
    }

    

    componentDidMount() {
        let id = window.location.href.slice(32);
        this.getPhotosById(id);
    }

    render() {
        return (
            <div className = 'photocarousel-sort-container'>
            <Carousel photos = {this.state}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app-carousel'));