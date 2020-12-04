import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={15} style={{width:'41%', height:'100%',marginTop:-300}}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyBHygCV8bSCuMbSwwBBoEIp_nUsAMcAc",
})(GoogleMap);
