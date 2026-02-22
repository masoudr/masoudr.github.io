---
layout: page
permalink: /publications/
title: Publications
description: You can check out some of my publications on this page.
years: [2026, 2016, 2015]
nav: true
nav_order: 4
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
