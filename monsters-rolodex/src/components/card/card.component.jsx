import {Component} from 'react';
import './card.styles.css'

class Card extends Component {
    render(){
        //console.log(this.props.monster)
        const {name,email, id} = this.props.monster
        const imgSrc = this.props.imgSrc
                return <div className='card-container' key={id}>
                <img alt={`monster ${name}`} src={imgSrc}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    }
}
export default Card;