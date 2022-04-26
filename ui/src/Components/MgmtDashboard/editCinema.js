import axios, { Axios } from 'axios';
import React from 'react'
import { IoHandLeft } from 'react-icons/io5';
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react'

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

class EditCinema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            state: "",
            price: "",
            seats: "",
            addTextbox: [{}]
        };
    }

        addRow() {
            this.setState((
                {addTextbox: [...this.state.addTextbox,{}]}
            ))
        }

        componentDidMount = () => {
           // this.getCinema();
        }

        getCinema = (theatreName) =>{
            axios.get(`${API_URL}/theatre/gettheatre`, {name: theatreName})
            .then((response) => {
                const data = response.data;
                this.setState({ addTextbox: data});
                console.log("data has been recieved");
            })
            .catch(() => {
                alert('error retrieving data');
            });
        }

        save() {
            
            console.log(this.state);
            const req = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.name,
                    city: this.state.city,
                    state: this.state.state,
                    costPerMonth: this.state.price,
                    seatsAvailable: this.state.seats})
                };
            console.log(req);
            fetch(`${API_URL}/theatre/addtheatre`, req)
                .then(()=> {
                console.log("data has been sent to the server");
                this.resetMgmtInputs();
                //this.getCinema();
            })
            .catch(() => {

            });;
        };

        resetMgmtInputs = () => {
        };

        displayInput = (addTextbox, row, seats) => {

            if(!addTextbox.length) return null;

            return addTextbox.map(() => (
                <div key = {row}> </div>
            ))
        }

     handleFieldChange(e) {
         this.setState({
             [e.target.name]: e.target.value

         });
     }

    render() {
        return(
            <div style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                
                    <div style={{textAlign:'center'}}>
                        <br/>
                        <h3>edit cinema</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    <FormGroup>
                      <div style={{margin:"0 auto"}}>
                            <div htmlFor="name" style={{color:'white'}}>name of cinema:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="name" name="name" maxLength="80" defaultValue=""/>
                            <br></br>
                            <div htmlFor="city" style={{color:'white'}}>city:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="city" name="city" maxLength="80" defaultValue=""/>
                            <br></br>
                            <div htmlFor="state" style={{color:'white'}}>state:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="state" name="state" maxLength="80" defaultValue=""/>
                            <br></br>
                            <div htmlFor="price" style={{color:'white'}}>operational cost per month:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="price" name="price" maxLength="15" defaultValue=""/>
                            <br></br>
                            <div htmlFor="seats" style={{color:'white'}}>seats available:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="seats" name="seats" maxLength="15" defaultValue=""/>
                      </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div>
                        <div className="seats" htmlFor="seats" style={{color:'white'}}>add seats:</div>
                        {this.displayInput(this.state.addTextbox)}
                        {this.state.addTextbox.map(() => (
                            <div>
                            <input type = "text" placeholder = "enter row name"/>
                            <input type = "text" placeholder = "enter number of seats"/>
                            </div>
                        ))}
                        <br></br>
                        <div className="width-100">
                        <Button onClick = {() => this.addRow()} pill theme="light" id='row'>create a row</Button>
                        </div>
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

export default EditCinema;