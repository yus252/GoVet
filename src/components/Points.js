import React, {Component, useState} from 'react';
import {Toast, Alert, Badge} from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);
  
    return (
      <div >
        <Badge pill variant="info" onClick={() => setShow(true)} 
            style={{justifyContent: "center",alignItems: "center"}}
            >
            Congratulations! You got a new VeteCard!
        </Badge>

          <Toast style={{position: 'absolute', left: '45%', top: '50%',}}
          onClose={() => setShow(false)} show={show} delay={1000} autohide>
              <Alert show={show} variant="success"><strong className="mr-auto">+ 30 Points</strong></Alert>
          </Toast>

      </div>
    );
  }

  class Points extends Component {
    render(){
        return(<Example />);
    }
  }

  export default Points;