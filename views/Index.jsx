const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Button = require('./components/Button');

class Index extends React.Component {
  render() {

    //   const words = ['Hello', 'Goodbye', 'You Say Yes', 'I Say No'];

    return (
        <AppLayout title={`Ryan's Vinyl Store`} pageClass={'index'}>
            <div className="nav-text-link">
                <a href="/albums/new">Add New Album</a>
            </div>

            <div className="grid">
                { 
                    this.props.albums.map((album, i) => {
                        return (
                            <div className="grid">
                                <div className="grid-items">
                                <span key={i}></span>
                                <a href={`/albums/${album._id}`}> <img src={album.img} alt="Album Cover"/></a> <br />
                                <a href={`/albums/${album._id}`}>{album.artist}</a> <br />
                                <a href={`/albums/${album._id}`}>{album.name}</a> <br />
                                <a href={`/albums/${album._id}/edit`}>Edit Album</a> <br />
                                <Button endpoint={`/albums/${album._id}?_method=DELETE`} name={album.name} value="Delete"/>
                                </div>
                            </div>
                            
                            )
                        })   
                }
            </div>
        </AppLayout> );
  }
}

module.exports = Index;