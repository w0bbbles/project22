var React = require("react");

class Home extends React.Component {
  render(){
    console.log(this.props.events)
  let eventArray = this.props.events.map(events => {

        let dt = new Date(events.start_date)
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        var start_date = dt.getDate( )+' '+months[dt.getMonth( )] + ' ' +dt.getFullYear( );

        let banana = '/event/'+ events.id;
    return(

            <tr>
                <td><a href = {banana}>{events.name}</a></td>
                <td>{start_date}</td>
                <td>{events.location}</td>
                <td><a href={events.url}> link </a></td>
                <td width="40%">{events.description}</td>
            </tr>

        )
    });

var navButtons;

    if( this.props.loggedIn === true ){
        navButtons = (
            <React.Fragment>
                <a className="nav-item nav-link" href="/create">Create Event<span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/logout">Log Out</a>
            </React.Fragment>
    );

    }else{

        navButtons = (
            <React.Fragment>
                <a className="nav-item nav-link" href="/register/new">Register</a>
                <a className="nav-item nav-link" href="/login/new">Log In</a>
            </React.Fragment>
        );
    }

    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel={"stylesheet"} href={`/style.css`} />
        </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">EVENTion</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {navButtons}
                        </div>
                    </div>
                </nav>
              <h1>What's Happening!</h1>
                <table class="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Location</th>
                          <th scope="col">Website</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>

                    {eventArray}

                </table>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </body>
        </html>
        )
    }
};

module.exports = Home;