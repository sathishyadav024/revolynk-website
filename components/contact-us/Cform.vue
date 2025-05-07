<template>
  <section class="contact pb-80 sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 valign">
          <div class="sec-head md-mb80">
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text">
                Let&apos;s make your <br />
                brand
                <span class="fw-200">brilliant!</span>
              </span>
            </h2>
            <p class="pb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, incidunt! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quidem sint culpa corrupti aperiam maiores
              doloremque? Qui eligendi sed vero quaerat?
            </p>
            <div class="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div class="messages"></div>

                <div class="controls row">
                  <div class="col-lg-6">
                    <div class="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div class="mt-30">
                      <button
                        type="submit"
                        class="butn butn-full butn-bord radius-30"
                      >
                        <span class="text">Let&apos;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
