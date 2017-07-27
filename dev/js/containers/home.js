import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {populate} from '../actions/index.js';

class HomePage extends React.Component{
    render(){
        console.log(this.props.home.populated);

        return <div onClick={this.props.populate}>
                    Testing
               </div>;
    }
}

function mapStateToProps(state){
    return {
        home: state.home
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        populate: populate
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);