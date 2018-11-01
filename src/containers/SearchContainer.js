import {connect} from 'react-redux';
import Search from '../components/Search';
import {handleQuery,handleSubmit, handleSelection} from '../actions';

function mapStateToProps(state){
  return{
    query:state.searchReducer.query,
    results: state.searchReducer.results,
    selection:  state.searchReducer.selection,
    err: state.searchReducer.message

  }
}

function mapDispatchToProps(dispatch){
    return {
      handleQuery: value => dispatch(handleQuery(value)),
      handleSelection: event => dispatch(handleSelection(event)),
      handleSubmit: (query,selection) => dispatch(handleSubmit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
