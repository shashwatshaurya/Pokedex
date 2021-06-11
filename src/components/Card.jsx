import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';
//import store from '../redux/store';

class Card extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        //console.log(this.props);
        if(this.props.isError)
            return ( <div className="cardContent"><h3>Oops! Something went wrong.</h3></div> )
        else if(this.props.pokemon==='')
        {
            return ( <div className='cardContent'></div> );
        }
        else
        {
            //const color = this.props.color;
            const pokemonType = this.props.pokemonType.map(type => { return <div className={type+" type"} key={type}>{type}</div> });
            return (
                <div className="cardContent">
                    <div className="genInfo">
                        <div className="pokeId">#{this.props.pokedexEntry}</div>
                        <div className="types">{pokemonType}</div>
                    </div>
                    <div className="statInfo">
                        <div className="col-1"><img id='pokemonImage' src={this.props.pic} alt="Pokemon" /></div>
                        <div className="col-2">
                            <div className="pokemonName">{this.props.pokemon[0].toUpperCase()+this.props.pokemon.slice(1)}</div>
                            <div className="statItem">HP</div>
                            <div className="statItem">Attack</div>
                            <div className="statItem">Defence</div>
                            <div className="statItem">Special Attack</div>
                            <div className="statItem">Special Defence</div>
                            <div className="statItem">Speed</div>
                        </div>
                        <div className="progressBars col-3">
                            <div className="empty"></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.hp)+'%' }}>{Math.round((100/255)*this.props.stats.hp)+'%'}</div></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.attack)+'%'}}>{Math.round((100/255)*this.props.stats.attack)+'%'}</div></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.defence)+'%'}}>{Math.round((100/255)*this.props.stats.defence)+'%'}</div></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.specialAttack)+'%'}}>{Math.round((100/255)*this.props.stats.specialAttack)+'%'}</div></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.specialDefence)+'%'}}>{Math.round((100/255)*this.props.stats.specialDefence)+'%'}</div></div>
                            <div className="progressBar" ><div className={"progressDone "+this.props.pokemonType[0]} style={{width: Math.round((100/255)*this.props.stats.speed)+'%'}}>{Math.round((100/255)*this.props.stats.speed)+'%'}</div></div>
                        </div>
                    </div>
                    <div className="description">{this.props.description}</div>
                    <div className="profileInfo">
                        <div className="profile">Profile</div>
                        <div className="profileItems">
                            <div className="leftProfileItems">
                                <div className="profileItemLabels">
                                    <div className="profileItemLabel">Height:</div>
                                    <div className="profileItemLabel">Weight:</div>
                                    <div className="profileItemLabel">Abilities:</div>
                                    <div className="profileItemLabel">Catch Rate:</div>
                                </div>
                                <div className="profileItemValues">
                                    <div className="profileItemValue">{(this.props.height*0.1).toFixed(2)} m</div>
                                    <div className="profileItemValue">{this.props.weight*0.1} kg</div>
                                    <div className="profileItemValue">{this.props.abilities.join(', ')}</div>
                                    <div className="profileItemValue">{Math.round((100/255)*this.props.catchRate)} %</div>
                                </div>
                            </div>
                            <div className="rightProfileItems">
                            <div className="profileItemLabels">
                                    <div className="profileItemLabel">Gender Ratio:</div>
                                    <div className="profileItemLabel">Egg Groups:</div>
                                    <div className="profileItemLabel">Hatch Steps:</div>
                                    <div className="profileItemLabel">Habitat:</div>
                                </div>
                                <div className="profileItemValues">
                                    <div className="profileItemValue">{this.props.femaleRate>0?
                                        <div className="progressBar">
                                            <div className="progressDone" style={{display:'inline-flex',justifyContent:'center',backgroundColor:'#0055A4', width: 12.5*this.props.femaleRate+'%' }}>F</div>
                                            <div className="progressDone" style={{display: 'inline-flex', justifyContent:'center', borderRadius: '0px', borderTopRightRadius:'4px', borderBottomRightRadius: '4px',backgroundColor:'#D81525', width: 12.5*(8-this.props.femaleRate)+'%' }}>M</div>
                                        </div>
                                        : 'Gender Less'}
                                    </div>
                                    <div className="profileItemValue">{this.props.eggGroups.join(', ')}</div>
                                    <div className="profileItemValue">{255*(this.props.hatchSteps+1)}</div>
                                    <div className="profileItemValue">{this.props.habitat}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dataFrom">Data from <a href='https://pokeapi.co/' target='_blank' rel='noreferrer nofollow'>PokeApi.in</a></div>
                </div>
            );
        }
    }
};

const mapStateToProps = state => {
    //console.log(state);
    return { 
        pokemon: state.getData.pkName,
        description: state.getData.desc,
        pokemonType: state.getData.type,
        pic: state.getData.pLink,
        isError: state.getData.error,
        stats: state.getData.stats,
        height: state.getData.height,
        weight: state.getData.weight,
        pokedexEntry: state.getData.dexNum,
        abilities: state.getData.abilities,
        catchRate: state.getData.catchRate,
        femaleRate: state.getData.femaleRate,
        hatchSteps: state.getData.hatchSteps,
        eggGroups: state.getData.eggGroups,
        habitat: state.getData.habitat,
        color: state.getData.color     
    };
}

export default connect(mapStateToProps)(Card);