import React from 'react'
import { connect } from "react-redux";
import { fetchData } from "../store/actions";

const SmurfForm = (props) => {

    const printConsoleLog = (e) => {
        e.preventDefault();
        console.log('hey')
    }

    return (
        <div>
            <form>
                <input
                type="text"
                name="name"
                placeholder="name"
                />
                <input
                type="text"
                name="age"
                placeholder="age"
                />

                <input
                type="text"
                name="height"
                placeholder="height"
                />
                <button onClick={printConsoleLog}></button>
            </form>
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

export default connect(mapStateToProps, { fetchData })(SmurfForm)