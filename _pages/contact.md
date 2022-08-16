---
layout: page
permalink: /contact/
title: Contact
description: You can use below form to contact me
nav: true
nav_order: 6
---
<!-- Contact Section -->
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-2">
                <form action="https://getform.io/f/{{ site.getform_id }}" method="POST" enctype="multipart/form-data" name="sentMessage" accept-charset="utf-8" id="contactForm" novalidate>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Name" id="name" required
                            data-validation-required-message="Please enter your name.">
                        <p class="help-block text-danger"></p>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" id="email"
                            required data-validation-required-message="Please enter your email address.">
                        <p class="help-block text-danger"></p>
                        <label for="message">Message</label>
                        <textarea rows="5" name="message" class="form-control" placeholder="Message" id="message"
                            required data-validation-required-message="Please enter a message."
                            style="resize: none;"></textarea>
                        <p class="help-block text-danger"></p>
                        <input type="file" name="upload">
                        <p class="help-block text-danger"></p>
                        <div id="success"></div>
                        <div class="row">
                            <button type="submit" style="font-style: large;" class="btn btn-primary ml-3">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>