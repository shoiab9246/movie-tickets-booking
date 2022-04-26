import React from 'react'
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react'
import Utils from '../../Utilities';

let API_URL = Utils.API_URL


class UserPreference extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          username: localStorage.getItem("username"),
          action: false,
          thriller: false,
          romance: false,
          comedy: false,
          adventure: false,
          fantasy: false,
          birthmonth: "",
          birthday: ""
        };
    }

      componentDidMount() {
        this.getPrefereneces();
      }

      getgenres() {
        var ans = [];
        console.log(this.state)
        if(this.state.action) ans.push("action");
        if(this.state.thriller) ans.push("thriller");
        if(this.state.romance) ans.push("romance");
        if(this.state.comedy) ans.push("comedy");
        if(this.state.adventure) ans.push("adventure");
        if(this.state.fantasy) ans.push("fantasy");
        console.log(ans)
        return ans
      }

      save() {
        
        console.log(this.state);
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                genres: this.getgenres(),
                birthmonth: this.state.birthmonth,
                birthday: this.state.birthday
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

    getPrefereneces(){
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
                this.state.action = false 
                this.state.thriller = false 
                this.state.romance = false 
                this.state.comedy = false 
                this.state.adventure = false 
                this.state.fantasy = false 

                for (let i = 0; i < body.genres.length; i++) {
                    if(body.genres[i] == "action") this.state.action = true;       
                    if(body.genres[i] == "thriller") this.state.thriller = true;   
                    if(body.genres[i] == "romance") this.state.romance = true;   
                    if(body.genres[i] == "comedy") this.state.comedy = true;   
                    if(body.genres[i] == "adventure") this.state.adventure = true;   
                    if(body.genres[i] == "fantasy") this.state.fantasy = true;  
                }
             
                this.state.birthday = body.birthday;
                this.state.birthmonth = body.birthmonth;
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
      handleChange(e, favoriteMovie) {
        const newState = {};
        newState[favoriteMovie] = !this.state[favoriteMovie];
        this.setState({ ...this.state, ...newState });
      }
    
      render() {
        return(
            <div style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                    <div style={{textAlign:'center'}}>
                        <br/>
                        <h3>User Name</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    
                    <br></br>
                    <FormGroup>
                        <div className="width-50">
                            <h5 style={{color:'white'}}>birthday: </h5>
                        </div>
                        <div className="width-100">
                            <label style={{color:'white', fontStyle:'italic'}}>no worries, your birth date is safe with us - it will never appear publicly.</label>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="birthmonth">
                            <select onChange = {(e) => this.handleFieldChange(e)} className="birthmonth" name="birthmonth" id="birthmonth" value= {this.state.birthmonth}>
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
                            <select onChange = {(e) => this.handleFieldChange(e)} className="birthday" name="birthday" id="birthday" value= {this.state.birthday}>
                                <option value="">day</option>
                                
                                    <option value="1">1</option>
                                
                                    <option value="2">2</option>
                                
                                    <option value="3">3</option>
                                
                                    <option value="4">4</option>
                                
                                    <option value="5">5</option>
                                
                                    <option value="6">6</option>
                                
                                    <option value="7">7</option>
                                
                                    <option value="8">8</option>
                                
                                    <option value="9">9</option>
                                
                                    <option value="10">10</option>
                                
                                    <option value="11">11</option>
                                
                                    <option value="12">12</option>
                                
                                    <option value="13">13</option>
                                
                                    <option value="14">14</option>
                                
                                    <option value="15">15</option>
                                
                                    <option value="16">16</option>
                                
                                    <option value="17">17</option>
                                
                                    <option value="18">18</option>
                                
                                    <option value="19">19</option>
                                
                                    <option value="20">20</option>
                                
                                    <option value="21">21</option>
                                
                                    <option value="22">22</option>
                                
                                    <option value="23">23</option>
                                
                                    <option value="24">24</option>
                                
                                    <option value="25">25</option>
                                
                                    <option value="26">26</option>
                                
                                    <option value="27">27</option>
                                
                                    <option value="28">28</option>
                                
                                    <option value="29">29</option>
                                
                                    <option value="30">30</option>
                                
                                    <option value="31">31</option>
                                
                            </select>
                        </div>
                    </FormGroup>
                    <br></br>
                    <h5 style={{color:'white'}}>select your favorite genres: </h5>
                    <div style={{textAlign: 'left', marginLeft:'33vw', color:'white'}}>
                    <FormGroup>
                        <FormCheckbox
                             checked={this.state.action}
                             onChange={e => this.handleChange(e, "action")} >
                            action
                        </FormCheckbox>
                        <FormCheckbox
                             checked={this.state.adventure}
                             onChange={e => this.handleChange(e, "adventure")}>
                            adventure
                        </FormCheckbox>
                        <FormCheckbox
                             checked={this.state.thriller}
                             onChange={e => this.handleChange(e, "thriller")}>
                            thriller
                        </FormCheckbox>
                        <FormCheckbox
                             checked={this.state.romance}
                             onChange={e => this.handleChange(e, "romance")}>
                            romance
                        </FormCheckbox>
                        <FormCheckbox
                             checked={this.state.fantasy}
                             onChange={e => this.handleChange(e, "fantasy")}>
                            fantasy
                        </FormCheckbox>
                        <FormCheckbox
                             checked={this.state.comedy}
                             onChange={e => this.handleChange(e, "comedy")}>
                            comedy
                        </FormCheckbox>
                    </FormGroup>
                    </div>
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

export default UserPreference;