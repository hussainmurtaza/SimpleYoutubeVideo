import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{

    state = {
        input: ''
    }

    changeOnInput = (event) => {
        this.setState({input: event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.input);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.input} onChange={this.changeOnInput}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;