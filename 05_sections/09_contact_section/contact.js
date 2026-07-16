function initializeContact(){

    const container =
        document.getElementById("contactContent");

    if(!container) return;

    container.innerHTML=`

        <div class="contact-details">

            <div class="contact-card">

                <div class="contact-icon">

                    <i class="fa-solid fa-phone"></i>

                </div>

                <div class="contact-info">

                    <h3>Phone</h3>

                    <a href="tel:${contact.phone}">
                        ${contact.phone}
                    </a>

                </div>

            </div>

            <div class="contact-card">

                <div class="contact-icon">

                    <i class="fa-solid fa-envelope"></i>

                </div>

                <div class="contact-info">

                    <h3>Email</h3>

                    <a href="mailto:${contact.email}">
                        ${contact.email}
                    </a>

                </div>

            </div>

            <div class="contact-card">

                <div class="contact-icon">

                    <i class="fa-solid fa-location-dot"></i>

                </div>

                <div class="contact-info">

                    <h3>Location</h3>

                    <p>${contact.location}</p>

                </div>

            </div>

            <div class="social-links">

                <a href="${contact.linkedin}" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="${contact.github}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>

            </div>

        </div>

    `;

}