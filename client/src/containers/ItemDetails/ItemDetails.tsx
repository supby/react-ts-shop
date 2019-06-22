import React, { PureComponent } from 'react';
import { ApplicationState } from "../../store";
import { connect } from 'react-redux';
import { actionCreators } from '../../store/itemdetails/actions';
import Loading from "../../components/Loading/Loading";

interface ItemDetailsProps {
  isLoading: boolean;
}
class ItemDetails extends PureComponent<ItemDetailsProps> {
  render() {
    return (
      <Loading isLoading={this.props.isLoading}>
        Items details
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