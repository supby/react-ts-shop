import React, { PureComponent } from 'react';
import ItemsList from '../../components/ItemList/ItemsList'
import { RouteComponentProps } from 'react-router';
import { Item } from '../../store/items/types';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/items/actions';
import { Pagination, Icon, Grid } from 'semantic-ui-react';
import { PAGE_SIZE } from '../../store/items/constants';
import Loading from '../../components/Loading/Loading';

interface ItemsListProps {
  items: Item[];
  isLoading: boolean;
  count: number;
  page: number;
  requestItems: (page: number) => any;
}

interface RouteProps {
  page: string;
}

class Home extends PureComponent<ItemsListProps & RouteComponentProps<RouteProps>> {
  page = +(this.props.match.params.page || 1);

  componentDidMount() {
    this.props.history.push(`${this.page}`);
    this.props.requestItems(this.page);
  }

  onPageChange = (e, data) => {
    this.props.history.push(`${data.activePage}`);
    this.props.requestItems(+data.activePage)
  }

  render() {
    return (
      <Loading isLoading={this.props.isLoading}>
        <Grid centered columns={1} >
          <Grid.Row centered>
            <Grid.Column>
              <ItemsList items={this.props.items} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Pagination
                defaultActivePage={this.page}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={Math.ceil(this.props.count / PAGE_SIZE)}
                pointing
                secondary
                onPageChange={this.onPageChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Loading>
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