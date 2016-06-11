'use strict';
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

class FormNumber extends Component {
    propTypes:{
        // optionalArray: PropTypes.array,
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

    render() {
        return (
            <TextInput
                keyboardType="numeric"
                style={[this.props.style, {flex: this.props.weight || 1}]}
                placeholder={this.props.name}
                onBlur={(event) => {}}
                onChangeText={(text) => {if (this.props.listener) {this.props.listener(text, this.props.reference)}}}
                defaultValue={this.props.value}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


module.exports = FormNumber;
