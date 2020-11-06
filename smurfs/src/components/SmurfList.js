import React from 'react'
import { connect } from "react-redux";

const SmurfList =() => {
    return (
        <div>
            <h1>blank</h1>

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

export default connect(mapStateToProps, {  })(SmurfList)