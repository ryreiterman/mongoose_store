const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Button = require('./components/Button');

class Show extends React.Component {
   
    render(){

        return (
            
            <AppLayout title={`${this.props.album.name.toUpperCase()}`} pageClass={'show'}>

                <div className="nav-text-link">
                    <a href={`/albums/${this.props.album._id}/edit`}>Edit Album Info</a><br/>
                        <a href={'/albums'}>Return Home</a>
                </div>
                
                <div className="show__container">
                    <div className="show__items">
                        <img src={ this.props.album.img } alt="Album Cover"/> <br />
                        Artist: { this.props.album.artist } <br />
                        Album Name: { this.props.album.name } <br />
                        Description: { this.props.album.description } <br />
                        Price: ${ this.props.album.price } <br />
                        Quantity: { this.props.album.qty } <br />

                        <div className='btn-container'>
                            {
                                this.props.album.qty > 0 ? 
                                <Button endpoint={`/albums/${this.props.album._id}/buy?_method=PUT`} value={`Buy $${this.props.album.price}`} className="button"/> :
                                <div className="albumStore__outOfStock">Out of Stock</div>
                            }

                            <Button endpoint={`/albums/${this.props.album._id}?_method=DELETE`} name={this.props.album.name} value="Delete" className="button"/>
                            </div>
                
                        
                    </div>
                </div>

            </AppLayout>
        )
    }
}
module.exports = Show;

// Looping over ONE object to display