import React from "react";

import cover from "../images/shop/cover.jpg";
import author from "../images/shop/author.jpg";

import review1 from "../images/shop/reviews/review-1.jpg";
import review2 from "../images/shop/reviews/review-2.jpg";
import right_cycle1 from "../images/shop/right_cycle1.png";
import hero_shape_bottom from "../images/shop/hero-shape-bottom.png";
import review4 from "../images/shop/reviews/review-4.jpg";
// import review5 from "../images/shop/reviews/review-5.jpg";

import "./Home.scoped.css";

const Home = () => {
  return (
    <main>
      {/* <!-- Preloader Starts --> */}
      <div id="loader-wrapper" className="hidden">
        <div id="loader" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
      {/* <!-- Preloader Ends --> */}

      <header>
        <div className="container">
          <div className="content">
            <div className="app-logo">
              <a href="/">Logo Here</a>
            </div>

            <nav className="">
              <a href="#main-section">Accueil</a>
              <a href="#author-section">A propos</a>
              <a
                data-toggle="modal"
                data-target="#buying-view"
                href="#buying-view"
              >
                Shop
              </a>
              <a href="#contact-section">Contact</a>
            </nav>

            <div data-menu-toggle className="nav-toggle">
              <i className="fal fa-bars" />
            </div>
            <div data-menu-toggle className="nav-close">
              <i className="fal fa-times-circle" />
            </div>
          </div>
        </div>
      </header>

      <section
        id="main-section"
        className="hero-section position-relative d-flex justify-content-center align-content-center"
      >
        <img
          src={right_cycle1}
          className="img-fluid left-shape"
          alt="left shape"
        />
        <div className="container d-flex">
          <div className="row">
            <div className="col-12 col-md-7 align-self-center">
              <div className="promo pr-md-3 pr-lg-5 text-center text-md-left">
                <h1 className="headline mb-3 text-capitalize">Shadchouda</h1>
                <div className="subheadline mb-4 text-[18px] ">
                  Ciara Navaro, une jeune célébrité, voit sa vie basculer après
                  la disparition de son meilleur ami Vladimir. A l'aide de ses
                  amies Miranda Smith et Yasmine Patruno, elle se met
                  désespérément à sa recherche jusqu'à ce qu'un criminel, venu
                  d'une autre dimension, vienne créer le trouble sur la terre :
                  on le surnommait l'homme à la capuche. Arrivera-t-elle à
                  déjouer les manigances de ce redoutable criminel ? Ciara
                  pourra-t-elle retrouver son meilleur ami ?
                </div>
                <div className="cta-holder position-relative z-50 ">
                  <a
                    className="btn btn-primary mr-lg-4"
                    data-toggle="modal"
                    data-target="#buying-view"
                    href="#buying-view"
                  >
                    Commander
                  </a>
                  <a
                    className="btn btn-secondary scrollto d-none d-lg-inline-block"
                    href="#benefits-section"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 align-self-center">
              <figure className="book mx-auto">
                <ul className="hardcover_front list-unstyled">
                  <li>
                    <div className="coverDesign">
                      <img src={cover} className="img-fluid" alt="cover" />
                    </div>
                  </li>
                  <li />
                </ul>
                <ul className="page">
                  <li />
                  <li>
                    <div>
                      <img
                        src={author}
                        className="img-fluid rounded-circle"
                        alt="author"
                      />
                      <div>
                        <span>Un livre de</span>
                        <div>Nom Auteur</div>
                      </div>
                    </div>
                  </li>
                  <li />
                  <li />
                  <li />
                </ul>
                <ul className="hardcover_back list-unstyled">
                  <li />
                  <li />
                </ul>
                <ul className="book_spine list-unstyled">
                  <li />
                  <li />
                </ul>
              </figure>
            </div>
          </div>
        </div>
        <img
          src={hero_shape_bottom}
          className="img-fluid bottom-shape"
          alt="bottom shape"
        />
      </section>
      {/* <!-- Hero Section Ends --> */}
      {/* <!-- Benefits Section Starts --> */}
      <section id="benefits-section" className="benefits-section">
        <div className="container py-4 py-md-5">
          <h2 className="section-heading text-center mb-3">
            Qu'allez-vous retirer de ce livre?
          </h2>
          <div className="section-intro single-col-max mx-auto text-center mb-4 mb-sm-5">
            Ceci est un texte fictif à titre d'exemple ipsum dolor sit amet,
            consectetur adipisicing elit. Alias asperiores at, atque culpa
            deserunt ?
          </div>
          <div className="row text-center">
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-lightbulb" />
                  </div>
                  <h3 className="item-heading">Avantage A</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-bullhorn" />
                  </div>
                  <h3 className="item-heading">Avantage B</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-key" />
                  </div>
                  <h3 className="item-heading">Avantage C</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-handshake" />
                  </div>
                  <h3 className="item-heading">Avantage D</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-chart-line" />
                  </div>
                  <h3 className="item-heading">Avantage E</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="item col-12 col-md-6 col-lg-4">
              <div className="item-inner p-3 p-lg-4">
                <div className="item-header mb-3">
                  <div className="item-icon">
                    <i className="fal fa-ellipsis-v" />
                  </div>
                  <h3 className="item-heading">Avantage F</h3>
                </div>
                <div className="item-desc">
                  Énumérez ici l'un des avantages du livre. Texte fictif Lorem
                  ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Benefits Section Ends --> */}
      {/* <!-- Separator Starts --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      {/* <!-- Separator Ends --> */}
      {/* <!-- Content Section Starts --> */}
      <section id="content-section" className="content-section">
        <div className="container">
          <div className="single-col-max mx-auto">
            <h2 className="section-heading text-center mb-5">
              Les chapitres du livre
            </h2>
            <div className="row">
              <div className="col-12 col-md-5">
                <figure className="book mx-auto">
                  <ul className="hardcover_front list-unstyled">
                    <li>
                      <div className="coverDesign">
                        <img src={cover} className="img-fluid" alt="cover" />
                      </div>
                    </li>
                    <li />
                  </ul>
                  <ul className="page">
                    <li />
                    <li>
                      <div>
                        <img
                          src={author}
                          className="img-fluid rounded-circle"
                          alt="author"
                        />
                        <div>
                          <span>Un livre de</span>
                          <div>Nom Auteur</div>
                        </div>
                      </div>
                    </li>
                    <li />
                    <li />
                    <li />
                  </ul>
                  <ul className="hardcover_back list-unstyled">
                    <li />
                    <li />
                  </ul>
                  <ul className="book_spine list-unstyled">
                    <li />
                    <li />
                  </ul>
                </figure>
              </div>
              <div className="col-12 col-md-7 p-0">
                <div className="key-points text-center">
                  <ol className="key-points-list mx-auto d-inline-block text-left">
                    <li className="d-flex align-items-center">
                      <div className="text-[60px] font-bold ">1</div>
                      <div className="ml-2">
                        <div
                          className="uppercase text-[12px] font-semibold --primary-color"
                          style={{
                            color: "blue",
                          }}
                        >
                          Chapitre
                        </div>
                        <div>Texte fictif Lorem ipsum dolor sit amet</div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="text-[60px] font-bold ">1</div>
                      <div className="ml-2">
                        <div
                          className="uppercase text-[12px] font-semibold --primary-color"
                          style={{
                            color: "blue",
                          }}
                        >
                          Chapitre
                        </div>
                        <div>Texte fictif Lorem ipsum dolor sit amet</div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="text-[60px] font-bold ">1</div>
                      <div className="ml-2">
                        <div
                          className="uppercase text-[12px] font-semibold --primary-color"
                          style={{
                            color: "blue",
                          }}
                        >
                          Chapitre
                        </div>
                        <div>Texte fictif Lorem ipsum dolor sit amet</div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="text-[60px] font-bold ">1</div>
                      <div className="ml-2">
                        <div
                          className="uppercase text-[12px] font-semibold --primary-color"
                          style={{
                            color: "blue",
                          }}
                        >
                          Chapitre
                        </div>
                        <div>Texte fictif Lorem ipsum dolor sit amet</div>
                      </div>
                    </li>
                  </ol>
                  <div className="text-center">
                    <a
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#buying-view"
                      href="#buying-view"
                    >
                      Je veux ce livre
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content Section Ends --> */}
      {/* <!-- Separator Starts --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="negative-margin"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
      {/* <!-- Separator Ends --> */}
      {/* <!-- Audience Section Starts --> */}
      <section id="audience-section" className="audience-section">
        <div className="container">
          <h2 className="section-heading text-center mb-4">
            A qui s'adresse ce livre ?
          </h2>
          <div className="section-intro single-col-max mx-auto text-center mb-5">
            A lister ici vos lecteurs cibles dans cette section et sauvegardez
            avec des critiques.
          </div>
          <div className="audience mx-auto">
            <div className="item media">
              <div className="media-body">
                <h4 className="item-title">
                  <i className="fal fa-angle-right mr-3" />
                  Entrepreneurs
                </h4>
                <div className="item-desc">
                  Texte fictif lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin sodales sit amet neque sit amet
                  molestie.
                </div>
              </div>
            </div>
            <div className="item media">
              <div className="media-body">
                <h4 className="item-title">
                  <i className="fal fa-angle-right mr-3" />
                  Project Managers
                </h4>
                <div className="item-desc">
                  Texte fictif lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin sodales sit amet neque sit amet
                  molestie.
                </div>
              </div>
            </div>
            <div className="item media">
              <div className="media-body">
                <h4 className="item-title">
                  <i className="fal fa-angle-right mr-3" />
                  Students
                </h4>
                <div className="item-desc">
                  Texte fictif lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin sodales sit amet neque sit amet
                  molestie.
                </div>
              </div>
            </div>
            <div className="item media">
              <div className="media-body">
                <h4 className="item-title">
                  <i className="fal fa-angle-right mr-3" />
                  Investors
                </h4>
                <div className="item-desc">
                  Texte fictif lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin sodales sit amet neque sit amet
                  molestie.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Audience Section Starts --> */}
      {/* <!-- Separator Starts --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      {/* <!-- Separator Ends --> */}
      {/* <!-- Reviews Section Starts --> */}
      <section id="reviews-section" className="reviews-section">
        <div className="container">
          <h2 className="section-heading text-center">
            Les critiques sur le livre
          </h2>
          <div className="section-intro text-center single-col-max mx-auto mb-5">
            Voir ce que disent nos lecteurs.
          </div>
          <div className="row justify-content-center">
            <div className="item col-12 col-lg-4 p-3 mb-4">
              <div className="item-inner rounded p-4 pt-5">
                <blockquote className="quote">
                  "Excellent livre ! Ajoutez votre critique de livre ici, elle
                  sera suivie de l'élite adipiscing. Aliquam Euismod now porta
                  urna easisis tempor."
                </blockquote>
                <div className="source media flex-column flex-md-row align-items-center">
                  <img
                    className="source-profile mr-md-3"
                    src={review1}
                    alt="img"
                  />
                  <div className="source-info media-body text-center text-md-left">
                    <div className="source-name">Nom & Prénom du lecteur</div>
                    <div className="soure-title">Activité, Poste/Grade</div>
                  </div>
                </div>
                <div className="icon-holder">
                  <i className="fal fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="item col-12 col-lg-4 p-3 mb-4">
              <div className="item-inner rounded p-4 pt-5">
                <blockquote className="quote">
                  "Super livre ! Ajoutez votre critique de livre ici consectetur
                  adipiscing elit. Aliquam Euismod now porta urna facilisis
                  tempor. Praesent mauris neque."
                </blockquote>
                <div className="source media flex-column flex-md-row align-items-center">
                  <img
                    className="source-profile mr-md-3"
                    src={review2}
                    alt="img"
                  />
                  <div className="source-info media-body text-center text-md-left">
                    <div className="source-name">Nom & Prénom du lecteur</div>
                    <div className="soure-title">Activité, Poste/Grade</div>
                  </div>
                </div>
                <div className="icon-holder">
                  <i className="fal fa-quote-right" />
                </div>
              </div>
            </div>

            <div className="item col-12 col-lg-4 p-3 mb-4">
              <div className="item-inner rounded p-4 pt-5">
                <blockquote className="quote">
                  "Une autre critique de livre suit ici l'élite adipiscante.
                  Pellentesque ac leo turpis. Phasellus imperdiet id ligula
                  tempordiet. Praesent mauris neque."
                </blockquote>
                <div className="source media flex-column flex-md-row align-items-center">
                  <img
                    className="source-profile mr-md-3"
                    src={review4}
                    alt="img"
                  />
                  <div className="source-info media-body text-center text-md-left">
                    <div className="source-name">Nom & Prénom du lecteur</div>
                    <div className="soure-title">Activité, Poste/Grade</div>
                  </div>
                </div>
                <div className="icon-holder">
                  <i className="fal fa-quote-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#buying-view"
              href="#buying-view"
            >
              Obtenez votre copie aujourd'hui
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Reviews Section Starts --> */}
      {/* <!-- Separator Starts --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="negative-margin"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
      {/* <!-- Separator Ends --> */}
      {/* <!-- Subscribe Section Starts --> */}
      <section id="form-section" className="form-section">
        <div className="container">
          <div className="lead-form-wrapper mx-auto rounded">
            <h2 className=" font-semibold text-lg text-center my-4 ">
              Obtenez un aperçu gratuit
            </h2>
            <div className="form-intro text-center mb-3">
              Inscrivez-vous pour obtenir un aperçu gratuit du livre. <br />
              Vous pouvez offrir aux visiteurs des aperçus de livres gratuits
              pour générer des prospects.
            </div>
            <div className="w-full mt-2 ">
              <form className="flex justify-center flex-wrap w-full ">
                <div className="mb-3 flex flex-col items-center w-1/2 ">
                  <input
                    id="email"
                    type="email"
                    className="form-control w-full "
                    placeholder="Tapez votre email ..."
                    aria-label="Tapez votre email ..."
                    aria-describedby="Subscribe"
                    required
                  />
                  <button
                    type="submit"
                    className=" border-2 py-2 px-4 my-4 hover:text-white hover:bg-blue-600 font-semibold rounded-full"
                    id="subscribe"
                  >
                    Souscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Subscribe Ends --> */}
      {/* <!-- Separator Starts --> */}
      <svg
        className="bottom-separator"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      {/* <!-- Separator Ends --> */}
      {/* <!-- Author Section Stffarts --> */}
      <section id="author-section" className="author-section section">
        <div className="container py-3">
          <div className="w-fit border-4 p-1 m-auto rounded-full ">
            <img
              className=" w-[200px] h-[200px] rounded-full"
              src={author}
              alt="img"
            />
          </div>
          <h2 className="section-heading text-center text-white my-10 ">
            A propos de l'auteur
          </h2>
          <div className="author-bio single-col-max mx-auto">
            <p className="text-justify">
              D'origine libanaise, celle que ses proches surnomment Shadia Sika
              à cause de son profond attachement au continent et à ses valeurs
              sans oublier ses multiples nationalités (Malienne, Burkinabée) et
              togolaise par conviction est née le 14 Mars 1998 à Ouagadougou, au
              Burkina Faso. Véritable mordue de l'art littéraire, passionnée du
              fantastique depuis son adolescence, l’auteure a fait de son
              passe-temps favori la lecture et l'écriture. <br /> <br />
              Éternelle insatisfaite de ses capacités et prouesses, Shadia Sika
              aime toujours pousser loin les limites de l'ignorance en explorant
              plusieurs domaines de connaissances, ce qui naturellement la
              conduira à commencer ses aventures par le domaine de la
              communication afin d'en maîtriser le mieux possible tous les
              rouages pour les mettre au service de l'écriture. <br /> <br />
              Certifiée en community management, elle met sa compétence en tant
              que freelance. Mais avant de poser ses valises, c'est surtout sur
              la chaîne RTDS que les téléspectateurs ont eu l'occasion de
              découvrir les talents de présentatrice TV de cette pépite à
              travers La chronique dénommée "Rose Rosée" dans l'émission
              matinale intitulée "La Rosée matinale".
              <br /> <br />
              Au regard du succès de ses premiers pas à la télévision, Sika
              décide de lancer une émission web consacrée à la promotion de la
              femme et de la jeune fille qui représente indéniablement son
              battement du cœur le plus fort. Les internautes n'hésiteront pas à
              l’accréditer du statut de "motivatrice".
              <br /> <br />
              Perfectionniste et perpétuellement à l'affût de nouvelles
              compétences, elle n'a cessé de multiplier les formations dans
              plusieurs domaines parallèles dont le coaching avec Lady Sonia.
              <br /> <br />
              <span className="font-semibold ">
                Mais comme dirait l'adage : "Chasser le naturel, il revient au
                galop".
              </span>
              <br /> <br />
              Sa passion pour l'écriture a donc fini par prendre le dessus de
              ses nombreuses ambitions. Cette première saga fantastique baptisée
              ‘’une recherche sans fin est une parfaite illustration de celle
              qui ne jure que par une écriture sans fin pour marquer son époque,
              sa génération.
            </p>

            <div
              className="author-links text-center pt-20"
              id="contact-section"
            >
              <h5 className="text-white mb-4 font-bold">Suivez-moi</h5>
              <ul className="social-list list-unstyled">
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
