import split from '../../utils/split';
import _data from './data';

// Limit per page
var _limit = 5;
var _count = _data.length % _limit; // Page count
var _splitted = split(_data, _count); // Split to n count

console.log(_splitted);

export default {
  getInitialState() {
    return { data: [], page: 0 /* next, previous, isLoading */ };
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
    this.setState({ isLoading: true }, () => {
      var {data, page} = this.state;

      _splitted[++page-1].forEach( item => { data.push(item); });
      console.log(data);

      // Update the data, increase the page count, and load!
      this.setState({ data, page, isLoading: false, isDisabled: page == _count });
    });
  }
}