const React = require('react');

class AppLayout extends React.Component {
    render() {
        return(
     <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Roboto&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/css/main.css"/>
            
            <title>{this.props.title}</title>
        </head>
        <body>
            <header>
                <h1>{this.props.title}</h1>
            </header>
        {/* This is where our other components will be injected */}
            <div className={this.props.pageClass}>
                {this.props.children}
            </div>
        </body>
     </html>
        )
    }
}
module.exports = AppLayout;