class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        const json = localStorage.getItem("count");
        const count = JSON.parseInt(json, 10);

        if(!isNaN(count)){
            this.setState(() => ({count}))
        }
    }

    componentDidUpdate(preProps, prevState){
        if(prevState.count != this.state.count){
            localStorage.setItem("count", this.state.count);
        }
    }
    handleAddOne(){
        this.setState((pre) =>{
            return{
                count: pre.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((pre) =>{
            return{
                count: pre.count - 1
            }
        })
    }
    handleReset(){
        this.setState((pre) =>{
            return{
                count: 0
            }
        })
    }

    render(){
        
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }
ReactDOM.render(<Counter/>, document.getElementById("app"));

// let count = 0;
// const addOne = () =>{
//     count++;
//     renderCounterApp();
// }

// const minusOne = () =>{
//     count--;
//     renderCounterApp();
// }

// const reset = () =>{
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () =>{
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateThree, appRoot);
// }

// var appRoot = document.getElementById('app');

// renderCounterApp();