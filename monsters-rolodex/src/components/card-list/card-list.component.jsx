import {Component} from 'react';

class CardList extends Component {
    render() {
        // when you return a component make sure there's only one
        // top level component

        // you can access any props that you pass to this component using this.props
        const {monsters} = this.props;
        return (
            <div>
                {monsters.map((monster) => (
                   <h1 key={monster.id}>{monster.name}</h1> 
                ))}
            </div>
        )
    }
}

export default CardList