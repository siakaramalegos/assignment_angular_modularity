import React from 'react'
import { connect } from 'react-redux'
import { fetchPuppies } from '../actions'
import PuppyList from '../components/PuppyList'

class PuppiesContainer extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPuppies())
  }

  render() {
    const { puppies, isFetching, lastUpdated } = this.props
    return (
      <div id="puppies-container">
        <PuppyList puppies={puppies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.puppies.items)
  return {
    puppies: state.puppies.items
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
