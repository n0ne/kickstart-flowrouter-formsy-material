# kickstart-flowrouter + Formsy + Material-UI

I did:

1. `git clone https://github.com/thereactivestack/kickstart-flowrouter.git kickstart-flowrouter-formsy-material`
1. `cd kickstart-flowrouter-formsy-material/`
1. `meteor`
1. `npm install material-ui@0.12.5`
1. `npm install formsy-react@0.14.1`
1. `npm install formsy-material-ui`
1. `meteor`

Then I added modules/Formsy. Look like everything is OK, but in Chrome console:

`Uncaught TypeError: Cannot read property 'firstChild' of undefined              ReactMount.js?4869:730
Warning: owner-based and parent-based contexts differ (values: `undefined` vs `[object Object]`) for key (muiTheme) while mounting ScaleIn (see: http://fb.me/react-context-by-parent)        react.browserify.js:21884
Warning: owner-based and parent-based contexts differ (values: `undefined` vs `[object Object]`) for key (muiTheme) while mounting ScaleIn (see: http://fb.me/react-context-by-parent)        react.browserify.js:21884

Uncaught Error: Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner
(that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.                           react.browserify.js:20537

Uncaught Error: Invariant Violation: removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn't
have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.             react.browserify.js:20537`
