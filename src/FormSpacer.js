'use strict';
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';

class FormSpacer extends Component {
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
    }

    render() {
        return (
            <Text style={[styles.formInput, {borderWidth: 0, flex: this.props.weight || 0}]}></Text>
        );
    }
}

const styles = StyleSheet.create({
    formInput: {
        
    }
});


export default FormSpacer;
