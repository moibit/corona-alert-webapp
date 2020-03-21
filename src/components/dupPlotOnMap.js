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
const { compose, withProps, lifecycle } = require("recompose");

// const MapComponent = withScriptjs(withGoogleMap(Map));

// export default () => (
//   <MapComponent
//     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHXJ9lUI_nsD-25_RKNKWJ_UGzHu7sYCg&libraries=geometry,drawing,places"
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `80vh`, width: "100vw" }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//   />
// );

const MyMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyC5VMMlyr_A6K5ycpOrq3OsVM8YYbn0q3A&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
  )(props => {
      console.log(props);
      return (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={props.path[0]}
    >
        <Polyline path={props.path} options={{ strokeColor: "#FF0000 " }} />
        {props.path.map((latLng,index)=>{
            return (
                <Marker key={index} label={index+1} position={latLng} onClick={()=>props.showThisMarkerInfo(index)}>
                    {props.showItNow[index] &&
                    <InfoWindow key={index} onCloseClick={()=>props.showThisMarkerInfo(index)}>
                        <span> Visited 
                            <span style={{color:'#a6a6a6',margin:'0px 4px'}}>{props.labelInfo[index].address}</span>
                            on <span style={{color:'blue',margin:'0px 2px'}}>{DF(props.labelInfo[index].visitedAt,'dddd, mmmm dS, yyyy, h:MM:ss TT')}</span>
                        </span>
                    </InfoWindow>}
                </Marker>
            )
        })}
    </GoogleMap>
)});


export default class RouteMap extends React.Component {
    state = {
        path : [
            { lat: 18.558908, lng: -68.389916 },
            { lat: 18.558853, lng: -68.389922 },
            { lat: 18.558375, lng: -68.389729 },
            { lat: 18.558032, lng: -68.389182 },
            { lat: 18.55805, lng: -68.388613 },
            { lat: 18.558256, lng: -68.388213 },
            { lat: 18.558744, lng: -68.387929 }
        ],
        showItNow : Array(7).fill(false),
        labelInfo : []
    }
    showThisMarkerInfoI = (n) => {
        let tempShowItNow = this.state.showItNow;
        tempShowItNow[n] = tempShowItNow[n];
        this.setState({showItNow : tempShowItNow})
    }
    componentDidMount() { 
        const query = window.location.hash;
        const targetIndex = query.lastIndexOf('=');
        const dateQuery = query.substring(targetIndex+1,query.length);
        const locationBase = getSpecificDateData(dateQuery);
        let tempLabelInfo = [];
        let tempPath = [];

        locationBase.map(async entry => {
            let locDesc = await axios({
                url : 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+entry.latitude+','+entry.longitude+'&key=AIzaSyCHXJ9lUI_nsD-25_RKNKWJ_UGzHu7sYCg',
                method : 'GET'
            });
            tempLabelInfo.push({
                address : locDesc.data.results[0].formatted_address,
                visitedAt : entry.timeStamp
            })
            tempPath.push({
                lat : entry.latitude,
                lng : entry.longitude
            });
        })
        // this.setState({labelInfo : tempLabelInfo , path : tempPath})
        this.setState({labelInfo : tempLabelInfo})
    }

    render(){
      return (
            <MyMapComponent path={this.state.path} labelInfo={this.state.labelInfo} showItNow={this.state.showItNow} 
                showThisMarkerInfo={(k) => this.showThisMarkerInfoI(k)}
            />
        );
    }
  }
