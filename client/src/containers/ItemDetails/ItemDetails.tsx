import { PureComponent } from "react";
import { ApplicationState } from "../../store";
import { connect } from 'react-redux';
import { actionCreators } from '../../store/itemdetails/actions';

interface ItemDetailsProps {

}
class ItemDetails extends PureComponent<ItemDetailsProps> {
  render() {
    return (<div>Item details</div>) 
  }
}

const mapStateToProps = (state: ApplicationState) => {
    return { ...state.itemDetails }
  };
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(ItemDetails);