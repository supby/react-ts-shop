import React, { Component } from 'react';
import ItemsList from './ItemsList'
import { match } from 'react-router';
import { Item } from '../store/items/types';
import { ApplicationState } from '../store/index';
import { connect } from 'react-redux';
import { actionCreators } from '../store/items/actions';

interface ItemsListProps {
  items: Item[];
  isLoading: boolean;
  requestItems: (page: number) => any;
}

interface RouteProps {
  match?: match<{ page: string }>;
}

class Home extends Component<ItemsListProps & RouteProps> {
  componentDidMount() {
    this.props.requestItems(this.props.match ? +this.props.match.params.page : 0);
  }

  render() {
    return (
      <ItemsList items={this.props.items} isLoading={this.props.isLoading} />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    items: state.itemsList.items,
    isLoading: state.itemsList.isLoading
  }
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);