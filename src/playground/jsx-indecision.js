console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = " ";
        renderOptionApp();
    }
}

const onRemoveAll = () =>{
    app.options = [];
    renderOptionApp();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderOptionApp = () =>{
    var template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <p>You have {app.options.length} options!</p>
    <ol>
        {
            app.options.map((option) => <li key = {option}>option: {option}</li>)
        }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type = "text" name = "option"></input>
        <button>Add Option</button>
    </form>
    <button onClick={onRemoveAll}>remove all options</button>
    </div>
    );
    ReactDOM.render(template, appRoot);
}



var user = {
    name: "Liang",
    age: 26,
    location: "LA"
}

function getLocation(location){
    if(location){
        return <p>location: {location}</p>
    }
}

var templateTwo =(
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    
    
    
    </div>

)

var appRoot = document.getElementById('app');
renderOptionApp();