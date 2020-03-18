import React from 'react'
import { Icon, Button,Form } from 'semantic-ui-react'
import '../css/App.css';

export default class LocationPortal extends React.Component {
    render() {
        return (
            <div className="profile_screen">
                <div style={{position:'absolute',top:'50px',left:'50px',fontFamily: 'Bai Jamjuree , sans-serif',fontSize:'48px'}}>
                    <span style={{color:'#79cedc'}}>Covid-19</span>
                    <br />
                    <span style={{color:'#222',fontSize:'14px',letterSpacing:'3px',marginLeft:'15px'}}>Alert Application</span>
                </div>
                <h1 style={{fontSize:'38px',letterSpacing:'3px',paddingLeft:'50vh'}}>Location entry for Victim : <i style={{color:'#a6a6a6'}}>John</i></h1>
                <div>
                    <Form style={{margin:'10vh 0vw 0vh 15vw'}}>
                        <Form.Group >
                            <Form.Input fluid label='Choose Location' placeholder='open in map' style={{width:'250px',marginRight:'100px'}} />
                            <Form.Input fluid label='Date of Visit' placeholder='17/3/2020' style={{width:'250px',marginRight:'100px'}}/>
                            <Form.Input fluid label='Time of Visit' placeholder='02:00 PM' style={{width:'250px',marginRight:'100px'}}/>
                        </Form.Group>
                        <div style={{marginTop:'5vh',color:'#a6a6a6',display:'flex'}}>
                            <h2>Add people with you (at that time)</h2> 
                            <Button primary icon labelPosition='right' style={{marginLeft:'30vw'}}>
                                Add Member
                                <Icon name='plus' />
                            </Button>
                        </div>
                        <MemberRow />
                    </Form>
                </div>
                <div style={{position:'absolute',bottom:'0px',backgroundColor:'#f0f0f0',
                    padding:'20px 50px 20px 0px',width:'100%'}}
                >
                    <div style={{float:'right'}}>
                        <Button icon labelPosition='left' color="twitter">
                            <Icon name='plus' />
                            Add Another Location
                        </Button>
                        <Button icon labelPosition='right' color="facebook">
                            Finish
                            <Icon name='check' />
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const MemberRow = () => (
    <Form.Group>
        <Form.Input fluid label='Name' placeholder="Enter member's name" style={{width:'250px',marginRight:'100px'}} />
        <Form.Input fluid label='Mobile Number' placeholder="Enter member's mobile number" style={{width:'250px',marginRight:'100px'}}/>
    </Form.Group>
);
