import React, { Component } from 'react';
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/title";

// const api_key is used to fetch open weather map
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

 //getWeather is a method, used to make the api call
 getWeather = async (e) => {

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();   

  const api_caller = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  const weather_response = await api_caller.json();

  if(city && country){
    this.setState({
      temperature: weather_response.main.temp,
      city: weather_response.name,
      country: weather_response.sys.country,
      humidity: weather_response.main.humidity,
      description: weather_response.weather[0].description,
      error: ""
    })
  }else{
    this.setState({
      error: "Please input search values..."
    })
  }
}

  render() {
    return (
      <div>
      <div className="wrapper">
       <div className="main">
         <div className="container">
           <div className="row">
             <div className="col-xs-5 title-container">
             <Titles />
             </div>
             <div className="col-xs-7 form-container">
             <Form loadWeather={this.getWeather} />
               <Weather
                 temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
    );
  }
}

export default App;
