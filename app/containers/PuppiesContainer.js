import React from 'react'
import { connect } from 'react-redux'
import { fetchPuppiesIfNeeded } from '../actions'
import PuppyList from '../components/PuppyList'

class PuppiesContainer extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPuppiesIfNeeded())
  }

  handleRefreshClick = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(fetchPuppiesIfNeeded())
  }

  render() {
    // TODO: refactor to simpler cases, add proptypes
    const { puppies, isFetching, lastUpdated } = this.props
    return (
      <div id="puppies-container">
        <h2>Our Puppies</h2>
        <p>
          {
            lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}
            </span>
          }
          <br />
          {
            !isFetching &&
            <a href="#" onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {
          isFetching && puppies.length === 0 &&
          <h4>Loading...</h4>
        }
        {
          !isFetching && puppies.length === 0 &&
          <h4>No posts!</h4>
        }
        {
          puppies.length > 0 &&
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <PuppyList puppies={puppies} />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    items: puppies,
    isFetching,
    lastUpdated
  } = state.puppies || {
    isFetching: true,
    items: []
  }
  return {
    puppies,
    isFetching,
    lastUpdated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps //,
  //mapDispatchToProps
)(PuppiesContainer)
