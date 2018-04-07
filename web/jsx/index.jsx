class Test extends React.Component{


    render () {

        const PLACES = [
            { name: "Palo Alto", zip: "94303" },
            { name: "San Jose", zip: "94088" },
            { name: "Santa Cruz", zip: "95062" },
            { name: "Honolulu", zip: "96803" }
        ];
        return <div><pre>{JSON.stringify(PLACES, null, 2) }</pre></div>;
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