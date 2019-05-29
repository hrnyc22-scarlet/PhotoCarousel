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
        axios.get(`/hotelphotos/${id}`)
        
        .then(({data}) => {
            console.log(data);
            this.setState({photos: data});
        })
        .catch((err) => {
            console.log(`There was an error : ${err}`);
        })
    }

    
    getUrlID() {
        let base = window.location.pathname
        // console.log('==============================')
        // console.log('=========Testing getUrlId=====')
        // console.log('==============================')
        //console.log('BASE: ', base)
        let arr = base.split('/')
        //console.log('ARRAY: ', arr)
        let url = arr[2]
        //console.log('URLID: ', url)
        // console.log('==============================')
        // console.log('=========Testing getUrlId=====')
        // console.log('==============================')
        return url
    }

    componentDidMount() {
        let id = this.getUrlID();
        this.getPhotosById(id);
    }

    render() {
        return (
            <Carousel photos = {this.state}/>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));