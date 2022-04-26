import axios, { Axios } from 'axios';
import React from 'react'
import { IoHandLeft } from 'react-icons/io5';
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react'

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

class EditPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pointsperticket: 125,
            pointsforreward: 500,
            rewardvalue: 5
        }
    }

    componentDidMount() {
        this.getSystem();
    }

     handleFieldChange(e) {
         this.setState({
             [e.target.name]: e.target.value

         });
    }
    save() {
        
        console.log(this.state);
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                pointsperticket: this.state.pointsperticket,
                pointsforreward: this.state.pointsforreward,
                rewardvalue: this.state.rewardvalue
                })
            };
        console.log(req);
        fetch(`${API_URL}/system/setsystem`, req)
            .then(()=> {
            console.log("data has been sent to the server");
        })
        .catch(() => {

        });;
    };



    getSystem(){
        console.log(this.state);
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                pointsperticket: this.state.pointsperticket,
                pointsforreward: this.state.pointsforreward,
                rewardvalue: this.state.rewardvalue
            })
            };
        console.log(req);
        fetch(`${API_URL}/system/getsystem`, req)
            .then(
            async response => {
                const body = await response.json();
                this.state.pointsperticket = body.pointsperticket;
                this.state.pointsforreward = body.pointsforreward;
                this.state.rewardvalue = body.rewardvalue;
                this.setState(this.state)
            }
            
        )
        .catch(() => {

        });;
    }

    render() {
        return(
            <div style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                
                    <div style={{textAlign:'center'}}>
                        <br/>
                        <h3>create promotional offer</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    <FormGroup>
                        <div>
                        <div htmlFor="pointsperticket" style={{color:'white'}}>enter number of points received per ticket purchased:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="number" id="pointsperticket" name="pointsperticket" maxLength="15" value= {this.state.pointsperticket}/>
                            <br></br>
                            <div htmlFor="pointsforreward" style={{color:'white'}}>enter number of rewards points to be earned:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="number" id="pointsforreward" name="pointsforreward" maxLength="15" value= {this.state.pointsforreward}/>
                            <br></br>
                            <div htmlFor="rewardvalue" style={{color:'white'}}>enter amount of cash to be returned:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="number" id="rewardvalue" name="rewardvalue" maxLength="15" value= {this.state.rewardvalue}/>
                        </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div className="width-100">
                        <Button onClick = {() => this.save()} pill theme="light" id='saveButton'>save</Button>
                        </div>
                    </FormGroup>
                </Form>
                <br></br>
                </Container>
                </div>
                
            </div>
            
        )
    }
}

export default EditPoints;