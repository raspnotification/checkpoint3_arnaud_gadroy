import React, { Component } from "react";
import { connect } from "react-redux";
import { makeSuperHeroesReceived } from "../actions/actions";
import CardModel from "../components/CardModel";
import { Row, Col } from "reactstrap";

const mapStateToProps = state => ({
  superHeroes: state.superheroes
});

const mapDispatchToProps = dispatch => ({
  select: response => dispatch(makeSuperHeroesReceived(response))
});

class SuperHeroesWrap extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          {this.props.superHeroes.map(superHero => (
            <Col md="4" key={superHero.name} className="text-center mb-3">
              <CardModel
                title={superHero.name}
                image={superHero.picture}
                description={superHero.status}
                select={this.props.select}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperHeroesWrap);
