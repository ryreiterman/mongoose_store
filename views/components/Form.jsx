const React = require('react');

class Form extends React.Component {
    render(){
        return (
          <div className="form-container">
            <form action={this.props.endpoint} method="POST">
            Artist: <input 
                    type="text" 
                    name="artist" 
                    value={this.props.album? this.props.album.artist : '' }
                  />
                  <br/>
            Album Name: <input 
                    type="text" 
                    name="name" 
                    value={this.props.album? this.props.album.name : '' }
                  />
                 <br/>
            Description: <input 
                    type="text" 
                    name="description" 
                    value={this.props.album? this.props.album.description : '' }
                  />
                <br/>
            Image: <input 
                    type="text" 
                    name="img" 
                    value={this.props.album? this.props.album.img : '' }
                  />
                <br/>
            Price: <input 
                    type="text" 
                    name="price" 
                    value={this.props.album? this.props.album.price : '' }
                  />
                <br/>
            Quantity: <input 
                    type="text" 
                    name="qty" 
                    value={this.props.album? this.props.album.qty : '' }
                  />
                <br/>
            <input type="submit" name="" value={this.props.buttonText} className="button-new"/>
         </form>
        </div>
        )
    }
}

module.exports = Form;