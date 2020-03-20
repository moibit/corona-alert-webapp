import React from 'react'
import { Button, Modal, Icon,Table } from 'semantic-ui-react'
import {storeInMoiBit} from '../common/apicall';
import {getUserData} from '../common/apicall';

class Finish extends React.Component {
    state = {
        insertingDataInProgress : false,
        open : false
    }
    render() {
        return (
            <Modal
                open = {this.state.open}
                trigger={<Button icon labelPosition='right' color="facebook"
                onClick={()=>this.setState({open : true})}>
                    Finish
                    <Icon name='check' />
                    </Button>
                }
                header='Please verify your submissions'
                actions={[<Button onClick={()=>this.setState({open : false})}>Cancel</Button>,

                    <Button loading={this.state.insertingDataInProgress} onClick={async ()=>{
                        let userData = await getUserData();
                        this.props.summary.map(entry => {
                            const dateArr = entry.details.dateOfVisit.split('-');
                            const timeArr = entry.details.timeOfVisit.split(':');
                            var derivedDate = new Date(dateArr[0], dateArr[1], dateArr[2], timeArr[0], timeArr[1], 0);
                            if(entry.details.dateOfVisit !== '') {
                                if(userData[entry.details.dateOfVisit] !== undefined) {
                                    userData[entry.details.dateOfVisit].push({
                                        timeStamp : derivedDate.getTime(),
                                        latitude : entry.details.location.lat,
                                        longitude : entry.details.location.long,
                                    })
                                }else {
                                    userData[entry.details.dateOfVisit] = [{
                                        timeStamp : derivedDate.getTime(),
                                        latitude : entry.details.location.lat,
                                        longitude : entry.details.location.long,
                                    }]
                                }
                            }
                        })
                        try {
                            this.setState({insertingDataInProgress : true})
                            await storeInMoiBit(userData);
                            this.setState({insertingDataInProgress : false});
                            window.location='/#/myActivity'
                        }catch(e) {
                            console.log(e)
                        }
                        

                    }} primary>Submit</Button>
                ]}
                content={<Summary data={this.props.summary} />}
            />
        )
    }
}


const Summary = (props) => (
    <center style={{margin:"30px 0px"}}>
    <Table celled structured style={{width:'80%'}}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell rowSpan='2'>Date with time</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Location</Table.HeaderCell>
                <Table.HeaderCell colSpan='2'>People
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Mobile number</Table.HeaderCell>
                    </Table.Row>
                </Table.HeaderCell>
            </Table.Row>
        
        </Table.Header>
        <Table.Body>
            {props.data.map(locationDetails => {
                return (
                    locationDetails.details.location.desc !== '' ?
                    <Table.Row>
                        <Table.Cell>{locationDetails.details.dateOfVisit}, {locationDetails.details.timeOfVisit}</Table.Cell>
                        <Table.Cell>{locationDetails.details.location.desc}</Table.Cell>
                        <Table.Cell>
                            {locationDetails.details.members.map(member => {
                                    return (
                                        member.name === '' ? <React.Fragment>NA</React.Fragment> : 
                                        <Table.Row>
                                            <Table.Cell>{member.name}</Table.Cell>
                                            <Table.Cell>{member.mobileNo}</Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Cell>
                    </Table.Row> : '' 
                )
            })}
        </Table.Body>
  </Table></center>
)

export default Finish
