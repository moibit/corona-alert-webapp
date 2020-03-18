import React from 'react';
import '../css/App.css';
import Register from './register.js';
import Login from './signin.js';

class Entry extends React.Component {

    render() {
      return (
          <div className="app_bg">
            <div style={{margin:'0vh 30vw',textAlign:'center',letterSpacing:'8px'}}>
                <span style={{fontSize:'48px',fontFamily: 'Bai Jamjuree , sans-serif',color:'#79cedc'}}>
                    Covid-19
                </span>
                <br />
                <span style={{color:'#a6a6a6',letterSpacing:'4px'}}>
                    Alert Application
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
        </div>
      )
    }
}
export default Entry;
