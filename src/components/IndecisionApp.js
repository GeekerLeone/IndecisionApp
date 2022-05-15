import React from "react";
import Addoption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";

console.log("app.js is running.");

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    

    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }));
        
    };
    handleClearSelectedOption = () =>{
        this.setState(() => ({selectedOption: undefined}))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((pre) => ({
            options: pre.options.filter((option) => optionToRemove != option  )
            
        }))
        
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option){
            return "Enter valid value to add item.";
        }else if(this.state.options.indexOf(option) > -1){
            return "This option already exists."
        }
        this.setState((pre) => ({options: pre.options.concat([option])}))
        
    };

    componentDidMount(){
        try{

            const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        
        if(options){
            this.setState(() => ({options}));
        }
        } catch(e){

        }
        
    };

    componentDidUpdate(preProps, preState){
        if(preState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    };

    componentWillUnmount(){
        console.log("componentWillUnmount")
    };

    render(){
        
        const subtitle= "Put your life in the hands of a computer";
        return(
            <div>
            <Header  subtitle = {subtitle} />
            <div className="container">
            <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}/>
                <div className="widget">
                <Options 
                handleDeleteOptions ={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                options = {this.state.options}/>
                <Addoption 
                handleAddOption = {this.handleAddOption}
                />
                </div>
            </div>
            <OptionModal
                selectedOption = {this.state.selectedOption}
                handleClearSelectedOption = {this.handleClearSelectedOption}
            />
            </div>
        )
    }
}