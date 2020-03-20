import React from 'react'
import { Header, Table , Icon} from 'semantic-ui-react'
import {getUserData} from '../common/apicall';
class MyActivity extends React.Component {
    state = {
        data : {},
        loading : true
    }
    async componentDidMount() {
        this.setState({data : await getUserData(),loading:false});
        console.log(this.state.data);
    }
    render() {
        return (
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
                        {this.state.loading ? <h3>Loading...</h3> : 
                            (Object.keys(this.state.data)).map((date => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>
                                        <Header as='h4'>
                                            <Header.Content>
                                                {date}
                                            </Header.Content>
                                        </Header>
                                        </Table.Cell>
                                        <Table.Cell>
                                            {this.state.data[date].map(entry => {
                                                return (
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <pre>{JSON.stringify(entry)}</pre>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                )
                                            })}
                                            
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            }))}
                        </Table.Body>
                    </Table>
                </center>
        )
    }
}


export default MyActivity