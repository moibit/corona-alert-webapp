import React from 'react';
import '../css/App.css';
import Register from './register.js';
import Login from './signin.js';
import MoiBitIcon from '../moibit_logo.png';

class Entry extends React.Component {

    render() {
      return (
          <div className="app_bg">
            <div style={{margin:'0vh 30vw',textAlign:'center',letterSpacing:'8px'}}>
                <span style={{fontSize:'52px',letterSpacing:'20px',fontFamily: 'Bai Jamjuree , sans-serif',color:'#79cedc'}}>
                    Tracy
                </span>
                <br />
                <span style={{color:'#a6a6a6',letterSpacing:'1px',fontSize:'12px'}}>
                    Stay Connected. Stay Safe.
                </span>
            </div>
            <div className="leypa-modal-content">
                <div className="tabs">
                    <input id="tab1" type="radio" name="tabs" defaultChecked />
                    <label htmlFor="tab1">{this.props.case === 1 ? 'Register' : 'Login' }</label>

                    {/* <input id="tab2" type="radio" name="tabs"  />
                    <label htmlFor="tab2">Login</label> */}

                
                    <div className="content">
                        {this.props.case === 1 ?<Register /> : <Login />}
                    </div>  
                </div>
            </div>
            <div style={{position:'absolute',bottom:'0vh',letterSpacing:'2px',backgroundColor:'#102b4e',textAlign:'center',color:'#fff',width:'100vw',paddingLeft:'36vw',display:'flex'}}>
                <div style={{marginTop:'25px'}}>Powered by <span style={{fontWeight:'300'}}>Moi_</span>
                <span style={{color:'#79cedc',fontWeight:'800'}}>ID</span> and Build on </div>
                <img src={MoiBitIcon} height="60px" width="150px" />
            </div>
        </div>
      )
    }
}
export default Entry;
