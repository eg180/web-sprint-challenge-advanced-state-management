import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchData } from "../store/actions"

const SmurfList =(props) => {
    
    useEffect(() => {
        props.fetchData()
    }, []);

    return (
        <div>
            <h2>data will go here</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      covidData: state.covidData,
      error: state.error
    }
  }

export default connect(mapStateToProps, { fetchData })(SmurfList)