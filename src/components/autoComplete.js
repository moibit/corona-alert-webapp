import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';
import { geocodeByAddress } from 'react-google-places-autocomplete';


 
const Component = (props) => (
  <div style={{width:'300px'}}>
    <GooglePlacesAutocomplete
      onSelect={async (locObj) => {
        const placeDetails = await geocodeByAddress(locObj.description);
        props.storeLocation(locObj.description,placeDetails[0].geometry.location.lat(),placeDetails[0].geometry.location.lng());
      }}
    />
  </div>
);
 
export default Component;