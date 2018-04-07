class Test extends React.Component{

    constructor(props) {
        super(props);

        this.state = {person: []};
    }

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        $.getJSON('http://rest1/test?token=admin')
            .then(({ results }) => this.setState({ name: results }));
    }

    render() {
        const persons = this.state.name.map((item, i) => (
            <div>
                <h1>{ item.name.first }</h1>
                <span>{ item.cell }, { item.id }</span>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ name }</div>
            </div>
        );
    }


}



ReactDOM.render(
    <Test/>,
    document.getElementById("menu")
);


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