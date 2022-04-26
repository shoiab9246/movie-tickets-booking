import React from 'react';
import axios, { Axios } from 'axios';
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react';

import Utils from '../../Utilities';
let API_URL = Utils.API_URL


class EditShowtime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            movie: "",
            cinema: "",
            startMonth: 0,
            startDay: 0,
            startYear: 2022,
            endMonth: 0,
            endDay: 0,
            endYear: 2022,
            ticketPrice: "",
            time: "",
            percent: 0
        };
    }
    
    
    getShowtime = (showtime) =>{
        axios.get(`${API_URL}/showtime/getshowtime`, {name: showtime})
        .then((response) => {
            const data = response.data;
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
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                movieTitle: this.state.movie,
                startMonth: this.state.startMonth,
                startDay: this.state.startDay,
                startYear: this.state.startYear,
                endMonth: this.state.endMonth,
                endDay: this.state.endDay,
                endYear: this.state.endYear,
                theatreName: this.state.cinema,
                ticketPrice: this.state.ticketPrice,
                startAt: this.state.time,
                percent: this.state.percent
                })
            };
        console.log(req);
        fetch(`${API_URL}/showtime/addshowtime`, req)
            .then(()=> {
            console.log("data has been sent to the server");
            this.resetShowtimeInputs();
            this.getShowtime();
        })
        .catch(() => {

        });;
    };

    resetShowtimeInputs = () => {
    };

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
                        <h3>edit showtime</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    <FormGroup>
                      <div style={{margin:"0 auto"}}>
                            <div htmlFor="time" style={{color:'white'}}>time:</div>
                            <input onChange = {(e) => this.handleFieldChange(e)} type="text" id="time" name="time" maxLength="15" defaultValue=""/>
                            <br></br>
                            <div  htmlFor="movie" style={{color:'white'}}>movie:</div>
                            <input  onChange = {(e) => this.handleFieldChange(e)}type="text" id="movie" name="movie" maxLength="80" defaultValue=""/>
                            <br></br>
                            <div htmlFor="cinema" style={{color:'white'}}>cinema:</div>
                            <input  onChange = {(e) => this.handleFieldChange(e)}type="text" id="cinema" name="cinema" maxLength="80" defaultValue=""/>
                            <br></br>
                            <div htmlFor="ticketPrice" style={{color:'white'}}>ticket price:</div>
                            <input  onChange = {(e) => this.handleFieldChange(e)} type="text" id="ticketPrice" name="ticketPrice" maxLength="15" defaultValue=""/>
                            <br></br>
                            <div htmlFor="percent" style={{color:'white'}}>percent kept as profit:</div>
                            <input  onChange = {(e) => this.handleFieldChange(e)} type="text" id="percent" name="percent" maxLength="15" defaultValue=""/>
                      </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div>
                        <div className="startDate" style={{color:'white'}}>start date:</div>
                            <select  onChange = {(e) => this.handleFieldChange(e)} className="startMonth" name="startMonth" id="startMonth" defaultValue="1">
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
                            <select  onChange = {(e) => this.handleFieldChange(e)} className="startDay" name="startDay" id="startDay" defaultValue="1">
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
                    <FormGroup>
                        <div>
                        <div className="endDate" style={{color:'white'}}>end date:</div>
                            <select  onChange = {(e) => this.handleFieldChange(e)} className="endMonth" name="endMonth" id="endMonth" defaultValue="1">
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
                            <select  onChange = {(e) => this.handleFieldChange(e)} className="endDay" name="endDay" id="endDay" defaultValue="1">
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

export default EditShowtime;