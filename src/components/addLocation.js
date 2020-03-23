import React from 'react'
import { Icon, Button,Form } from 'semantic-ui-react';
import SummaryComponent from './summaryOfLocations'
import '../css/App.css';
import Logo from '../assets/tracy_logo_green.png';
import AutoComplete from './autoComplete.js'

export default class LocationPortal extends React.Component {
    state = {
        locationEntries : [
            {
                filled : false, 
                details : {
                    location : {
                        desc : '',
                        lat : '',
                        long : ''
                    },
                    dateOfVisit : '',
                    timeOfVisit : '',
                    members : [
                        {
                            name : '',
                            mobileNo : ''
                        }
                    ]
                } 
            }
        ],
        currentLocationIndex : 0,
        validationFailed : false
    }

    recordCoordinates = (index,_desc,_lat,_long) => {
        const tempLocationEntries = this.state.locationEntries;
        tempLocationEntries[index].details.location.desc = _desc;
        tempLocationEntries[index].details.location.lat = _lat;
        tempLocationEntries[index].details.location.long = _long;
        this.setState({locationEntries : tempLocationEntries});
    }

    recordLocationDateOrTime = (index,event,attribute) => {
        const tempLocationEntries = this.state.locationEntries;
        tempLocationEntries[index].details[attribute] = event.target.value;
    }

    recordMemberNameOrNum = (pIndex,mIndex,e,attribute) => {
        const tempLocationEntries = this.state.locationEntries;
        tempLocationEntries[pIndex].details.members[mIndex][attribute] = e.target.value;
    }

    addRow = (pIndex) => {
        const tempLocationEntries = this.state.locationEntries;
        tempLocationEntries[pIndex].details.members.push({
            name : '',
            mobileNo : ''
        });
        this.setState({locationEntries : tempLocationEntries});
    }

    render() {
        return (
            <div className="profile_screen">
                <div style={{position:'absolute',top:'50px',left:'0px'}}>
                    <div style={{height:'125px',marginTop:'-5vh',padding:'0px 4vw'}}>
                        <img src={Logo} height="100%" width="250px" />
                    </div>
                    <div style={{color:'#a6a6a6',fontSize:'10px',marginTop:'-30px',letterSpacing:'1px',marginLeft:'40px',padding:'0px 4vw'}}>Stay Connected. Stay Safe.</div>
                </div>
                <div style={{float:'right'}}>
                    <a href="/#/home"><Icon name="home" style={{fontSize:'48px',marginTop:'20px'}} color="black" /></a>
                </div>
                <h1 style={{fontSize:'38px',letterSpacing:'3px',color:'#005b8f',paddingLeft:'60vh'}}>Location entry Portal</h1>
                
                {this.state.locationEntries.map((entry,index) => {
                    return (
                        <React.Fragment>
                        {this.state.locationEntries[index].filled ? 
                        <div>
                            <h2 style={{marginLeft:'10vw',marginTop:'5vh',color:'#005b8f'}} >Locations entered</h2>
                            <div style={{marginLeft:'10vw',fontSize:'14px',color:'green',padding:'20px',border:'1px solid #e6e6e6',borderRadius:'5px',boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.45)'}} key={'filled'+index}>
                            {this.state.locationEntries[index].details.location.desc}
                        </div> 

                        </div>
                        :
                        <div key={'location_'+index}>
                            <h2 style={{marginLeft:'10vw',marginTop:'5vh',color:'#005b8f'}} >Add location details</h2>
                            <Form style={{margin:'5vh 0vw 0vh 15vw'}}>
                                <div style={{display:'flex'}}>
                                    <Form.Field style={{width:'250px',marginRight:'100px'}}>
                                        <label>Location</label>
                                        <AutoComplete storeLocation={(desc,lat,long) => this.recordCoordinates(index,desc,lat,long)} />
                                    </Form.Field>
                                    <Form.Field style={{width:'250px',marginRight:'100px'}}>
                                        <label>Date of Visit</label>
                                        <input type="date" placeholder='Enter Date' onChange={event => {
                                            this.recordLocationDateOrTime(index,event,'dateOfVisit');
                                        }} />
                                    </Form.Field>
                                    <Form.Field style={{width:'250px',marginRight:'100px'}}>
                                        <label>Time of Visit</label>
                                        <input type="time" placeholder='Enter time' onChange={event => {
                                            this.recordLocationDateOrTime(index,event,'timeOfVisit');
                                        }}/>
                                    </Form.Field>
                                </div>
                                <div style={{marginTop:'5vh',color:'#a6a6a6',display:'flex'}}>
                                    <h2>Add people with you (at that time)</h2> 
                                    <Button primary icon labelPosition='right' style={{marginLeft:'30vw'}}
                                        onClick={()=> this.addRow(index)}
                                    >
                                        Add Member
                                        <Icon name='plus' />
                                    </Button>
                                </div>
                                <div style={{height:'40vh',overflowY:'auto',overflowX:'hidden'}}>
                                    {this.state.locationEntries[index].details.members.map((memObj,memberIndex) => {
                                        return (
                                            <Form.Group key={'members_'+index+'_'+memberIndex}>
                                                <Form.Input fluid label='Name' placeholder="Enter member's name" style={{width:'250px',marginRight:'100px'}} 
                                                    onChange={(e) => this.recordMemberNameOrNum(index,memberIndex,e,'name')}
                                                />
                                                <Form.Input fluid label='Mobile Number' placeholder="Enter member's mobile number" style={{width:'250px',marginRight:'100px'}}
                                                    onChange={(e) => this.recordMemberNameOrNum(index,memberIndex,e,'mobileNo')}
                                                />
                                            </Form.Group>
                                        )
                                    })}
                                </div>
                            </Form>
                        </div>}
                        </React.Fragment>
                    )
                })}
                <div id={this.state.validationFailed ? "invalid_pswd" : "dontShow"}>Make sure you have filled atleast location,date and time of visit</div>
                <div style={{position:'absolute',bottom:'0px',backgroundColor:'#f0f0f0',
                    padding:'20px 50px 20px 0px',width:'100%'}}
                >
                    <div style={{float:'right'}}>
                        <Button icon labelPosition='left' color="twitter"
                        onClick={()=>{
                            if(this.state.locationEntries[this.state.currentLocationIndex].details.location.desc !== '' && this.state.locationEntries[this.state.currentLocationIndex].details.dateOfVisit !== '' && this.state.locationEntries[this.state.currentLocationIndex].details.timeOfVisit !== '') {
                                const tempLe = this.state.locationEntries;
                                tempLe[this.state.currentLocationIndex].filled = true;
                                tempLe.push({
                                    filled : false, 
                                    details : {
                                        location : {
                                            desc : '',
                                            lat : '',
                                            long : ''
                                        },
                                        dateOfVisit : '',
                                        timeOfVisit : '',
                                        members : [
                                            {
                                                name : '',
                                                mobileNo : ''
                                            }
                                        ]
                                }});
                                this.setState({currentLocationIndex : this.state.currentLocationIndex + 1,locationEntries : tempLe})
                            }else {
                                this.setState({validationFailed : true});
                                setTimeout(()=>this.setState({validationFailed : false}),3000)
                            }
                        }}>
                            <Icon name='plus' />
                            Add Another Location
                        </Button>
                        <SummaryComponent summary={this.state.locationEntries}/>
                    </div>
                </div>
            </div>
        )
    }
}
