import { CSVLink, CSVDownload } from "react-csv";
import { connect } from 'react-redux';
import React from 'react'
import { Button } from 'reactstrap';

function ExportCSV(props) {

  return (
    <div>
        <CSVLink data={props.posts}><Button>Export as CSV</Button> </CSVLink>
        <CSVDownload data={props.posts} target="_blank" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts,
    page: state.PostReducer.page,
    searchResults: state.PostReducer.searchResults,
    countrySelected: state.PostReducer.countrySelected
    }
  }

  export default connect(mapStateToProps)(ExportCSV)
