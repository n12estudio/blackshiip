import React,{Component} from 'react';
import {connect} from 'react-redux';
import {SuccessStoriesA} from '../components/sections';

class SuccessStoriesACont extends Component {
  render(){
    const {...rest} = this.props
    return(
      <SuccessStoriesA {...rest}/>
    )
  }
}

export default connect(({storiesReducer})=>({
  ...storiesReducer
}),{

})(SuccessStoriesACont)
