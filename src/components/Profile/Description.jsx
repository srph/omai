import React from 'react/addons';
import {StyleResolverMixin, MatchMediaItem} from 'radium';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Description = React.createClass({
  mixins: [StyleResolverMixin, MatchMediaItem],

  propTypes: {
    /**
     * Flag for work (whether active)
     */
    active: React.PropTypes.bool.isRequired,

    /**
     * Handle setting of flag for work (normally to set it as true)
     */
    activationHandler: React.PropTypes.func.isRequired
  },

  render() {
    // Prop
    var {active, activationHandler} = this.props;

    var styles = {
      // The container div
      'box': {
        position: 'relative',
        marginTop: 35,
        marginLeft: 'auto',
        marginRight: 'auto',

        padding: '0px 10px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,

        lineHeight: '1.5',

        mediaQueries: [{
          sm: {
            width: '100%'
          }
        }]
      },

      // An `arrow-up` / caret makes the container div
      // look like a dialog box
      'box.caret': {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -8,
        marginLeft: 'auto',
        marginRight: 'auto',

        height: 0,
        width: 0,

        // borderColor: '#fff',
        // borderWidth: 1,
        // borderStyle: 'solid',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid #fff',
      },

      // Description text
      'box.text': { paddingTop: 20, paddingBottom: 20 },      

      // Description / `activator` separator
      'box.work-hr': {
      	marginTop: 0, marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',

        border: 0,
        opacity: 0.2,
        background: '#93a2a6',
        height: 1,
        width: '50%'
      },

      // Our work
      'box.work': {
        cursor: 'pointer',
        letterSpacing: 3,
        paddingTop: 10, 
        paddingBottom: 10
      },

      // Let's remove the margins from the
      // header (h5) of `activate` / work text
      'box.work-text': { marginTop: 0, marginBottom: 0 }
    };

    return (
      <div className="u-text-center" style={styles['box']}>
        <div style={styles['box.caret']} />
        <div className="u-text-light" style={styles['box.text']}>
          I do a lot of stuff. Why <span className="u-text-normal">don't you
          see my work</span> instead of reading this&nbsp;
          <span className="u-text-normal">boring message</span>?
        </div>

        <CSSTransitionGroup transitionName="see-work-btn">
          { !active ? (
            <div>
              <hr style={styles['box.work-hr']} />
              <div style={styles['box.work']} onClick={activationHandler}>
                <h5 className="u-text-uppercase u-color-highlight" style={styles['box.work-text']}> See Work </h5>
              </div>
            </div>
            ) : null}
          </CSSTransitionGroup>
      </div>
    )
  }
});

export default Description;