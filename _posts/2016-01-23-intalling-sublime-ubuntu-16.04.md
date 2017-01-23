---
layout: post
title: Intalling Sublime on Ubuntu 16.04
category: Ubuntu
tags: [Sublime, Instalations, Ubuntu]
---

Really straightforward way to install Sublime. First we need to add the repository:

Adding repository:

{% highlight shell %}
sudo add-apt-repository -y ppa:webupd8team/sublime-text-2
{% endhighlight %}

Having the repository run:

{% highlight shell %}
sudo apt-get update
sudo apt-get install sublime-text
{% endhighlight %}