import { Component} from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';
class CardList extends Component{
    render(){
        console.log("render from CardList");
        console.log(this.props.monsters)
        const {monsters} = this.props
        console.log(monsters)
        return <div className='card-list'>
            {monsters.map(monster=> {
                const {id} = monster
                return <Card monster={monster} imgSrc={`https://www.robohash.org/${id}?set=set2&size=180x180`}/>
            }    
    )}
        </div>
    }
}
export default CardList;