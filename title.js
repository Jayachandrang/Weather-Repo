import React from 'react';
import '../title.css';
class Titles extends React.Component {
    render() {
    return (
        <div>
        <h1 className="title-container__title">Weather Repo </h1>
        <p className="title-container__subtitle"> Helps you find weather conditions in cities... </p>
        </div>
        )
    }
}
export default Titles;