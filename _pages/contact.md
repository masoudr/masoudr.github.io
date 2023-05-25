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
                <form action="https://getform.io/f/{{ site.getform_id }}" method="POST" enctype="multipart/form-data" name="sentMessage" accept-charset="utf-8" id="contactForm">
                    <input type="hidden" name="_gotcha" style="display:none !important">
                    <div class="row" style='display: none;' id='error_captcha'>
                       <div class="col-sm-12">
                            <div class="alert alert-danger" role="alert">
                                <b>Please check the captcha!</b>
                            </div>
                       </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Name" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea rows="5" name="message" class="form-control" placeholder="Message" id="message" style="resize: none;" required></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" name="upload">
                    </div>
                    <div class="g-recaptcha" data-sitekey="6LcGjD0mAAAAAFV4PMNVD1CJ95PvGSOsWJExfPWw"></div>
                    <div class="row">
                        <div class="col-md-12 mx-auto">
                            <button type="submit" class="btn btn-primary btn-lg mx-auto" id="sendMessageButton">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<script src="{{ '/assets/js/captcha_check.js' | relative_url }}"></script>
