---
layout: post
title: Auth0 Secure Authentication In With Angular through JWT
category: [Development, Javascript, NodeJS]
tags: [NodeJS, Angular, Javascript, OAuth, JWT]
date: 2017-01-23 19:48:27
---

# The Plan

The plan it is to develop and sample authentication app, using angular, oath and jwt. Our backend will be a nodeJs. The idea here it is create to separate project for frontend and backend.

In order to run this project with me we will need to have nodeJs and NPM, installed. I will not approach the installation. You can see how to install node [here].    


# Creating and configuring our Auth0 application

First we need to create a Auth0 Account, you can do that clicking sighing up on the [Auth0 site].
The free plan that allows you to create 7000 user with unlimited logins. 
Create a user. We will need this to test our login application. 
Configure what social login your application will accept. You can you the same e-mail that you have used to enroll to auth0. You will receive an email to confirm your subscription.


- You need to create key to each one of this social media and configure in the panel (probably), but its also possible test with development key. However it is not recommend use this key in production.


# Configuring FrontEnd


Init your javascript project
{% highlight shell %}
npm init
{% endhighlight %}

Installing Javascript dependencies. 
{% highlight shell %}
npm install angular angular-material angular-aria angular-messages angular-animate angular-ui-router angular-lock angular-jwt angular-storage auth0-angular
{% endhighlight %}

To run our test we will need to have a http-server installed, if you don't have it, you can do that using the npm command to install it.

Installing Javascript dependencies. 
{% highlight shell %}
npm install http-server -g
{% endhighlight %}


   
{% highlight html %}
<!DOCTYPE html>
<html class="no-js">
  <head>
  <title>Angular Auth</title>
  </head>
  <body>

   </body>
</html>

{% endhighlight %}   

{% highlight javascript %}
if(true){
	System.out.println("hello");
}
{% endhighlight %}


# Configuring BackEnd

{% highlight shell %}
npm install express express-jwt cors
{% endhighlight %}


{% highlight javascript %}
if(true){
	//hrere I will put index.js
}
{% endhighlight %}


# Configuring authentication

We will use Lock widget that Auth0 provides to us, that we have already imported in our index.html and in our app configuration as follows:

{% highlight html %}
<script type="text/javascript" src="https://cdn.auth0.com/js/lock/10.8/lock.min.js"></script>
{% endhighlight %}   

Using that we will have this login box for free. All the we need to do is passing some configurations to authProvider that we have already imported in our App, as follows:

{% highlight javascript %}
angular
	.module('app', ['auth0', 'angular-storage','angular-jwt','ngMaterial','ui.router'])
	.config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider)
{% endhighlight %}

In the file app.js in our frontend project we need to init our authProvider adding the follow code:

{% highlight javascript %}
	authProvider.init({
			domain: 'adriano-fonseca.auth0.com',
			clientID: 'dfBT1qpRBvlmDDInHttYBsotMY8AteDT'
	});
{% endhighlight %}

#consuming RestAPI on Java Application

npm install node-rest-client

   
[Auth0 site]:http://auth0.com/angular
[Here]:http://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/#