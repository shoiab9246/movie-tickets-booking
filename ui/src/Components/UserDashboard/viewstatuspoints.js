import React from 'react'
import { Container, Form, FormCheckbox, FormGroup, Button} from 'shards-react'
import * as ROUTES from '../../Constants/routes.js';
import Utils from '../../Utilities';

let API_URL = Utils.API_URL


class ViewStatusPoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem("username"),
            points: 0,
            balance: 0
        };
    }
   
    componentDidMount() {
        this.getPoints();
    }
      
    handleFieldChange(e) {
     this.setState({
         [e.target.name]: e.target.value

     });
    }


    getPoints(){
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
                this.state.points = body.points;
                this.state.balance = body.balance;
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
                        <h3>rewards points</h3>
                        <br/>
                    </div>
                    <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', backgroundColor:'black', width:'75vw', margin:"0 auto"}}>
                <Container>
                    <br></br>
                <Form>
                    <FormGroup>
                      <div style={{margin:"0 auto"}}>
                            <div htmlFor="points" style={{color:'white'}}>points: { this.state.points}</div>
                     </div>
                     <br></br>
                     <div style={{margin:"0 auto"}}>
                            <div htmlFor="points" style={{color:'white'}}>cash earned: ${ this.state.balance}.00</div>
                     </div>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <div className="width-50">
                            <div className="earnpoints" htmlFor="earnpoints" style={{color:'white'}}> 
                            <a href={ROUTES.CITYSEARCH}>earn points</a></div>
                            </div>
                    </FormGroup>
                    <br></br>
                </Form>           
                <br></br>
                </Container>
                </div>
                
            </div>
            
        )
    }
}

export default ViewStatusPoints;