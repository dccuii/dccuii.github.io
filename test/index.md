---
layout: default
title: testing md, tex
---

<article class="introduction" markdown="1">

# Testing h1

<u>underline uses <code>&lt;u&gt;</code></u>

---

why is there so much highlighting off from the default im going to crash in the out direction 

{% highlight custom_sas linenos %}
/*
  Name: 
  Date:
  Purpose:
*/

* Setup: create "myData" library ;
LIBNAME myData "CHANGE/TO/YOUR/Datasets";

* Task 1: meow ig idk;
DATA myData.penguins;
  INFILE "CHANGE/TO/YOUR/Raw Data/penguins.csv" 
    DSD DLM="," FIRSTOBS=2;
  
  ATTRIB 
    species        LENGTH = $ 9
    island         LENGTH = $ 9
    sex            LENGTH = $ 6
    billLength     LABEL = "bill length (mm)"  
    billDepth      LABEL = "bill depth (mm)"  
    flipperLength  LABEL = "flipper length (mm)"   
    bodyMass       LABEL = "body mass (g)";
         
  INPUT species island billLength billDepth 
    flipperLength bodyMass sex year;
RUN;

* Task 2: woof ig idk ;
PROC SGPLOT DATA=myData.penguins;
  STYLEATTRS 
    DATACONTRASTCOLORS=(blue magenta);

  VBOX bodyMass
    / CATEGORY=species
      OUTLIERATTRS=(COLOR=RED SYMBOL=ASTERISK)
      TRANSPARENCY=.5;

  SCATTER X=species Y=bodyMass
    / GROUP=sex NOMISSINGGROUP
      GROUPDISPLAY=CLUSTER
      JITTER;

  YAXIS GRID MINORGRID;
RUN;

* temp ;
DATA temp; 
  INPUT a b;
  DATALINES;
1 2
2 3
;
RUN;
{% endhighlight %}

---

</article>