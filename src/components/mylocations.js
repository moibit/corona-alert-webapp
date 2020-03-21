import React from 'react'
import { Header, Table , Icon} from 'semantic-ui-react'
import {getUserData} from '../common/apicall';
import { Link } from 'react-router-dom';

class MyActivity extends React.Component {
    state = {
        data : {},
        loading : true
    }
    async componentDidMount() {
        const hi = await getUserData();
        this.setState({data : hi,loading:false});
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
                            this.state.data.map((date,index) => {
                                return (
                                    <Table.Row key={'visited'+index}>
                                        <Table.Cell>
                                        <Header as='h4'>
                                            <Header.Content>
                                                {date}
                                            </Header.Content>
                                        </Header>
                                        </Table.Cell>
                                        <Table.Cell>
                                            {/* <div style={{color:'blue',cursor:'pointers'}} onClick={()=>this.triggerLinkWithParams(this.state.data[date])}>See in map</div> */}
                                            <Link
                                                to={{
                                                    pathname: "/route",
                                                    search: "date="+date,
                                                }}
                                            >See in map</Link>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </center>
        )
    }
}


export default MyActivity
