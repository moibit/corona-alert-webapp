import React from 'react';
import classNames from 'classnames';
import { registeruser } from '../common/apicall';
export default class Register extends React.Component {
    state = {
        mobNo: '',
        userName: '',
        passPhrase: '',
        errorInCreation: false,
        creationInProgress: false,
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            mobile: this.state.mobNo,
            userName: this.state.userName
        }
        this.setState({creationInProgress : true})
        if(await registeruser(data)) {
            this.setState({creationInProgress : false});
            window.location = '/#/home';
        }else {
            this.setState({creationInProgress : false,errorInCreation : true});
        }
    }
    render() {
        return (
            <div id="signup" role="list" className="ui divided selection list">
                <div id="listitem-c19">
                    <div id="inputLabel2" className="ui horizontal label">
                        Name
                    </div><br />
                    <div className="ui transparent input" style={{ borderBottom: '1px solid #585858', paddingBottom: '5px', marginTop: '5px', marginLeft: '62px ' }}>
                        <input id="l_userName"
                            value={this.state.userName}
                            onChange={e => this.setState({ userName: e.target.value })}
                            type="text" placeholder="Enter your name"
                            style={{ fontSize: '13px', width: '300px', color: '#222' }} />
                    </div>
                </div>
                <div id="listitem-c19">
                    <div id="inputLabel2" className="ui horizontal label">
                        Mobile Number
                    </div><br />
                    <div className="ui transparent input" style={{ borderBottom: '1px solid #585858', paddingBottom: '5px', marginTop: '5px', marginLeft: '62px ' }}>
                        <input id="l_userName"
                            value={this.state.mobNo}
                            onChange={e => this.setState({ mobNo: e.target.value })}
                            type="number" placeholder="Enter your mobile number"
                            style={{ fontSize: '13px', width: '300px', color: '#222' }} />
                    </div>
                </div>
                <div id="listitem-c19">
                    <div id="inputLabel2" className="ui horizontal label">
                        OTP
                    </div><br />
                    <div className="ui transparent input" style={{ borderBottom: '1px solid #585858', paddingBottom: '5px', marginTop: '5px', marginLeft: '62px ' }}>
                        <input id="l_userEnteredSecret"
                            value={this.state.passPhrase}
                            onChange={e => this.setState({ passPhrase: e.target.value })}
                            type="text" placeholder="Enter the one time password"
                            style={{ fontSize: '13px', width: '300px', color: '#222' }} />
                    </div>
                    <br />
                    {/* <span style={{fontSize:'14px',color:'#fff',marginTop:'10px'}}> (01:00) </span> */}
                </div>
                <div id={this.state.errorInCreation ? "invalid_pswd" : "dontShow"}>Something went wrong! Try after sometime</div>
                <center>
                    <div className={classNames(
                        {
                            "button_with_pointer_events_enable": true,
                            "disable_button": this.state.passPhrase.length !== 0 && this.state.userName.length !== 0 && this.state.mobNo.length !== 0 ? false : true
                        }
                    )} style={{ display: 'inline-block' }}
                        onClick={this.handleSubmit}
                    >
                        Signup
                        <span style={{ marginLeft: '5px' }}>
                            {this.state.creationInProgress ? <i aria-hidden="true" id="contract_comm_id" className="circle notch loading icon"></i> :
                                <i aria-hidden="true" id="unlock_comm_id" className="arrow alternate circle right outline icon"></i>}
                        </span>
                    </div>
                    <div style={{ marginTop: '20px', color: '#a0a0a0' }}>Already have an account? <a style={{ color: '#22ceob' }} href="/#/login">Login now!</a></div>
                </center>
            </div>
        )
    }
}
