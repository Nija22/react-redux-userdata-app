import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/searchAction.js';

class Search extends React.Component {
    render() {
        const { search, value } = this.props;
        return (
            <div>
                <i /> Search for user data<br />
                <form id="searchForm">
                    <input
                        type="text"
                        name="searchText"
                        placeholder="Search"
                        onChange={(e) => search(e.target.value)}
                        value={value} />
                </form>
            </div>
        );
    }
}
function mapStateToProps(data) {
    return { value: data.value, userdata: data.contents };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
