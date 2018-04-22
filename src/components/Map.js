/**
 * Created by Trilian on 22/04/2018.
 */
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
	};
	render() {
		const style = {
			width: '100%',
			height: '100%'
		};
		return (
			<Map
				google={this.props.google}
				zoom={14}
			  style={ style }
				initialCenter={{
					lat: 51.488001,
					lng: -0.123730
				}}
			>

				<Marker onClick={this.onMarkerClick}
				        name={'Current location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
						<h1>{this.state.selectedPlace.name}</h1>
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyB-lmmM7K5m7lSb19Nc4my8hGulJHV0npU")
})(MapContainer)