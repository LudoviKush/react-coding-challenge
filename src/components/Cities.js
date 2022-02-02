import React from 'react';
import { connect } from 'react-redux';

class Cities extends React.Component {

  api_endpoint = process.env.REACT_APP_CITIES_ENDPOINT

    constructor(){
        super()
        this.state = {
            cities: [],
            country: 'Romania'
        }
    }
  
    componentDidMount() {
      const country = this.state.country

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country })
        };
        fetch(this.api_endpoint, requestOptions)
            .then((res) => res.json())
            .then((data) => {
            this.setState({cities: data.data});
        });
    }

    
  render() {
    const { cities } = this.state;
    //console.log(cities, 'cities')
    //console.log(cities.sort(), 'sorted') 
    
    return (
      <div className='center-list'>
      <h4>Cities of the Country: {this.state.country}</h4>
      {
        cities.map((city) => (
        <li key={city}> {city} </li>
        ))
      }
    {/* {cities.filter(name => name.includes('C')).map(filteredName => ( //array manipulation filter only containg C in its name
      <li key={filteredName}>
        {filteredName}
      </li>
    ))} */}
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
	return {
	  posts: state.PostReducers.posts,
	  page: state.PostReducers.page,
	  searchResults: state.PostReducers.searchResults,
	  country: state.PostReducers.country
	  }
	}
  
	export default connect(mapStateToProps)(Cities)