import { Alert, Button, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';
import { saveCustomerDetails } from '../api/customer';
import styles from '../styles';

class CustomerDetailScreen extends Component {
    static navigationOptions = {
        title: 'Customer Detail'
    };

    constructor(props) {
        super(props);
        this.state = { commentText: '', status:'' };
    }

    onSaveButtonPress = () => {
        const { settings, auth } = this.props;
        const accessToken = settings.useMockData ? null : auth.userInfo.idToken;  

        saveCustomerDetails(accessToken, auth.userInfo.userId, this.state.commentText, this.state.status).then(value =>
            Alert.alert(" ", value["message"])
        );
    }

    render() {
        const { account } = this.props.navigation.state.params;

        return (
            <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.labelStyle}>
                    Customer Name :
                </Text>  
                <Text style={styles.labelStyle}>
                    {account.name}
                </Text>   
            </View> 
             <View style={styles.innerContainer}>
                <Text style={styles.labelStyle}>
                    Status :
                </Text> 
                <ModalDropdown style={styles.modalDropDown} options={['Contacted', 'Cannot be reached']} onSelect={(index, value) => { 
                            console.log('***** index *******', index, '*******value *****', value)
                            this.setState({status: value}) 
                        }  
                    }
                 />
              </View> 
            <Text style={styles.labelStyle}>
                Comments :
            </Text> 
             <View style={styles.multilineContainer}>                    
                <TextInput style={styles.innerMultilineStyle}
                    placeholder='Enter your comments'
                    multiline={true}
                    editable={true}
                    onChangeText={(text) => this.setState({commentText: text})}
                    value={this.state.commentText} />
             </View>
            <View style={styles.buttonContainer}>
                     <Button title="Save" onPress={ () => this.onSaveButtonPress() } />
            </View>
        </View>
        );
    }
}

const mapStateToProps = ({ settings, auth }) => {
  return { settings, auth };
};

export default connect(mapStateToProps)(CustomerDetailScreen);