// File path: C:\Users\revan\Downloads\mergerware\loan-management\client\# meteor-login-app.js

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';

import './headAndBody.html';

// Set default template
Template.mainLayout.helpers({
  dynamicTemplate: function() {
    return Session.get('dynamicTemplate') || 'login';
  }
});

Template.login.events({
  'submit #loginForm'(event, template) {
    // Rest of the code remains the same...
  },
});

Template.signup.events({
  'submit #signupForm'(event, template) {
    // Rest of the code remains the same...
  },
});

// Define routes using iron:router package
Router.configure({
  layoutTemplate: 'mainLayout',
});

Router.route('/', function () {
  Session.set('dynamicTemplate', 'login');
});

Router.route('/admin-dashboard', function () {
  Session.set('dynamicTemplate', 'adminDashboard');
});

Router.route('/user-dashboard', function () {
  Session.set('dynamicTemplate', 'userDashboard');
});
