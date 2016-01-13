var assert = require('assert');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var AccountPanel = require('../../assets/js/account/account.components.jsx').default;
var LocalServer = require('../../assets/js/stores/local-client-server.stores.jsx').LocalServer;
var sinon = require('sinon');

require('../setup-flux.js');

describe('Account', function() {
	
	var signInCb = sinon.spy();

	before(function() {

		var localServer = LocalServer.instance;

		var actions = {
			'/sign-in': signInCb,
		};

		localServer.on('action',({path, params}) => {

			if ( actions[path] !== void 0 ) {
				actions[path](params);
			}

		}, localServer.lifespan);
		

		// Render a checkbox with label in the document
		this.signin = TestUtils.renderIntoDocument(
		  <AccountPanel />
		);
	});

  it('Should sign in with the right inputs', function(done) {
    // Verify that it's Off by default
		var signInForm = this.signin.refs.signInForm;
		var username = ReactDOM.findDOMNode(this.signin.refs.username);
		var password = ReactDOM.findDOMNode(this.signin.refs.password);
		var signInDom = ReactDOM.findDOMNode(signInForm);

		username.value = 'test';
		password.value = 'password';

		assert.equal(signInDom.tagName, 'FORM');

		TestUtils.Simulate.submit(signInForm);

		sinon.assert.calledWith(signInCb, sinon.match({username: 'test', password: 'password'}));
		done();
  });

  it('Should display the reset password', function(done) {
	  var reset = this.signin.refs.resetPassword;
	  TestUtils.Simulate.click(reset);
		
	  var resetContainer = this.signin.refs.resetPasswordContainer;
	  assert.equal(ReactDOM.findDOMNode(resetContainer).tagName, 'DIV');
	  done();
  });
});
