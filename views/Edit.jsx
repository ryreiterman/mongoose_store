const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Form = require('./components/Form')

class Edit extends React.Component {
    render() {
        return (
            <AppLayout title={`Edit ${this.props.album.name.toUpperCase()} Page`}>

            <div className="nav-text-link">
                <a href={`/albums/${this.props.album._id}`}>Back to Album Show Page</a>
            </div>

            <Form
             endpoint={`/albums/${this.props.album._id}?_method=PUT`}
             buttonText={`Edit ${this.props.album.name}`}
             album={this.props.album}
            />
            
        </AppLayout>)
    }
}
module.exports = Edit;