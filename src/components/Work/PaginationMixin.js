import split from '../../utils/split';
import _data from './data';

// Limit per page
var _limit = 5;
var _splitted = split(_data, _data.length % _limit);

export default {
  getInitialState() {
    return { data: [], page: 0, /* next, previous, isLoading */ };
  },

  /**
   * Trigger pagination callback on initial load
   * to fill our state wil data
   */
  componentDidMount() { this._paginate(); },

  /**
   * Our pagination callback. Paginates only
   * to the next page
   */
  _paginate() {
    // Enable `isLoading` flag to enable all
    // loaders, and disable stuff
    this.setState({ isLoading: true });

    var {data, page} = this.state;
    var next = page + 1;
    var previous = page - 1;

    _splitted[next].forEach( item => data.push(item) );

    // Update the data, increase the page count, and load!
    this.setState({ data, next: next + 1, previous: page, page: next, isLoading: false });
  }
}