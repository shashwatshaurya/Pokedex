import React, {Component} from 'react';
//import store from '../redux/store';
import actions from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }

        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.boundActionCreators = bindActionCreators(actions, store.dispatch);
    }

    onButtonClick(e){
        e.preventDefault();
        //console.log(this.state.name);
        //actions.get(this.state.name);
        this.props.get(this.state.name);
    }

    handleChange(e){
        this.setState((state, props)=>{
            return {name: e.target.value}
        });
    }
    render(){
        return (
        <div>
            <form>
                <input type="text" name="pokemon" id="pokemon" value={this.state.name} onChange={this.handleChange} placeholder='Ye kaun sa pokemon hai?...'/>
                <button type='submit' onClick={this.onButtonClick}>Find Out</button>
            </form>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        get: (name)=>{
            dispatch(actions.get(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);