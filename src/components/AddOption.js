import React from "react";

export default class Addoption extends React.Component{
    state = {
        error: undefined
    };

    onFormSubmit = (e) => {
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
        };

    render(){
        
        return(
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit = {this.onFormSubmit}>
            <input className="add-option__input" text="text" name="option"></input>
            <button className="button">Add option</button>
            </form>
            </div>
        );
    }
} 