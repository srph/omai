import React from 'react/addons';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

/**
 * The `See Work` button.
 *
 * Separated from the container element (Description)
 * due to its intricacy (style, transition group, teh prop callbacks)
 */
var SeeWorkButton = React.createClass({
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
      // Description / `activator` separator
      'hr': {
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
      'btn': {
        cursor: 'pointer',
        letterSpacing: 3,
        paddingTop: 10, 
        paddingBottom: 10
      },

      // Let's remove the margins from the
      // header (h5) of `activate` / work text
      'text': { marginTop: 0, marginBottom: 0 }
    };

    return (
      <div>
        <CSSTransitionGroup transitionName="a">
          { !active ? (
            <div>
              <hr style={styles.hr} />
              <div style={styles.btn} onClick={activationHandler}>
                <h5 className="u-text-uppercase u-color-highlight" style={styles.text}> See Work </h5>
              </div>
            </div>
            ) : null}
          </CSSTransitionGroup>
      </div>
    );
  }
});

export default SeeWorkButton;