<template>
<div>
        <div class="container">
      <div class="row" style="margin-top: 10px;">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 border-bottom" style="text-align: center; font-size: x-large; font-weight: bold;">
          <h3 style="text-align: center; margin-top: 30px;">CONTACT JAMES</h3>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>

<div class="container" style="margin-top: 30px;"> 
    <div class="row">
        <div class="col-1"></div>
        <section class="mb-4">
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact James directly. He will come back to you within
                a matter of hours to help you.</p>

            <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                        <div class="row">

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control">
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control">
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control">
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
                            </div>
                        </div>

                    </form>
                    <div class="text-center text-md-left" style="margin-top: 10px;">
                        <a class="btn btn-primary">Send</a>
                    </div>
                    <div class="status"></div>
                </div>

                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Provo Utah, USA</p>
                        </li>

                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p>(801) 472-7088</p>
                        </li>

                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>jimmydoors2@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="col-1"></div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'ContactVue',
  components: {

  }
}
</script>
