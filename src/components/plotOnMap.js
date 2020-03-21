import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker,
  InfoWindow
} from "react-google-maps";
import axios from 'axios';
import DF from 'dateformat';
import {getSpecificDateData} from '../common/apicall';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path : [
                { lat: 18.558908, lng: -68.389916 },
                { lat: 18.558853, lng: -68.389922 },
                { lat: 18.558375, lng: -68.389729 },
                { lat: 18.558032, lng: -68.389182 },
                { lat: 18.55805, lng: -68.388613 },
                { lat: 18.558256, lng: -68.388213 },
                { lat: 18.558744, lng: -68.387929 }
            ],
            timeStamps : [],
            showItNow : Array(7).fill(false),
            ts : [1585717200000,1585724400000,1585738800000,1585789000000,1585851000000,1585902000000,1585992000000]
        }
    }
    
    componentDidMount() { 
        // const query = window.location.hash;
        // const targetIndex = query.lastIndexOf('=');
        // const dateQuery = query.substring(targetIndex+1,query.length);
        // const locationBase = getSpecificDateData(dateQuery);
        // console.log(locationBase);
        let tempLabelInfo = [];
        let tempPath = [];

        this.state.path.map(async (entry,index) => {
            let locDesc = await axios({
                url : 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+entry.lat+','+entry.lng+'&key=AIzaSyCHXJ9lUI_nsD-25_RKNKWJ_UGzHu7sYCg',
                method : 'GET'
            });
            tempLabelInfo.push({
                address : locDesc.data.results[0].formatted_address,
                visitedAt : this.state.ts[index]
            })
            tempPath.push({
                lat : entry.latitude,
                lng : entry.longitude
            });
        })
        this.setState({labelInfo : tempLabelInfo})
    }

  showThisMarkerInfo = (n) => {
    let tempShowItNow = this.state.showItNow;
    tempShowItNow[n] = !tempShowItNow[n];
    this.setState({showItNow : tempShowItNow})
  }

  render = () => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={this.state.path[0]}
      >
        <Polyline path={this.state.path} options={{ strokeColor: "#FF0000 " }} />
        {this.state.path.map((latLng,index)=>{
            return (
                <Marker key={index} label={index+1} position={latLng} onClick={()=>this.showThisMarkerInfo(index)}>
                    {this.state.showItNow[index] &&
                    <InfoWindow key={index} onCloseClick={()=>this.showThisMarkerInfo(index)}>
                        <span> Visited 
                            <span style={{color:'#a6a6a6',margin:'0px 4px'}}>{this.state.labelInfo[index].address}</span>
                            on <span style={{color:'blue',margin:'0px 2px'}}>{DF(this.state.labelInfo[index].visitedAt,'dddd, mmmm dS, yyyy, h:MM:ss TT')}</span>
                        </span>
                    </InfoWindow>}
                </Marker>
            )
        })}
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHXJ9lUI_nsD-25_RKNKWJ_UGzHu7sYCg&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100vh`, width: "100vw" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);