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
				zoom={9}
			  style={ style }
				initialCenter={{
					lat: 51.488001,
					lng: -0.123730
				}}
			>

				<Marker
					title="1"
					onClick={this.onMarkerClick}
					name={'Current location'}
					position={{
						lat: 51.488001,
						lng: -0.123730
					}}
				/>

				<Marker
					title="2"
					onClick={this.onMarkerClick}
					name={'Current location'}
					position={{
						lat: 51.574459,
						lng: 0.162707
					}}
				/>

				<Marker
					title="3"
					onClick={this.onMarkerClick}
					name={'Current location'}
					position={{
						lat: 51.488162,
						lng: -0.123708
					}}
				/>

				<Marker
					title="4"
					onClick={this.onMarkerClick}
					name={'Current location'}
					position={{
						lat: 51.574486,
						lng: 0.162707
					}}
				/>



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