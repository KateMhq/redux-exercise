import {connect} from 'react-redux';
import Search from '../components/Search';
import {handleQuery} from '../actions';

function mapStateToProps(state){
  return{
    query:state.searchReducer.query,
    results: state.results
  }
}

function mapDispatchToProps(dispatch){
    return {
      handleQuery: event => dispatch(handleQuery(event)),
      handleSubmit: () => dispatch(handleSubmit(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
