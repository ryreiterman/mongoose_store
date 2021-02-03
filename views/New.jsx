const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Form = require('./components/Form')

class New extends React.Component {
  render() {
    return (
        <AppLayout title={'Add New Album'}>
            <div className="nav-text-link">
              <a href={'/albums'}>Return Home</a>
            </div>

            <Form 
              endpoint={"/albums"}
              buttonText={'Add a New Album'}

            
            />
        </AppLayout>
        );
  }
}

module.exports = New;


// <form action="/fruits" method="POST"> 
// form will submit to /fruits, make a Post request
// name values are keys for req.body ... req.body.color, etc 