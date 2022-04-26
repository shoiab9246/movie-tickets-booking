import React from 'react'
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react'
import Utils from '../../Utilities';

let API_URL = Utils.API_URL

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem("username"),
            firstname: "",
            lastname: "",
            creditcardnumber: "",
            expirationmonth: "",
            expirationyear: "",
            zip: ""
        };
    }

    componentDidMount() {
        this.getSettings();
      }
   
    save() {
        
        console.log(this.state);
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                firstname: this.state.firstname, 
                lastname: this.state.lastname,
                creditcardnumber: this.state.creditcardnumber,
                expirationmonth: this.state.expirationmonth,
                expirationyear: this.state.expirationyear,
                zip: this.state.zip
                })
            };
        console.log(req);
        fetch(`${API_URL}/user/info`, req)
            .then(()=> {
            console.log("data has been sent to the server");
        })
        .catch(() => {

        });;
    };

    getSettings(){
        console.log(this.state);
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: localStorage.getItem("email")
                })
            };
        console.log(req);
        fetch(`${API_URL}/user/getinfo`, req)
            .then(
            async response => {
                const body = await response.json();
                console.log(body)
                this.state.lastname = body.lastname;
                this.state.firstname = body.firstname;
                this.state.creditcardnumber = body.creditcardnumber;
                this.state.expirationmonth = body.expirationmonth;
                this.state.expirationyear = body.expirationyear;
                this.state.zip = body.zip;
                this.setState(this.state)
            }
            
        )
        .catch(() => {

        });;
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
                        <h3>account settings</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    <FormGroup>
                    <h5 style={{color:'white'}}>basic information</h5>
                      <div style={{margin:"0 auto"}}>
                            <div htmlFor="firstname" style={{color:'white'}}>first name:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="firstname" name="firstname" maxLength="15" defaultValue= {this.state.firstname}/>
                            <br></br>
                            <div htmlFor="lastname" style={{color:'white'}}>last name:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="lastname" name="lastname" maxLength="15" defaultValue= {this.state.lastname}/>
                      </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div className="width-50">
                            <div className="creditcardnumber" htmlFor="creditcardnumber" style={{color:'white'}}>credit card number:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="creditcardnumber" name="creditcardnumber" maxLength="16" defaultValue= {this.state.creditcardnumber}/>
                        </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div>
                        <div className="experationdate" htmlFor="experationdate" style={{color:'white'}}>experation date:</div>
                            <select onChange = {(e) => this.handleFieldChange(e)} className="expirationmonth" name="expirationmonth" id="expirationmonth" value= {this.state.expirationmonth}>
                                <option value="">month</option>
                                
                                    <option value="1">january</option>
                                
                                    <option value="2">february</option>
                                
                                    <option value="3">march</option>
                                
                                    <option value="4">april</option>
                                
                                    <option value="5">may</option>
                                
                                    <option value="6">june</option>
                                
                                    <option value="7">july</option>
                                
                                    <option value="8">august</option>
                                
                                    <option value="9">september</option>
                                
                                    <option value="10">october</option>
                                
                                    <option value="11">november</option>
                                
                                    <option value="12">december</option>
                                
                            </select>
                            <select onChange = {(e) => this.handleFieldChange(e)} className="expirationyear" name="expirationyear" id="experationyear" value= {this.state.expirationyear}>
                                <option value="">year</option>
                                
                                <option value="">Year</option>

                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                
                            </select>
                        </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div>
                            <div htmlFor="zip" style={{color:'white'}}>billing zip code:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="zip" name="zip" maxLength="5" defaultValue= {this.state.zip}/>
                        </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div className="width-100">
                        <Button onClick = {() => this.save()} pill theme="light" id='save'>save</Button>
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

export default AccountSettings;