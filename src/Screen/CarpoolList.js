import React from 'react';
import { View, Text, Image ,TextInput,ScrollView} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Wrapped from '../../Components/Global/Wrapped';
import {Avatar , Icon} from "react-native-elements";
import { Dimensions } from 'react-native';

const CarpoolList1 = () => {
    return (
        <Wrapped>
            <MapView
            style={{ flex: 1 }}
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 19.2068505,
                longitude: 72.9528205,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}></MapView>
            <View style={{position: 'absolute',bottom: 0, marginBottom: 20}}>
                <ScrollView horizontal={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width}
                >
                <View style={{ flexDirection: 'row', borderWidth: 0, marginTop: 10, marginLeft: 10, marginRight: 10, height: 320, borderRadius: 10,backgroundColor: '#FFFFFF' }}>
                    <View>
                        <Avatar
                            size={55}
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            containerStyle={{ backgroundColor: '#ededed', marginLeft: 15, marginTop: 10 }}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 10, color: 'grey' }}>4 hours ago</Text>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5, }}>
                            <Icon
                                name='user'
                                type='antdesign'
                                size={15}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5
                                }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>Manjira Kanhere</Text>
                            <Icon
                                name='call'
                                type='ionicon'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 50
                                }}
                            />
                            <Icon
                                name='message'
                                type='entypo'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 40
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 1, marginLeft: 5, }}>
                            <Icon
                                name='star'
                                type='antdesign'
                                size={10}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5

                                }}
                            />
                            <Text style={{ fontSize: 13, fontWeight: '400', marginLeft: 3, marginTop: 1 }}>5.0</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 25,
                            marginLeft: -60,
                            borderWidth: 1,
                            width: 340,
                            borderRadius: 10,
                            borderColor:'#c3c3c3'
                        }}>
                            <View style={{
                                marginTop: 17,
                                marginLeft: 10,
                            }}>
                                <Image source={require('../../assets/image/startloc.png')}
                                    style={{
                                        marginLeft: 11
                                    }} />
                                <Image source={require('../../assets/image/connector.png')}
                                    style={{
                                        marginLeft: 17,
                                    }} />
                                <Image source={require('../../assets/image/endloc.png')} />
                            </View>
                            <View>
                                <TextInput
                                    placeholder='Select Address'
                                    style={{ width: 300, }}
                                />
                                <TextInput
                                    placeholder='Select Destination'
                                    style={{ width: 300, }}
                                />



                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -55, marginTop: 10 }}>09:15 AM</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 200, marginTop: 10 }}>₹150</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'grey', marginLeft: -55, marginTop: 5 }}>1 seat required</Text>
                        </View>
                        <View style={{ borderTopWidth: 0, marginLeft: -73, marginTop: 10, width: 371, flexDirection: 'row', backgroundColor: '#32cd32', height: 60, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                            <Text style={{ marginTop: 17, marginLeft: 10, color: 'white', fontSize: 15 }}>Cancel</Text>
                            <Text style={{ marginTop: 15, marginLeft: 90, color: 'white', fontSize: 20 }}>BOOKED</Text>
                            <Icon
                                name='running'
                                type='font-awesome-5'
                                size={20}
                                color='white'
                                containerStyle={{
                                    marginTop: 14,
                                    marginLeft: 100
                                }}
                            />
                        </View>
                    </View>




                </View>
                <View style={{ flexDirection: 'row', borderWidth: 0, marginTop: 10, marginLeft: 10, marginRight: 10, height: 320, borderRadius: 10,backgroundColor: '#FFFFFF' }}>
                    <View>
                        <Avatar
                            size={55}
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            containerStyle={{ backgroundColor: '#ededed', marginLeft: 15, marginTop: 10 }}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 10, color: 'grey' }}>4 hours ago</Text>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5, }}>
                            <Icon
                                name='user'
                                type='antdesign'
                                size={15}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5
                                }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>Manjira Kanhere</Text>
                            <Icon
                                name='call'
                                type='ionicon'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 50
                                }}
                            />
                            <Icon
                                name='message'
                                type='entypo'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 40
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 1, marginLeft: 5, }}>
                            <Icon
                                name='star'
                                type='antdesign'
                                size={10}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5

                                }}
                            />
                            <Text style={{ fontSize: 13, fontWeight: '400', marginLeft: 3, marginTop: 1 }}>5.0</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 25,
                            marginLeft: -60,
                            borderWidth: 1,
                            width: 340,
                            borderRadius: 10,
                            borderColor:'#c3c3c3'
                        }}>
                            <View style={{
                                marginTop: 17,
                                marginLeft: 10,
                            }}>
                                <Image source={require('../../assets/image/startloc.png')}
                                    style={{
                                        marginLeft: 11
                                    }} />
                                <Image source={require('../../assets/image/connector.png')}
                                    style={{
                                        marginLeft: 17,
                                    }} />
                                <Image source={require('../../assets/image/endloc.png')} />
                            </View>
                            <View>
                                <TextInput
                                    placeholder='Enter Address'
                                    style={{ width: 300, }}
                                />
                                <TextInput
                                    placeholder='Enter Destination'
                                    style={{ width: 300, }}
                                />



                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -55, marginTop: 10 }}>09:15 AM</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 200, marginTop: 10 }}>₹150</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'grey', marginLeft: -55, marginTop: 5 }}>1 seat required</Text>
                        </View>
                        <View style={{ borderTopWidth: 0, marginLeft: -73, marginTop: 10, width: 371, flexDirection: 'row', backgroundColor: '#32cd32', height: 60, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                            <Text style={{ marginTop: 17, marginLeft: 10, color: 'white', fontSize: 15 }}>Cancel</Text>
                            <Text style={{ marginTop: 15, marginLeft: 90, color: 'white', fontSize: 20 }}>BOOKED</Text>
                            <Icon
                                name='running'
                                type='font-awesome-5'
                                size={20}
                                color='white'
                                containerStyle={{
                                    marginTop: 14,
                                    marginLeft: 100
                                }}
                            />
                        </View>
                    </View>




                </View>
                <View style={{ flexDirection: 'row', borderWidth: 0, marginTop: 10, marginLeft: 10, marginRight: 10, height: 320, borderRadius: 10,backgroundColor: '#FFFFFF' }}>
                    <View>
                        <Avatar
                            size={55}
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            containerStyle={{ backgroundColor: '#ededed', marginLeft: 15, marginTop: 10 }}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 10, color: 'grey' }}>4 hours ago</Text>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5, }}>
                            <Icon
                                name='user'
                                type='antdesign'
                                size={15}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5
                                }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>Manjira Kanhere</Text>
                            <Icon
                                name='call'
                                type='ionicon'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 50
                                }}
                            />
                            <Icon
                                name='message'
                                type='entypo'
                                size={20}
                                color='blue'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 40
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 1, marginLeft: 5, }}>
                            <Icon
                                name='star'
                                type='antdesign'
                                size={10}
                                color='grey'
                                containerStyle={{
                                    marginTop: 5

                                }}
                            />
                            <Text style={{ fontSize: 13, fontWeight: '400', marginLeft: 3, marginTop: 1 }}>5.0</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 25,
                            marginLeft: -60,
                            borderWidth: 1,
                            width: 340,
                            borderRadius: 10,
                            borderColor:'#c3c3c3'
                        }}>
                            <View style={{
                                marginTop: 17,
                                marginLeft: 10,
                            }}>
                                <Image source={require('../../assets/image/startloc.png')}
                                    style={{
                                        marginLeft: 11
                                    }} />
                                <Image source={require('../../assets/image/connector.png')}
                                    style={{
                                        marginLeft: 17,
                                    }} />
                                <Image source={require('../../assets/image/endloc.png')} />
                            </View>
                            <View>
                                <TextInput
                                    placeholder='Enter Address'
                                    style={{ width: 300, }}
                                />
                                <TextInput
                                    placeholder='Enter Destination'
                                    style={{ width: 300, }}
                                />



                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -55, marginTop: 10 }}>09:15 AM</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 200, marginTop: 10 }}>₹150</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'grey', marginLeft: -55, marginTop: 5 }}>1 seat required</Text>
                        </View>
                        <View style={{ borderTopWidth: 0, marginLeft: -73, marginTop: 10, width: 371, flexDirection: 'row', backgroundColor: '#32cd32', height: 60, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                            <Text style={{ marginTop: 17, marginLeft: 10, color: 'white', fontSize: 15 }}>Cancel</Text>
                            <Text style={{ marginTop: 15, marginLeft: 90, color: 'white', fontSize: 20 }}>BOOKED</Text>
                            <Icon
                                name='running'
                                type='font-awesome-5'
                                size={20}
                                color='white'
                                containerStyle={{
                                    marginTop: 14,
                                    marginLeft: 100
                                }}
                            />
                        </View>
                    </View>




                </View>
                </ScrollView>
            </View>
        </Wrapped>
        
        
    )
}

    export default CarpoolList1
