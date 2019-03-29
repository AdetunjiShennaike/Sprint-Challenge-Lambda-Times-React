import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'


// .tabs .topics .active-tab {
//   background-color: #fff;
//   color: #333;
//   border: 2px solid #333;
// }

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`tab${props.tab === props.selectedTab ? ' active-tab' : ''}`}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;
