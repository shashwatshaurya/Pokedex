import React, { Component } from 'react';
import { connect } from 'react-redux';
//import store from '../redux/store';

class Card extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        console.log(this.props);
        if(this.props.isError)
            return ( <h3>Oops! Something went wrong.</h3> )
        else
        {
            return (
                <div>
                    {this.props.pokemon}<br/>
                    {this.props.description}<br/>
                    {this.props.pokemonType}<br/>
                    <img src={this.props.pic} alt="Pokemon" />
                </div>
            );
        }
    }
};

const mapStateToProps = state => {
    console.log(state);
    return { 
        pokemon: state.getData.pkName,
        description: state.getData.desc,
        pokemonType: state.getData.type,
        pic: state.getData.pLink,
        isError: state.getData.error };
}

export default connect(mapStateToProps)(Card);