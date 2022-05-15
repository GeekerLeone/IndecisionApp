class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleVisibility(){
        this.setState((pre) =>{
            return {
                visibility : !pre.visibility
            }
        })
        
    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
            {this.state.visibility? "Hide details" : "show details"}
            </button>
            {this.state.visibility && (
                <div>
                <p>Hey, There are some details you can now see!</p>
                </div>
            )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));


// let visibility = false;

// const toggleVisibility = () =>{
//     visibility = !visibility;
//     render();
// };

// const render = () =>{
//     const jxs = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? "Hide details" : "show details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, this is details.</p>
//                 </div>

//             )}
//         </div>
//     )
// }