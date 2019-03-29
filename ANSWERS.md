 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

proptypes are used to check data being used against the type of data that it is. so if we have an array of objects and the first object is information for a new champion or character, where the user is inputting information for it, you want to restrict what will be accepted so that the user follows the data type already setup by the previously made characters. this way your data isn't messed up because a user put an integer when they should have been putting a string

 Describe a life-cycle event in React? 
mount, update, unmount

mounting is the initial start of the react app, where it is created and mounted to a project/website. updating happens throughout the life of the app where it is changed for more  capabilities or its been optimized to work faster etc. unmounting happens when the app has been replaced or is no longer viable so it isn't usefull because of other reasons. 


 Explain the details of a Higher Order Component?
 a component(function) that calls another component(function) that returns something to be used in the original component. 


 What are three different ways to style components in React? Explain some of the benefits of each.

 you can style with plain css/less/sass/etc. and import the style sheet into your js page. this is the best way to code like you normally would and just import it. 
 the is reactstrap which is a library for react that allows you to use premade styling components and edit them to look the way you want them to.you have to learn how to style using jsx/js when using this way and you dont have to import an external file but you do have to import the library. last is styled-components which is a bit of a hybrid between the first two. it allows you to code normal css but it is within the js side and you have to do a bit of setup to use it. the import is  from a library and not from an external sheet. 