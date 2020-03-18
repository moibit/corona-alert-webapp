import React from 'react'
import { Icon, Button,Form } from 'semantic-ui-react';
import SummaryComponent from './summaryOfLocations'
import '../css/App.css';

export default class LocationPortal extends React.Component {
    state = {
        people : [{
            name : '',
            num : ''
        }]
    }
    render() {
        return (
            <div className="profile_screen">
                <div style={{position:'absolute',top:'50px',left:'50px',fontFamily: 'Bai Jamjuree , sans-serif',fontSize:'48px'}}>
                    <span style={{color:'#79cedc'}}>Covid-19</span>
                    <br />
                    <span style={{color:'#222',fontSize:'14px',letterSpacing:'3px',marginLeft:'15px'}}>Alert Application</span>
                </div>
                <div style={{float:'right'}}>
                    <a href="/#/home"><Icon name="home" style={{fontSize:'48px',marginTop:'20px'}} color="black" /></a>
                </div>
                <h1 style={{fontSize:'38px',letterSpacing:'3px',paddingLeft:'50vh'}}>Location entry for Victim : <i style={{color:'#a6a6a6'}}>John</i></h1>
                
                <div>
                    <Form style={{margin:'10vh 0vw 0vh 15vw'}}>
                        <Form.Group >
                            <Form.Input fluid label='Choose Location' placeholder='open in map' style={{width:'250px',marginRight:'100px'}} />
                            <Form.Input fluid label='Date of Visit' type="date" style={{width:'250px',marginRight:'100px'}}/>
                            <Form.Input fluid label='Time of Visit' type="text"  placeholder="Choose time" style={{width:'250px',marginRight:'100px'}}/>
                        </Form.Group>
                        <div style={{marginTop:'5vh',color:'#a6a6a6',display:'flex'}}>
                            <h2>Add people with you (at that time)</h2> 
                            <Button primary icon labelPosition='right' style={{marginLeft:'30vw'}}
                            onClick={()=>{
                                const _people = this.state.people;
                                _people.push({
                                    name : '',
                                    num : ''
                                })
                                this.setState({
                                    people : _people
                                })
                            }}>
                                Add Member
                                <Icon name='plus' />
                            </Button>
                        </div>
                        <div style={{height:'40vh',overflowY:'auto',overflowX:'hidden'}}>
                            {this.state.people.map((member) => {
                                return (<MemberRow name={member.name} number={member.num} />)
                            })}
                        </div>
                    </Form>
                </div>
                <div style={{position:'absolute',bottom:'0px',backgroundColor:'#f0f0f0',
                    padding:'20px 50px 20px 0px',width:'100%'}}
                >
                    <div style={{float:'right'}}>
                        <Button icon labelPosition='left' color="twitter"
                        onClick={()=>{
                            window.location.reload()
                        }}>
                            <Icon name='plus' />
                            Add Another Location
                        </Button>
                        <SummaryComponent />
                    </div>
                </div>
            </div>
        )
    }
}

const MemberRow = (props) => (
    <Form.Group>
        <Form.Input fluid label='Name' value={props.name} placeholder="Enter member's name" style={{width:'250px',marginRight:'100px'}} />
        <Form.Input fluid label='Mobile Number' value={props.number} placeholder="Enter member's mobile number" style={{width:'250px',marginRight:'100px'}}/>
    </Form.Group>
);
