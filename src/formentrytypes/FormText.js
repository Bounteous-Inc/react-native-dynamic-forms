'use strict';
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

class FormText extends Component {
    propTypes:{
        listener: PropTypes.func,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        weight: PropTypes.number
        // optionalArray: PropTypes.array,
        // optionalBool: PropTypes.bool,
        // optionalNumber: PropTypes.number,
        // optionalObject: PropTypes.object,
        // optionalString: PropTypes.string,
        // requiredFunc: PropTypes.func.isRequired,
        }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TextInput
                keyboardType="default"
                style={[this.props.style, {flex: this.props.weight || 1}]}
                placeholder={this.props.name}
                onBlur={(event) => {}}
                onChangeText={
                (text) => {
                    if (this.props.listener) {
                        this.props.listener(text, this.props.reference)
                    }
                }}
                defaultValue={(this.props.value) ? this.props.value: ''}/>
        );
    }
}


module.exports = FormText;
