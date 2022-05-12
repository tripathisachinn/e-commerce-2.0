import React from 'react'
import logo from '../assets/images/Logo-Icon-01-2048x2048.png'
import img from '../assets/images/pngtree-vector-paper-plane-icon-png-image_695345.jpg'
import '../Footer/Footer.css'

const Footer = () => {
return (
<div>
{/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-light text-muted">
{/* <!-- Section: Social media --> */}
<section
className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
>
{/* <!-- Left --> */}

{/* <!-- Left --> */}


</section>

{/* <!-- Section: Links  --> */}
<section className="">
<div className="container text-center text-md-start mt-5">
{/* <!-- Grid row --> */}
<div className="row mt-3">
{/* <!-- Grid column --> */}
<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
{/* <!-- Content --> */}
<h6 className="text-uppercase fw-bold mb-4">
<i className="fas fa-gem me-3"></i>
<img src={logo} style={{height: '150px', maxWidth: '100%'}} alt="logo" srcset="" />
</h6>
<p>
Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits.
</p>
{/* Social Media Links */}
<div>
<ul className='d-flex social-icons'>
<li>
<a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook fa-2x social"></i></a>
</li>
<li>
<a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter fa-2x social"></i></a>
</li>
<li>
<a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus fa-2x social"></i></a>
</li>
<li>
<a href="https://linkedin.com/"><i id="social-ln" class="fa fa-linkedin fa-2x social"></i></a>

</li>
</ul>

</div>
{/* Social Media Links */}
</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div className="col-md-2 cont-sec col-lg-2 col-xl-2 mx-auto mb-4">
{/* <!-- Links --> */}
<h6 className="fw-bold mb-4">
Contact Us
</h6>
<div>
<a href="">
<span className="d-flex text-reset"> <strong> Address: &nbsp;</strong> D-10/4, sector -8, Rohini, delhi -110085, India</span>
</a>
<a href="">
<span className="d-flex text-reset"> <strong> Website:</strong> https://jydigitek.com/</span>
</a>
<a href="">
<span className="d-flex text-reset"> <strong> Email:</strong> info@digitek.com</span>
</a>
<a href="">
<span className="d-flex text-reset"> <strong> Phone:</strong> +91 9711892721</span>
</a>

</div>
</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
{/* <!-- Links --> */}
<h6 className="fw-bold mb-4">
Services
</h6>
<div>
<a href="#!" className="text-reset">
<span className="d-flex text-reset">E-Commerce</span>
</a>
<a href="#!" className="text-reset">
<span className="d-flex text-reset">Mobile App Development</span></a>
<a href="#!" className="text-reset">
<span className="d-flex text-reset">Software Development</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">Digital Marketing</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">Graphic Designig</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">Social Media Marketing</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">SEO Services</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">Web Hosting</span></a>
<a href="#!" className="text-reset"><span className="d-flex text-reset">IT Consulting</span></a>
</div>
</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
{/* <!-- Links --> */}
<h6 className="fw-bold mb-4">
Subscribe
</h6>
<p>Follow our newsletter to stay updated about the agency.</p>
<div>
    <form action="#">
<input type="email" name='E-Mail' placeholder='Your E-mail' required />
<button className='subs-btn-icon' type='submit' ><img src={img} alt="" style={{height:'5px', width:'20px'}} /></button>
</form>
<iframe src="https://www.google.com/maps/" style={{width:'250px', height:'250px', border:'0px' , marginTop:'20px'}} allowfullscreen></iframe>
</div>
</div>
{/* <!-- Grid column --> */}
</div>
{/* <!-- Grid row --> */}
</div>
</section>
{/* <!-- Section: Links  --> */}

{/* <!-- Copyright --> */}
<div className="text-center p-4 copy-right">
<div>
<a href="">Terms Of Use </a> |
<a href=""> &nbsp;Privacy Environmental Policy</a>
</div>
<a className="text-reset" href="#"> &copy; 2022 Copyright: &nbsp;JY Digitek. All Rights Reserved</a>
</div>
{/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
</div>
)
}

export default Footer