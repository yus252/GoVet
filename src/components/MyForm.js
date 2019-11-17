import React, {Component} from 'react';
import { Button, Form, Modal} from 'react-bootstrap';

class MyForm extends Component {
    render(){
        return(
        <div>
            <Modal.Dialog>
                <Form style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <Form.Group controlId="formBasicEmail" style={{ width: '24rem', padding:'10px'}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted" style={{margin:'10px'}}>
                            Please input your email so that we can send you coupons
                         </Form.Text>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                     </Form.Group>
                 </Form>
            </Modal.Dialog>
        </div>
        );
    }
}

export default MyForm;