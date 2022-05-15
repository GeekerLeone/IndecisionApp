class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount(){
        try{

            const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        
        if(options){
            this.setState(() => ({options}));
        }
        } catch(e){

        }
        
    }

    componentDidUpdate(preProps, preState){
        if(preState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUpdate")
    }

    handleDeleteOptions(){
        this.setState(() => ({options: [] }));
        // this.setState(() =>{
        //     return{
        //         options: []
        //     }
        // })
    }

    handleDeleteOption(optionToRemove){
        this.setState((pre) => ({
            options: pre.options.filter((option) => optionToRemove != option  )
            // options: pre.options.filter((option) => {
            //     return optionToRemove != option;
            // })
        }))
        
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item.";
        }else if(this.state.options.indexOf(option) > -1){
            return "This option already exists."
        }
        this.setState((pre) => ({options: pre.options.concat([option])}))
        // this.setState((pre) =>{
        //     return{
        //         options: pre.options.concat([option])
        //     }
        // })
    }
    render(){
        
        const subtitle= "Put your life in the hands of a computer";
        return(
            <div>
            <Header  subtitle = {subtitle} />
            <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}/>
            <Options 
                handleDeleteOptions ={this.handleDeleteOptions}
                handleAddOption = {this.handleDeleteOption}
                options = {this.state.options}/>
            <Addoption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
    )
}
// IndecisionApp.defaultProps = {
//     options: []
// }
Header.defaultProps = {
    title: "Indecision"
}

// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         ) 
//     }
// }

const Action = (props) =>{
    return(
        <div>
                <button 
                    onClick = {props.handlePick}
                    disabled = {!props.hasOptions}
                >What should I do?</button>
            </div>
    )
}

// class Action extends React.Component{
    
//     render(){
//         return(
//             <div>
//                 <button 
//                     onClick = {this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 >What should I do?</button>
//             </div>
//         );
//     }
// }

class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = " ";
        }
        // this.setState(() =>{ 
        //     return {error}
        //     })
        }

    render(){
        
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.onFormSubmit}>
            <input text="text" name="option"></input>
            <button>Add option</button>
            </form>
            </div>
        );
    }
} 

const Options = (props) =>{
    return(
        <div>
                <p>You have {props.options.length} options!</p>
                <ol>
                {
                    props.options.map((option) => (
                        <Option 
                        key={option} 
                        optionText = {option}
                        handleAddOption={props.handleAddOption}
                        />
                    ))
                }
                </ol>
                <button onClick = {props.handleDeleteOptions}>RemoveAll</button>
            </div>
    )
}

// class Options extends React.Component{
    
//     render(){
//         return(
//             <div>
//                 <p>You have {this.props.options.length} options!</p>
//                 <ol>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText = {option}/>)
//                 }
//                 </ol>
//                 <button onClick = {this.props.handleDeleteOptions}>RemoveAll</button>
//             </div>
//         );
//     }
// }

const Option = (props) =>{
    return(
        <div>
            Option: {props.optionText}
            <button 
            onClick={(e) => {
                props.handleAddOption(props.optionText);
            }}
            >
            remove
            </button>
            </div>
    )
}

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             Option: {this.props.optionText}
//             </div>

//         )
//     }
// }

const user = (props) =>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}



ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));