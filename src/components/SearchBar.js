import React from "react";


class SearchBar extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.onFormSubmit=this.onFormSubmit.bind(this);
    // }
    state={term:''}

    onInputClick(event){
        console.log('Input is clicked')
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={(e)=>this.setState({term : e.target.value})} 
                        onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;