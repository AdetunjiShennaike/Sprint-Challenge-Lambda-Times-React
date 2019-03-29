import React from 'react';
import Tab from './Tab';

import styled from 'styled-components'

// .tabs {
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;
// }
// @media (min-width: 1280px) {
//   .tabs {
//     width: 1280px;
//   }
// }
// .tabs .topics {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
// }
// .tabs .topics .title {
//   font-size: 12px;
//   letter-spacing: 1px;
//   font-weight: bold;
// }
// .tabs .topics .tab {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   color: #fff;
//   background-color: #333;
//   margin: 0 5px;
//   padding: 2px 10px;
//   font-size: 12px;
//   letter-spacing: 2px;
//   cursor: pointer;
//   font-weight: bold;
// }
// .tabs .topics .tab:hover {
//   text-decoration: underline;
// }

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map( event =>
          <Tab 
          tab={event}
          selectTab={props.selectedTab}
          selectTabHandler={props.selectTabHandler}/>
        )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
