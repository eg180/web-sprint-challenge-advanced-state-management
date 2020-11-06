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
            {props.isLoading ? <p> Loading data...</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            <h3>Smurfs: {props.smurfData.map((smurf) => {
                return (<h2>{smurf.name}</h2>)
            })}</h3>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      smurfData: state.smurfData,
      error: state.error
    }
  }

export default connect(mapStateToProps, { fetchData })(SmurfList)