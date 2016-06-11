'use strict';
import React, {Component, PropTypes} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Spacer from './FormSpacer';
import {FormText, FormNumber} from './formentrytypes';

class Form extends Component {
    propTypes:{
        fields: PropTypes.array.isRequired
        // optionalBool: PropTypes.bool,
        // optionalFunc: PropTypes.func,
        // optionalNumber: PropTypes.number,
        // optionalObject: PropTypes.object,
        // optionalString: PropTypes.string,
        // requiredFunc: PropTypes.func.isRequired,
        }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this._setAddressState(this.props);
    }

    componentWillUnmount() {
        this.setState({
            reference: {}
        })
    }

    componentWillReceiveProps(props) {
        this._setAddressState(props)
    }

    _setAddressState(props) {
        this.setState({
            reference: props.reference ? props.reference : {}
        });
    }

    _onUpdate(text, name) {
        let s = {
            ...this.state
        };
        s.reference[`${name}`] = text;
        this.setState(s);
    }

    _renderForm(formInputs) {
        // TODO Replace with proper bind
        let self = this;

        function getInputComponent(input, row, col = '') {
            switch (input.type) {
                case 'spacer':
                    return <Spacer key={`${row}${col}`} weight={input.weight || 0}/>;
                case 'text':
                    return <FormText key={`${row}${col}`}
                                     name={input.name}
                                     weight={input.weight}
                                     style={styles.formInput}
                                     value={self.props.reference[input.reference]}
                                     reference={input.reference}
                                     listener={self._onUpdate.bind(self)}/>;
                case 'number':
                    return <FormNumber key={`${row}${col}`}
                                       name={input.name}
                                       weight={input.weight}
                                       style={styles.formInput}
                                       value={self.props.reference[input.reference]}
                                       reference={input.reference}
                                       listener={self._onUpdate.bind(self)}/>;
                case 'email':
                    return <TextInput key={`${row}${col}`} style={[styles.formInput, {flex: input.weight || 1}]}
                                      placeholder={input.name} keyboardType="email" onChangeText={(text) => {
                                          let s = {
                                          ...self.state
                                          };
                                          s[`${input.name}`] = text;
                                          console.log(s);
                                          self.setState(s);
                                      }}/>;
                case 'phone':
                    return <TextInput
                        key={`${row}${col}`}
                        style={[styles.formInput, {flex: input.weight || 1}]}
                        placeholder={input.name}
                        keyboardType="phone-pad"
                        onChangeText={(text) => {
                            let s = {...self.state};
                            s[`${input.name}`] = text;
                            self.setState(s);}}/>;

                default:
                    return <TextInput
                        key={`${row}${col}`}
                        style={[styles.formInput, {flex: input.weight || 1}]}
                        placeholder={input.name}
                        keyboardType="phone-pad"
                        onChangeText={(text) => {
                            let s = {...self.state};
                            s[`${input.name}`] = text;
                            console.log(s);
                            self.setState(s);}}/>;
            }
        };

        return formInputs.map((row, index) => {
            let tmp;
            if (row instanceof Array) {
                tmp = row.map((input, colIndex) => {
                    return getInputComponent(input, index, colIndex);
                });
            } else {
                tmp = getInputComponent(row, index);
            }
            return <View key={index} style={styles.formRow}>{tmp}</View>;
        });
    }

    render() {
        let self = this;
        let contentFn = () => this._renderForm(this.props.fields);
        let content = contentFn();
        let formId = this.state.reference._id ? this.state.reference._id : 'New Contact';
        return (
            <View>
                <Text style={styles.formTitle}>{formId}</Text>
                {content}
                <TouchableOpacity onPress={() => {
                    this.props.onSubmit(self.state);
                }}>
                    <Text
                        style={[styles.submitButton, this.props.submitButtonStyle]}>{this.props.submitButtonText || 'Submit'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    formTitle: {
        fontSize: 18,
        textAlign: 'center'
    },
    formRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        flexWrap: 'wrap'
    },
    formInput: {
        // fontSize: 18,
        flex: 1,
        height: 30,
        margin: 5,
        padding: 5,
        // backgroundColor: '#DDD',
        borderColor: '#DDD',
        borderWidth: 2
    },
    submitButton: {
        flex: 1,
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#426CAF',
        color: '#FFF'
    }
});


export default Form;
