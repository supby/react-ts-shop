import React, { Component, Fragment } from 'react';
import ItemsList from './ItemsList'
import { match, RouteComponentProps } from 'react-router';
import { Item } from '../store/items/types';
import { ApplicationState } from '../store/index';
import { connect } from 'react-redux';
import { actionCreators } from '../store/items/actions';
import { Pagination, Icon } from 'semantic-ui-react';

interface ItemsListProps {
  items: Item[];
  isLoading: boolean;
  requestItems: (page: number) => any;
}

interface RouteProps {
  page: string;
}

class Home extends Component<ItemsListProps & RouteComponentProps<RouteProps>> {
  componentDidMount() {
    this.props.requestItems(this.props.match ? +this.props.match.params.page : 0);
  }

  onPageChange = (e, data) => {
    this.props.history.push(`${data.activePage}`);
    this.props.requestItems(+data.activePage)
  }

  render() {
    return (
      <Fragment>
        <ItemsList items={this.props.items} isLoading={this.props.isLoading} />
        <Pagination
          defaultActivePage={5}
          ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
          firstItem={{ content: <Icon name='angle double left' />, icon: true }}
          lastItem={{ content: <Icon name='angle double right' />, icon: true }}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={10}
          onPageChange={this.onPageChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { ...state.itemsList }
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);