class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }

    componentDidMount() {
        //For our first load.
        this.UserList(this.props.group); //maybe something like "groupOne"
    }

    componentWillReceiveProps(nextProps) {

        // Assuming parameter comes from url.
        // let group = window.location.toString().split("/")[*indexParameterLocated*];
        // this.UserList(group);

        // Assuming parameter comes from props that from parent component.
        let group = nextProps.group; // Maybe something like "groupTwo"
        this.UserList(group);

    }

    UserList(group) {
        $.getJSON('http://rest1/test?token=admin/' + group)
            .then(({ results }) => this.setState({ person: results }));
    }

    render() {
        const persons = this.state.person.map((item, i) => (
        <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
        </div>
    ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ persons }</div>
            </div>
    );
    }

}

ReactDOM.render(React.createElement(Test, null), document.getElementById("menu"));

// class IconButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isCardView: false,
//         }
//     }
//
//     render() {
//         return (
//             <a className="btn btn-primary" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
//                 { this.state.isCardView
//                     ? <span className="glyphicon glyphicon-remove-sign" />
//                     : <span className="glyphicon glyphicon-ok-sign" />
//                 }
//                 &nbsp;&nbsp;BUTTON
//             </a>
//         );
//     }
//
// }
//
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <IconButton />
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App/>,document.getElementById('root'));
