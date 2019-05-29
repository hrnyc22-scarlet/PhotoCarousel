import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    componentDidMount(){
        console.log('These are the props for the carousel that we are worlking with: ', this.props);
    }


  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
            {this.props.photos.photos.map((photo, index) => {
                return (
                    <Carousel.Item key = {index}>
                    <img
                    
                    object-fit = 'cover'
                        height = '600px'
                        width = '300px' 
                      className="d-block w-100"
                      src= {photo.url}
                      key = {index}
                      alt= {`${index}th item`}
                    />
                    <Carousel.Caption>
                      <h3>{`Photo #${index}`}</h3>
                      
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })}
        </Carousel>
      );
    }
  }

  export default ControlledCarousel;