---
layout: default
title: testing md, tex
---

<article class="introduction" markdown="1">

# Testing h1

<u>underline uses <code>&lt;u&gt;</code></u>

{% highlight sas linenos %}
PROC FREQ DATA=sashelp.class;
  TABLES sex;
RUN;
{% endhighlight %}

Testing inline eqns $\frac{d}{dx} x^2 = 2x$

Testing big eqns

$$
\frac{d}{dx} x^2 = 2x
$$


</article>