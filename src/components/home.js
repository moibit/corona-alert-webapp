import React from 'react'
import {Popup, Button,Menu,Dropdown} from 'semantic-ui-react';
import StatsInChart from './lineChart.js';
import MyActivity from './mylocations';
import Logo from '../tracy_logo_green.png';
import MoiBitIcon from '../moibit_logo.png';
import '../css/App.css';

export default class Home extends React.Component {
    render() {
        const route = window.location;
        const activeRoute = route.hash.substring(2,route.hash.length);
        const hackBool = activeRoute === 'myActivity';
        return (
            <div className="profile_screen">
                <div style={{position:'absolute',
                    left:'0px',
                    top:'0px',
                    padding:'10vh 0vw',
                    fontFamily: 'Bai Jamjuree , sans-serif',
                    fontSize:'48px',height:'100vh',
                    borderRight:'1px solid #a6a6a6'
                }}>
                <div style={{height:'150px',marginTop:'-5vh',padding:'0px 4vw'}}>
                    <img src={Logo} height="100%" width="100%" />
                </div>
                <div style={{color:'#222',fontSize:'10px',marginTop:'-30px',letterSpacing:'1px',marginLeft:'40px',padding:'0px 4vw'}}>Stay Connected. Stay Safe.</div>
                <div style={{marginTop:'4vh',padding:'0px 4vw'}}>
                    <span style={{fontSize:'14px'}}>Actions</span>
                    <br />
                    <PopupOptions />
                </div>
                <div style={{marginTop:'4vh',padding:'2px 4vw',boxShadow:hackBool ? '1px 10px 12px rgb(0,0,0,0.5' : ''}}>
                    <span style={{fontSize:'14px'}}>My Activity</span>
                    <br />
                    <Button style={{marginBottom:'15px'}} onClick={()=>{
                        window.location = '/#/myActivity'
                    }}primary>My Locations</Button>
                </div>

                </div>
                <div style={{marginLeft:'30vw'}}>
                    {this.props.dashboard ? <RightPane /> : <MyActivity />}
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

const RightPane = () => (
    <React.Fragment>
        Covid-19 Stats
        <span style={{float:'right',width:'200px'}}>
            <CountryDropDown />
        </span>
        <div style={{marginTop:'5vh',display:'flex'}}>
            <StatsInChart  />
            <Counter title="Total Effected" count="201" color="blue" />
            <Counter title="Total Recovered" count="20" color="green" />
            <Counter title="Total Deaths" count="5" color="red" />
        </div>
        <div>
            <h3>About Covid-19 and Tips, News and preventive measures</h3>
            <p><a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html</a></p>
            <p><a href="https://www.bbc.com/news/world-51235105">https://www.bbc.com/news/world-51235105</a></p>
            <p><a href="https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html">https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html</a></p>
            <p><a href="https://www.bbc.com/news/health-51711227">https://www.bbc.com/news/health-51711227</a></p>
            <p><a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html">https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html</a></p>
            <p><a href="https://www.aljazeera.com/news/2020/03/coronavirus-emergency-kit-preparation-symptoms-tips-200314103304717.html">https://www.aljazeera.com/news/2020/03/coronavirus-emergency-kit-preparation-symptoms-tips-200314103304717.html</a></p>
            <p><a href="https://edition.cnn.com/2020/03/12/health/what-60-older-need-to-know-coronavirus-wellness-trnd/index.html">https://edition.cnn.com/2020/03/12/health/what-60-older-need-to-know-coronavirus-wellness-trnd/index.html</a></p>
            <p><a href="https://edition.cnn.com/2020/03/17/health/coronavirus-quarantine-grocery-list-drayer-wellness/index.html">https://edition.cnn.com/2020/03/17/health/coronavirus-quarantine-grocery-list-drayer-wellness/index.html</a></p>

        </div>
    </React.Fragment>
)
const PopupOptions = () => (
    <Popup
        position="right center"
        on='click'
        trigger={
            <Button style={{marginBottom:'15px'}}  primary>Add Location</Button>
        }
    >
      <Popup.Content>
        <Menu vertical >
            <Menu.Item
                name='inbox'
            >
                <a href="/#/addLocation">Add for yourself</a>
            </Menu.Item>

            <Menu.Item
                name='spam'
            >
                <a href="/#/signup">Add for others</a>
            </Menu.Item>
        </Menu>
      </Popup.Content>
    </Popup>
  )

  const countryOptions = [
    { key: 'ind', value: 'ind', text: 'India' },
    // { key: 'af', value: 'af', text: 'Afghanistan' },
    // { key: 'ax', value: 'ax', text: 'Aland Islands' },
    // { key: 'al', value: 'al', text: 'Albania' },
    // { key: 'dz', value: 'dz', text: 'Algeria' },
    // { key: 'as', value: 'as', text: 'American Samoa' },
    // { key: 'ad', value: 'ad', text: 'Andorra' },
    // { key: 'ao', value: 'ao', text: 'Angola' },
    // { key: 'ai', value: 'ai', text: 'Anguilla' },
    // { key: 'ag', value: 'ag', text: 'Antigua' },
    // { key: 'ar', value: 'ar', text: 'Argentina' },
    // { key: 'am', value: 'am', text: 'Armenia' },
    // { key: 'aw', value: 'aw', text: 'Aruba' },
    // { key: 'au', value: 'au', text: 'Australia' },
    // { key: 'at', value: 'at', text: 'Austria' },
    // { key: 'az', value: 'az', text: 'Azerbaijan' },
    // { key: 'bs', value: 'bs', text: 'Bahamas' },
    // { key: 'bh', value: 'bh', text: 'Bahrain' },
    // { key: 'bd', value: 'bd', text: 'Bangladesh' },
    // { key: 'bb', value: 'bb', text: 'Barbados' },
    // { key: 'by', value: 'by', text: 'Belarus' },
    // { key: 'be', value: 'be', text: 'Belgium' },
    // { key: 'bz', value: 'bz', text: 'Belize' },
    // { key: 'bj', value: 'bj', text: 'Benin' },
  ]
  
  const CountryDropDown = () => (
    <Dropdown
      fluid
      search
      selection
      defaultValue="ind"
      options={countryOptions}
      placeholder='Select Country'
    />
  )

  const Counter = (props) => (
    <div style={{margin:'10vh 0vw',display:'flex',flexDirection:'column'}}>
        <span style={{fontSize:'82px',color:props.color}}>{props.count}</span>
        <span style={{fontSize:'14px',width:'180px',color:'#a6a6a6',marginTop:'7vh',letterSpacing:'4px'}}>{props.title}</span>
    </div>
  )