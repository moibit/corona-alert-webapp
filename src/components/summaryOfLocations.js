import React from 'react'
import { Button, Modal, Icon,Table } from 'semantic-ui-react'

const ModalExampleShorthand = () => (
  <Modal
    trigger={<Button icon labelPosition='right' color="facebook">
    Finish
    <Icon name='check' />
</Button>}
    header='Please verify your submissions'
    actions={['Cancel', <Button onClick={()=>{
        window.location = '/#/myActivity'
    }}>Submit</Button>]}
    content={<Summary />}
  />
)


const Summary = () => (
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
            <Table.Row>
                <Table.Cell>17th March,2020, 10:00 AM</Table.Cell>
                <Table.Cell>Block B, Rmz Infinity, Bengaluru</Table.Cell>
                <Table.Cell>
                    <Table.Row>
                        <Table.Cell>Alice</Table.Cell>
                        <Table.Cell>9892984892</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Bob</Table.Cell>
                        <Table.Cell>6532984892</Table.Cell>
                    </Table.Row>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>17th March,2020, 2:00 PM</Table.Cell>
                <Table.Cell>Tin Factory,Bengaluru</Table.Cell>
                <Table.Cell textAlign='center'>NA</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>17th March,2020, 3:30 PM</Table.Cell>
                <Table.Cell>Kalamandir, Marathahalli Bridge, Bengaluru</Table.Cell>
                <Table.Cell>
                    <Table.Row>
                        <Table.Cell>Charles</Table.Cell>
                        <Table.Cell>9892344892</Table.Cell>
                    </Table.Row>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
  </Table></center>
)

export default ModalExampleShorthand
