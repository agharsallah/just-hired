import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON, FeatureGroup, Tooltip, LayersControl, Circle, CircleMarker } from 'react-leaflet';
import Control from 'react-leaflet-control';

class MapApplicant extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            center: [40, -5], zoom: 6, applicantNum: '0'
        })
    }
    getColorRegElg(d, c1, grades) {
        if (d > grades[3]) { return (c1[3]); }
        else if (d > grades[2]) { return (c1[2]); }
        else if (d > grades[1]) { return (c1[1]); }
        else if (d > grades[0]) { return (c1[0]); }
        else { return '#F2F2F0' }
    }
    style(feature) {
        const property = feature.properties;
        return {
            fillColor: this.getColorRegElg(property.applicants_num, ["#fee8c8", "#fc8d59", "#d7301f", "#7f0000"], [0, 2, 4, 10]),
            weight: 1.2,
            opacity: 0.9,
            color: 'grey',
            dashArray: '1',
            fillOpacity: 0.9
        };
    }

    highlightFeature(e) {
        const layer = e.target;
        const property = e.target.feature.properties;
        this.setState({
            applicantNum: property.applicants_num,
            cityName: property.NAME_2
        });
        return layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 1
        });

    }
    resetFeature(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 1
        });
    }
    render() {
        return (
            <div style={{marginTop:'10vh'}}>
            <h3  style={{ textAlign: 'center',    fontFamily: "Lucida Grande" }} >Applicants Per City</h3>

                <Map
                    id='map'
                    ref='map'
                    maxZoom={23}
                    flyTo={true}
                    keyboard={false}
                    scrollWheelZoom={false}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    className="initialposition two "
                    onZoom={
                        (e) => {
                            this.setState({ zoom: e.target._animateToZoom });
                        }
                    }
                    style={{ width: '100%', height: "80vh", position: "relative", zIndex: 0, backgroundColor: 'rgba(255, 255, 255, 0.0)' }}>
                    <TileLayer
                        url='http://{s}.t/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* <Marker position={this.props.markerpos} icon={pin} />  */}
                    <GeoJSON
                        //key={this.props.keymap}
                        data={G_SPAIN}
                        style={this.style.bind(this)}
                        onEachFeature={
                            (feature, layer) => {
                                layer.on({ mouseover: this.highlightFeature.bind(this) });
                                layer.on({ mouseout: this.resetFeature.bind(this) });
                            }
                        }
                    >
                        <Tooltip>
                            <div>
                                <h4 style={{ textAlign: 'center' }}>{this.state.cityName} </h4>
                                <h5 style={{ textAlign: 'center' }}>{this.state.applicantNum} Applicant</h5>
                            </div>
                        </Tooltip>
                    </GeoJSON>
                    <Control position="bottomright" >
                        <div className="info legend">
                            <p style={{ marginLeft: "10px" }}>Applicants number</p>
                            <div><i style={{ background: '#fee8c8' }}></i>0-2<br /></div>
                            <div><i style={{ background: '#fc8d59' }}></i>2-4<br /></div>
                            <div><i style={{ background: '#d7301f' }}></i>4-10<br /></div>
                            <div><i style={{ background: '#7f0000' }}></i>+10<br /></div>
                        </div>
                    </Control>

                </Map>
            </div>
        );
    }
}

export default MapApplicant;