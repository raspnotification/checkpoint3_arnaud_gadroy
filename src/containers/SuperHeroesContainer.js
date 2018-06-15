import React, { Component } from "react";
import { connect } from "react-redux";
import { makeSuperHeroesReceived } from "../actions/actions";

const mapStateToProps = state => ({
  superHeroes: state.superHeroes
});

const mapDispatchToProps = dispatch => ({
  onSuperHeroesReceived: response => dispatch(makeSuperHeroesReceived(response))
});

class PrestationWrap extends Component {
  render() {
    return <div>Hello</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrestationWrap);
