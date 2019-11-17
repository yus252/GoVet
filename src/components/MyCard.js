import React, {Component, useState} from 'react';
import { Card, Button, Modal} from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
;

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Read more, gain more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>"A day he’ll never forget" </Modal.Title>
        </Modal.Header>
        <Modal.Body>November 14, 2003 is seared in Matt’s memory.<br /><br />

                    Serving as the gunner as part of a Quick Reaction Force called to help a downed Blackhawk helicopter, Matt climbed into his unit’s Humvee.<br /><br />

                    In a flash, there was a massive explosion.<br /><br />

                    Matt stepped out of the vehicle to return fire, but fell to the dirt in a heap, unable to stand. A 50-caliber round had gone right into his kneecap, shattering his leg.<br /><br />

                    The next 48 hours were a whirlwind of emergency evacuation. First to Germany. Finally to the U.S., where a team of doctors had to make a decision that would change Matt’s life forever.<br /><br />

                    “Please don’t take my leg”<br /><br />
                    <Card style={{padding:'2px', margin:'20px'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1529787730-bdcabd22a644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    </Card>
                    Matt’s leg was destroyed, and back in the U.S. he awoke in a hospital room surrounded by a team of doctors.<br /><br />

                    “I said to them, ‘Please don’t take my leg. One of you can repair me,’” Matt remembers. “And in the back of the room I saw a hand go up. It was a Colonel, who said to me: ‘If you want to save your leg, we’re going to try to save it.’”<br /><br />

                    Over the next 15 months, Matt endured 22 surgeries. A titanium cage was put in his ravaged limb. But something wasn’t right. On a Friday night, Matt’s wife woke him up. He was drenched in sweat and burning with a 106 temperature.<br /><br />

                    After years of effort. After so many surgeries. Matt finally said something to a doctor that he never thought he’d say:<br /><br />

                    “Cut it off.”<br /><br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



class MyCard extends Component {


    render(){
        return(
            <div style={{display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center"}}>

                <Flippy
                         flipOnHover={false} // default false
                         flipOnClick={true} // default false
                         flipDirection="horizontal" // horizontal or vertical
                         ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                         // if you pass isFlipped prop component will be controlled component.
                         // and other props, which will go to div
                         style={{ width: '24rem', height: '18rem', padding:'10px'}} /// these are optional style, it is not necessary
                         >
                         <FrontSide>
                             <Card.Img variant="top" src="https://images.unsplash.com/photo-1529787730-bdcabd22a644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                         </FrontSide>

                         <BackSide style={{fontWeight: 'bold', fontSize: 32}}>
                            "A day he’ll never forget"
                            <br />
                            <Example />
                         </BackSide>
                </Flippy>
            </div>
        );
    }
}


export default MyCard;