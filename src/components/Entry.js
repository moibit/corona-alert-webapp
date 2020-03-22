import React from 'react';
import '../css/App.css';
import Register from './register.js';
import Login from './signin.js';
import MoiBitIcon from '../moibit_logo.png';
import Logo from '../tracy_logo_green.png';

class Entry extends React.Component {

    render() {
      return (
          <div className="app_bg">
            <div className="container_tracy">
                <img src={Logo} height="100%" width="250px" />
                <div style={{color:'#e6e6e6',marginTop:'-20px',letterSpacing:'1px',fontSize:'14px'}}>
                    Stay Connected. Stay Safe.
                </div>
                <div className="leypa-modal-content">
                    <div className="tabs">
                        <input id="tab1" type="radio" name="tabs" />
                        <label htmlFor="tab1">Signup</label>

                        <input id="tab2" type="radio" name="tabs"  defaultChecked/>
                        <label htmlFor="tab2">Login</label>
                    
                        <div className="content">
                            <div id="signup" role="list">
                                <Register />
                            </div>
                            <div id="login" role="list">
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{position:'absolute',bottom:'0vh',letterSpacing:'2px',backgroundColor:'#102b4e',textAlign:'center',color:'#fff',width:'100vw',paddingLeft:'36vw',display:'flex'}}>
                <div style={{marginTop:'25px'}}>Powered by <span style={{fontWeight:'300'}}>Moi_</span>
                <span style={{color:'#79cedc',fontWeight:'800'}}>ID</span>.Built on </div>
                <a href="https://www.moibit.io" target="_blank"><img src={MoiBitIcon} height="60px" width="150px" /></a>
            </div>
        </div>
      )
    }
}
export default Entry;
