import React from 'react'
import { Header, Table , Icon} from 'semantic-ui-react'

const TableExampleCollapsing = () => (
    <center>
        <h2 style={{color:'#a6a6a6',marginBottom:'40px'}}>
            <div style={{float:'left'}}>
                <a href="/#/home"><Icon name="home" size="big" color="black" /></a>
            </div>
            Summary of Date to Route of places you visited
        </h2>
        <Table basic='very' celled collapsing style={{width:'80%'}}>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell style={{width:'25%'}}>Date</Table.HeaderCell>
                <Table.HeaderCell>Route of places you visited</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
                <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                    18th March,2020
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell><a href="https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-16&pli=1" target="_blank">https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-16&pli=1</a></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                    17th March,2020
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell><a href="https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-24&pli=1" target="_blank">https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-24&pli=1</a></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                    16th March,2020
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell><a href="https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-22&pli=1" target="_blank">https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-22&pli=1</a></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                    15th March,2020
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell><a href="https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-09&pli=1" target="_blank">https://www.google.com/maps/timeline?pb=!1m2!1m1!1s2019-03-09&pli=1</a></Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </center>
)

export default TableExampleCollapsing