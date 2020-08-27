import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../reservalo/assets/vendor/icofont/icofont.min.css';
import '../reservalo/assets/vendor/boxicons/css/boxicons.min.css';
import '../reservalo/assets/vendor/venobox/venobox.css';
import '../reservalo/assets/vendor/remixicon/remixicon.css';
import '../reservalo/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../reservalo/assets/vendor/aos/aos.css';
import '../reservalo/assets/js/main';
import AOS from 'aos';
import Image from "react-bootstrap/Image";

class Index extends Component {

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    scrollDiv(idToScroll) {
        let element = document.getElementById(idToScroll);
        element.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className={"body2"}>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <title>Resérvalo</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"/>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <div className="logo mr-auto">
                            <h1 className="text-light"><a
                                onClick={() => this.scrollDiv("hero")}><span>Resérvalo</span></a>
                            </h1>
                        </div>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a onClick={() => this.scrollDiv("hero")}
                                       style={{color: "white"}}
                                       href>Inicio</a></li>
                                <li><a onClick={() => this.scrollDiv("about")}
                                       style={{color: "white"}} href>Quiénes
                                    somos</a></li>
                                <li><a
                                    onClick={() => this.scrollDiv("features")}
                                    style={{color: "white"}}
                                    href>Prestaciones</a></li>
                                <li><a
                                    onClick={() => this.scrollDiv("pricing")}
                                    style={{color: "white"}} href>Precio</a>
                                </li>
                                <li><a
                                    onClick={() => this.scrollDiv("contact")} style={{color: "white"}}
                                    href>Contacto</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section id="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div data-aos="zoom-out">
                                    <h1>Permite que tus clientes reserven con <span>Resérvalo</span></h1>
                                    <h2>Resérvalo es la primera app móvil del mundo que permite reservas en diferentes
                                        tipos de negocios</h2>
                                    <div className="text-center text-lg-left">
                                        <a href="https://play.google.com/store/apps/details?id=capihair.cuthair"
                                           className="btn-get-started scrollto">Descarga la app</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out"
                                 data-aos-delay={300}>
                                <Image src="/bootlsander/img/hero-img.png" className="img-fluid animated" alt=""/>
                            </div>
                        </div>
                    </div>
                    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path"
                                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                            </path>
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
                            </use>
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
                            </use>
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
                            </use>
                        </g>
                    </svg>
                </section>
                <main id="main">
                    <section id="about" className="about">
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
                                    data-aos="fade-right">
                                </div>
                                <div
                                    className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                                    data-aos="fade-left">
                                    <h3>Gestiona las reservas de tu negocio desde tu móvil</h3>
                                    <p>Ahorra tiempo gestionando las reservas de tu negocio mediante nuestra app. Asigna
                                        horarios y relájate mientras tus clientes disfutan de la sencillez de nuestra
                                        app a la hora de reservar citas.</p>
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                                        <div className="icon"><i className="bx bx-alarm"/></div>
                                        <h4 className="title">Ahorra tiempo</h4>
                                        <p className="description">Olvídate de las llamadas en medio de servicios con
                                            clientes.</p>
                                    </div>
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                                        <div className="icon"><i className="bx bx-gift"/></div>
                                        <h4 className="title">Da visibilidad a tu negocio</h4>
                                        <p className="description">Colocamos tu negocio estratégicamente en nuestra app
                                            para que obtengas el mayor número de reservas.</p>
                                    </div>
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                                        <div className="icon"><i className="bx bx-atom"/></div>
                                        <h4 className="title">UI siguiendo los patrones de diseño más modernos</h4>
                                        <p className="description">Nuestra app busca ser intuitiva para ti y tus
                                            clientes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="features" className="features">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Prestaciones</h2>
                                <p>Nuestras prestaciones</p>
                            </div>
                            <div className="row" data-aos="fade-left">
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
                                        <i className="ri-store-line" style={{color: '#ffbb2c'}}/>
                                        <h3 style={{color: "#444444"}}>Visibilidad tecnológica</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                                        <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}/>
                                        <h3 style={{color: "#444444"}}>Algoritmo reservas</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="ri-calendar-todo-line" style={{color: '#e80368'}}/>
                                        <h3 style={{color: "#444444"}}>Asignación de horarios</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                                        <i className="ri-paint-brush-line" style={{color: '#e361ff'}}/>
                                        <h3 style={{color: "#444444"}}>Intuitivo</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={250}>
                                        <i className="ri-database-2-line" style={{color: '#47aeff'}}/>
                                        <h3 style={{color: "#444444"}}>Consulta de citas</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                                        <i className="ri-gradienter-line" style={{color: '#ffa76e'}}/>
                                        <h3 style={{color: "#444444"}}>Automatización</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={350}>
                                        <i className="ri-base-station-line" style={{color: '#11dbcf'}}/>
                                        <h3 style={{color: "#444444"}}>Soporte 24/7</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
                                        <i className="ri-price-tag-2-line" style={{color: '#4233ff'}}/>
                                        <h3 style={{color: "#444444"}}>Fácil gestión</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={450}>
                                        <i className="bx bxs-user-rectangle" style={{color: '#b2904f'}}/>
                                        <h3 style={{color: "#444444"}}>Control de aforo</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={500}>
                                        <i className="bx bxs-credit-card" style={{color: '#b20969'}}/>
                                        <h3 style={{color: "#444444"}}>Pasarela de pago</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={550}>
                                        <i className="bx bxs-bell" style={{color: '#ff5828'}}/>
                                        <h3 style={{color: "#444444"}}>Notificaciones semanales</h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={600}>
                                        <i className="bx bx-scan" style={{color: '#29cc61'}}/>
                                        <h3 style={{color: "#444444"}}>Gestión de entradas</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="counts" className="counts">
                        <div className="container">
                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-3 col-md-6">
                                    <div className="count-box">
                                        <i className="icofont-simple-smile"/>
                                        <span data-toggle="counter-up">2</span>
                                        <p>Clientes felices</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                    <div className="count-box">
                                        <i className="icofont-document-folder"/>
                                        <span data-toggle="counter-up">72</span>
                                        <p>Horas para integrarte</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div className="count-box">
                                        <i className="icofont-live-support"/>
                                        <span data-toggle="counter-up">1,463</span>
                                        <p>Horas de trabajo</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div className="count-box">
                                        <i className="icofont-users-alt-5"/>
                                        <span data-toggle="counter-up">2</span>
                                        <p>Desarrolladores</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="details" className="details">
                        <div className="container">
                            <div className="row content">
                                <div className="col-md-4" data-aos="fade-right">
                                    <Image src="/bootlsander/img/details-1.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-8 pt-4" data-aos="fade-up">
                                    <h3>Resérvalo en Peluquerías</h3>
                                    <p className="font-italic">
                                        Contamos con una de las BarberShop de más categoría y famosa de Tenerife como
                                        contribuidor principal. Conocemos
                                        perfectamente las necesidades del sector.
                                    </p>
                                    <ul>
                                        <li><i className="icofont-check"/> Ahorro de tiempo.</li>
                                        <li><i className="icofont-check"/> Control de las reservas.</li>
                                        <li><i className="icofont-check"/> Comprobación de las citas por día.</li>
                                        <li><i className="icofont-check"/> Asignación de horarios a empleados.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row content">
                                <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                                    <Image src="/bootlsander/img/details-2.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                                    <h3>Resérvalo en Restaurantes</h3>
                                    <p className="font-italic">
                                        Permite a tus clientes reservar mesa en tu restaurante a través de nuestra app.
                                    </p>
                                    <ul>
                                        <li><i className="icofont-check"/> Ahorro de tiempo.</li>
                                        <li><i className="icofont-check"/> Control de las reservas.</li>
                                        <li><i className="icofont-check"/> Asignación de número de mesas disponibles.
                                        </li>
                                        <li><i className="icofont-check"/> Comprobación de las reservas por día.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row content">
                                <div className="col-md-4" data-aos="fade-right">
                                    <Image src="/bootlsander/img/details-3.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-8 pt-5" data-aos="fade-up">
                                    <h3>Resérvalo en Discotecas</h3>
                                    <p>.</p>
                                    <ul>
                                        <li><i className="icofont-check"/> Pasarela de pago.</li>
                                        <li><i className="icofont-check"/> Creación de entradas mediante Códigos QR.
                                        </li>
                                        <li><i className="icofont-check"/> Lector de Códigos QR.</li>
                                        <li><i className="icofont-check"/> Asignación de número de entradas.</li>
                                        <li><i className="icofont-check"/> Evita largas colas.</li>
                                        <li><i className="icofont-check"/> Gestión de aforo.</li>
                                    </ul>
                                    <p>
                                        Además puedes establecer los turnos de tus trabajadores y gestionar tu RRPP.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="pricing" className="pricing">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Precios</h2>
                                <p>Nuestros precios</p>
                            </div>
                            <div className="row justify-content-center" data-aos="fade-left">
                                <div className="col-lg-3 col-md-6">
                                    <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                                        <h3>Comisiones</h3>
                                        <h4><sup>%</sup>0<span> / por cita</span></h4>
                                        <ul>
                                            <li>No cobramos comisiones abusivas</li>
                                            <li>El 100% del precio de la cita es para tí</li>
                                            <li className="na">Comisiones</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <span className="btn-buy">+ Info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                                    <div className="box featured" data-aos="zoom-in" data-aos-delay={200}>
                                        <h3>Negocios</h3>
                                        <h4><sup/>llámanos</h4>
                                        <ul>
                                            <li>Facturado mensualmente</li>
                                            <li>Calendario interactivo</li>
                                            <li>Algoritmo de reserva</li>
                                            <li>Todo incluído</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <span className="btn-buy">+ Info</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="faq" className="faq section-bg">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>F.A.Q</h2>
                                <p>Preguntas Frecuentes</p>
                            </div>
                            <div className="faq-list">
                                <ul>
                                    <li data-aos="fade-up">
                                        <i className="bx bx-help-circle icon-help"/> <a data-toggle="collapse"
                                                                                        className="collapse"
                                                                                        href="#faq-list-1">
                                        ¿En cuánto tiempo podéis incluir mi negocio en Resérvalo? <i
                                        className="bx bx-chevron-down icon-show"/><i
                                        className="bx bx-chevron-up icon-close"/></a>
                                        <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                            <p>
                                                Los restaurantes y peluquerías son integrados en una media de 72 horas,
                                                hacemos el máximo esfuerzo por reducir estos tiempos.
                                                Las discotecas tienen una integración distinta debido a la gestión de
                                                entradas, etc. Si quieres saber el tiempo aproximado que tardaremos con
                                                tu negocio no dudes en llamarnos. ¡Los tiempos de Resérvalo te
                                                sorprenderán!
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-help-circle icon-help"/> <a data-toggle="collapse"
                                                                                        href="#faq-list-2"
                                                                                        className="collapsed">¿Cobráis
                                        comisiones por cita/entrada? <i className="bx bx-chevron-down icon-show"/><i
                                            className="bx bx-chevron-up icon-close"/></a>
                                        <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Actualmente no cobramos comisiones por citas. Por entradas solo se cobra
                                                el coste de la pasarela de pago (exactamente la establecida por nuestro
                                                proveedor).
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-help-circle icon-help"/> <a data-toggle="collapse"
                                                                                        href="#faq-list-3"
                                                                                        className="collapsed">¿En qué
                                        plataformas está disponible Resérvalo? <i
                                            className="bx bx-chevron-down icon-show"/><i
                                            className="bx bx-chevron-up icon-close"/></a>
                                        <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Resérvalo está disponible en las principales plataformas móviles:
                                                Android e IOS. Abarcando así toda la cuota de mercado móvil.
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-help-circle icon-help"/> <a data-toggle="collapse"
                                                                                        href="#faq-list-3"
                                                                                        className="collapsed">¿Contáis
                                        con aplicación para empleados y jefes? <i
                                            className="bx bx-chevron-down icon-show"/><i
                                            className="bx bx-chevron-up icon-close"/></a>
                                        <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                            <p>
                                                El jefe y el empleado tienen su propia aplicación desde la que pueden
                                                asignar horarios, consultarlos y cancelar citas.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Contacto</h2>
                                <p>Contacta con Resérvalo</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-right" data-aos-delay={100}>
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"/>
                                            <h4>Localización:</h4>
                                            <p>Islas Canarias, España</p>
                                        </div>
                                        <div className="email">
                                            <i className="icofont-envelope"/>
                                            <h4>Email:</h4>
                                            <p>info@Resérvalo.app</p>
                                        </div>
                                        <div className="phone">
                                            <i className="icofont-phone"/>
                                            <h4>Teléfono:</h4>
                                            <p>+34 607977602</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay={200}>
                                    <form action="https://formspree.io/xbjzgjnw" method="POST"
                                          className="php-email-form">
                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Nombre" data-rule="minlen:4"
                                                       data-msg="Please enter at least 4 chars"/>
                                                <div className="validate"/>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="_replyto" id="email"
                                                       placeholder="Email" data-rule="email"
                                                       data-msg="Please enter a valid email"/>
                                                <div className="validate"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject"
                                                   placeholder="Asunto" data-rule="minlen:4"
                                                   data-msg="Please enter at least 8 chars of subject"/>
                                            <div className="validate"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows={5}
                                                      data-rule="required" data-msg="Please write something for us"
                                                      placeholder="Escribe tu consulta, estaremos encantados de atenderla"
                                                      defaultValue={""}/>
                                            <div className="validate"/>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Tu mensaje a sido enviado en breve nos pondremos en
                                                contacto contigo
                                            </div>
                                            <div className="error-message"/>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" value="Send">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer id="footer">
                    <div className="container">
                        <div className="copyright">
                            <strong><span>Resérvalo 2020</span></strong>
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>
                <span className="back-to-top"><i className="icofont-simple-up"/></span>
            </div>
        );
    }
}

export default Index;