---
layout: post
title: Auth0 Secure Authentication In With Angular through JWT
category: [Development, Javascript, NodeJS]
tags: [NodeJS, Angular, Javascript, OAuth, JWT]
date: 2016-05-20 21:11:27
author: jekyll
---

# The Plan

The plan it is to develop and sample authentication app, using angular, oath and jwt. Our backend will be a nodeJs. The ideia here it is create to separate project for front end and beckend.   


# Creating and configuring our Auth0 application

First we need to create a Auth0 Account, you can do that clicking sighing up on the [Auth0 site].
The free plan that allows you to create 7000 user with unlimited logins. 
Create a user. We will need this to test our login application. 
Configure what social login your application will accept. You can you the same e-mail that you have used to enroll to auth0. You will receive an email to confirm your subscription.


- You need to create key to each one of this social media and configure in the panel (probably), but its also possible test with development key. However it is not recommend use this key in production.


# Configuring FrontEnd

If you don't have npm installed. [Here] I have a post where I am making it on Ubuntu.

  
Init your javascript project
{% highlight shell %}
npm init
{% endhighlight %}

Installing Javascript dependencies. 
{% highlight shell %}
npm install angular angular-material angular-aria angular-messages angular-animate angular-ui-router angular-jwt angular-storage auth0-angular
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

If you don't have npm installed. [Here] I have a post where I am making it on Ubuntu.

{% highlight shell %}
npm install express express-jwt cors
{% endhighlight %}


{% highlight javascript %}
if(true){
	//hrere I will put index.js
}
{% endhighlight %}



[Auth0 site]:http://auth0.com/angular
[Here]:http://adriano-fonseca.github.io