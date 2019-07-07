import React, { PureComponent } from 'react';
import { ApplicationState } from "../../store";
import { connect } from 'react-redux';
import { actionCreators } from '../../store/itemdetails/actions';
import Loading from "../../components/Loading/Loading";
import { Header } from 'semantic-ui-react';
import { ItemDetailsData } from '../../store/itemdetails/types';
import { RouteComponentProps } from 'react-router';

interface ItemDetailsProps {
  isLoading: boolean;
  data: ItemDetailsData;
  requestItemDetails: (id: number) => any;
}

interface ItemDetailsRouteProps {
  id: string;
}

class ItemDetails extends PureComponent<ItemDetailsProps & RouteComponentProps<ItemDetailsRouteProps>> {
  id = +(this.props.match.params.id);

  componentDidMount() {
    this.props.requestItemDetails(this.id);
  }

  render() {
    return (
      <Loading isLoading={this.props.isLoading}>
        <Header as='h1'>{this.props.data.name }</Header>
      </Loading>)
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { ...state.itemDetails }
};

export default connect(
  mapStateToProps,
  actionCreators
)(ItemDetails);