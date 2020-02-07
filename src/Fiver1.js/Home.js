import React, { Component } from 'react'

export default class Home extends Component {

    render() {
        return (
         <React.Fragment>
            <div id="main-container" className="preload lang-fr animate">
            
               
                <div id="main-loader" className="init">
                    <div className="main-loader-bg"></div>
                  
                    <div className="loader main-loader-loading">
                        <div className="loader-inner">
                            <span></span>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="-757 32 84 84" style={{enableBackground:"new -757 32 84 84"}} xmlSpace="preserve">
                                    <g id="loading-outlines">
                                        <g>
                                            <path d="M-715,116c-23.2,0-42-18.8-42-42c0-23.2,18.8-42,42-42c23.2,0,42,18.8,42,42C-673,97.2-691.8,116-715,116z M-715,36
                                            c-21,0-38,17-38,38s17,38,38,38s38-17,38-38S-694,36-715,36z"/>
                                        </g>
                                        <g>
                                            <path d="M-688.5,75h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S-687.9,75-688.5,75z M-715.5,50c-0.6,0-1-0.4-1-1v-2
                                            c0-0.6,0.4-1,1-1s1,0.4,1,1v2C-714.5,49.6-714.9,50-715.5,50z M-715.5,98c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2
                                            C-716.5,98.4-716.1,98-715.5,98z M-740.2,75h-2.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h2.3c0.6,0,1,0.4,1,1S-739.6,75-740.2,75z"/>
                                        </g>
                                    </g>
                                    <g id="loading-needles">
                                        <path d="M-708.6,67.5c-1.9-1.9-4.3-2.7-6.8-2.6L-696,55l-10,19.5C-705.9,72-706.7,69.5-708.6,67.5z"/>
                                        <path d="M-710,69c2.7,2.7,2.7,7.2,0,9.9s-7.2,2.7-9.9,0c-2.7-2.7-2.7-7.2,0-9.9C-717.2,66.3-712.8,66.2-710,69z"/>
                                        <path d="M-714.5,83L-734,93l10-19.4c-0.1,2.4,0.8,4.9,2.6,6.8C-719.5,82.2-717,83-714.5,83z"/>
                                    </g>
                                </svg>
                        </div>
                    </div></div>
            
              
                <header id="header" className="header">
            
                <div className="header-wrapper">
                    <a href="#" className="header-logo change-page">
                       <img src="front/img/logo.png" height="100px"  />
                    </a>
            
                  
                    <div className="header-top">
                        <div className="header-top-item header-top-item-newsletter">
                            <svg className="icon icon-mail">	<use xlinkHref="#mail" /></svg> <span>Newsletter</span>
                        </div>
                        <a href="https://espace-client.66nord.com/users/login" className="header-top-item change-page header-top-item-client" target="_blank">
                            <svg className="icon icon-client">	<use xlinkHref="#client" /></svg> <span>Espace client</span>
                        </a>
                        <a href="contact.html" className="header-top-item change-page header-top-item-contact">
                            <svg className="icon icon-tel">	<use xlinkHref="#tel" /></svg> <span>Contact</span>
                        </a>
                        <div className="header-top-item header-top-phone">04 27 18 61 20</div>
                    </div>
            
                   
                    <nav id="main-nav" className="header-nav" style={{position: "fixed"}}>
                        <div className="header-nav-item" data-link-id="destination">
                            <div className="header-nav-item-inner">
                                Event
                            </div>
                        </div>
                        <div className="header-nav-item" data-link-id="activity">
                            <div className="header-nav-item-inner">
                                Food & Beverages
                            </div>
                        </div>
                        <a href="organiser-vacances/voyage-accompagne.html" className="header-nav-item" data-link-id="accompagne">
                            <div className="header-nav-item-inner">
                                Spa & Wellness
                            </div>
                        </a>
                        <a href="organiser-vacances/voyage-individuel-sur-mesure.html" className="header-nav-item" data-link-id="sur-mesure">
                            <div className="header-nav-item-inner">
                                Lifestyle
                            </div>
                        </a>
                        <a href="organiser-vacances/voyage-croisiere.html" className="header-nav-item" data-link-id="croisiere">
                            <div className="header-nav-item-inner">
                                Fsahion
                            </div>
                        </a>
                        <div className="header-nav-item" data-link-id="team">
                            <div className="header-nav-item-inner">
                               Resource
                            </div>
                        </div>
                    </nav>
                </div>
            
                <div className="header-burger-bt burger-bt">
                    <div className="burger-bt-inner">
                        <span></span>
                    </div>
                </div>
            
                <div className="header-subs">
            
                  
                    <div className="header-sub header-sub-destination" data-link-id="destination">
                        <div className="header-sub-bg">
                        
                                                <div className="header-sub-bg-item img-lazyload-container" data-id="spitzberg">
                                    <img className="img-lazyload" data-lazyload="true" src="../photos.altai-travel.com/1080x585/kayak-de-mer-parmi-les-icebergs-2450.jpg"
                                         data-width="1080" data-height="585" width="100%" alt="Kayak de mer parmi les icebergs, Arctique, Svalbard" title="Kayak de mer parmi les icebergs - &copy; Roche Sébastien" />
                                </div>
                                                <div className="header-sub-bg-item img-lazyload-container" data-id="suede">
                                    <img className="img-lazyload" data-lazyload="true" src="../photos.altai-travel.com/1080x585/iles-de-suede-1214.jpg"
                                         data-width="1080" data-height="585" width="100%" alt="Îles de Suède" title="Îles de Suède - &copy; Flobrant Jon" />
                                </div>
                                        </div>
                        <div className="header-sub-wrapper header-sub-destination-wrapper">
                            <div className="header-sub-container header-sub-destination-container">
                                <div className="header-sub-destination-item header-burger-back">
                                    Nos Destinations <span>Nos voyages</span>
                                </div>
                                                      
                                                      
                                                        <a href="pays/voyage-spitzberg/298.html" className="header-sub-item header-sub-destination-item" data-id="spitzberg">
                                        <span className="header-sub-destination-item-inner">Spitzberg</span>
                                        <span className="header-sub-destination-item-hover" data-label="Spitzberg"></span>
                                    </a>
                                                        <a href="pays/voyage-suede/302.html" className="header-sub-item header-sub-destination-item" data-id="suede">
                                        <span className="header-sub-destination-item-inner">Suède</span>
                                        <span className="header-sub-destination-item-hover" data-label="Suède"></span>
                                    </a>
                                                </div>
                        </div>
                    </div>
            
                  
                    <div className="header-sub header-sub-activity" data-link-id="activity">
                        <div className="header-sub-bg">
                            
                                                <div className="header-sub-bg-item img-lazyload-container" data-id="ski">
                                    <img className="img-lazyload" src="front/photos.altai-travel.com/1080x585/randonnee-ski-au-svalbard-lhiver-1442.jpg"
                                         data-width="1080" data-height="585" width="100%" alt="Randonnée ski au Svalbard l'hiver" title="Randonnée ski au Svalbard l'hiver - &copy; Picture Oc" />
                                </div>
                                                <div className="header-sub-bg-item img-lazyload-container" data-id="trek">
                                    <img className="img-lazyload"  src="front/photos.altai-travel.com/1080x585/trek-a-landmannalaugar-islande-219.jpg"
                                         data-width="1080" data-height="585" width="100%" alt="Trek à Landmannalaugar, Islande" title="Trek à Landmannalaugar, Islande - &copy; Bertrand Laurine" />
                                </div>
                                        </div>
                        <div className="header-sub-wrapper">
                            <div className="header-sub-container header-sub-activity-container">
                                <div className="header-sub-activity-item header-burger-back">
                                    Nos Activités <span>&amp; thématiques</span>
                                </div>
                                               
                                                      
                                                        <a href="activites-vacances/voyage-ski/14.html" className="header-sub-item header-sub-activity-item" data-id="ski">
                                        <span className="header-sub-activity-item-icon"><svg className="icon icon-ski">	<use xlinkHref="#ski" /></svg></span>
                                        <span className="header-sub-activity-item-txt">Ski</span>
                                    </a>
                                                        <a href="activites-vacances/voyage-trek/15.html" className="header-sub-item header-sub-activity-item" data-id="trek">
                                        <span className="header-sub-activity-item-icon"><svg className="icon icon-trek">	<use xlinkHref="#trek" /></svg></span>
                                        <span className="header-sub-activity-item-txt">Trek</span>
                                    </a>
                                                </div>
                        </div>
                    </div>
            
                   
                    <div className="header-sub header-sub-voyages" data-link-id="accompagne">
                        <div className="header-sub-bg">
                            <div className="header-sub-bg-item img-lazyload-container">
                                <img className="img-lazyload" data-lazyload="true" src="../photos.altai-travel.com/1080x585/voyage-en-groupe-en-arctique-spitzberg-svalbard-2310.jpg"
                                     data-width="1080" data-height="585" width="100%" alt="Voyage en groupe en Arctique, Spitzberg, Svalbard" title="Voyage en groupe en Arctique, Spitzberg, Svalbard - &copy; Yannick Long" />
                            </div>
                        </div>
                        <div className="header-sub-wrapper">
                            <div className="header-sub-container">
                                <div className="header-sub-voyages-left img-lazyload-container">
                                    <img className="img-lazyload" src="front/img/others/header/illu-accompagne.png" width="100%" alt="Voyages accompagnés - 66° Nord" />
                                </div>
                                <div className="header-sub-voyages-right">
                                    <div className="header-sub-voyages-right-top">
                                        <h2 className="header-sub-voyages-right-title header-title">Voyages <br/>accompagnés</h2>
                                        <h4 className=" header-subtitle">Selon vos envies et votre niveau, choisissez l&#039;aventure qui vous ressemble.</h4>
                                        <p className="header-sub-voyages-right-txt header-txt">
                                            Avec votre accompagnateur 66° Nord, spécialiste des régions que vous découvrez, vous entrez en toute sécurité dans l&#039;intimité du Grand Nord.
                                        </p>
                                    </div>
                                    <a href="organiser-vacances/voyage-accompagne.html" className="header-sub-item button button-white buton-large header-sub-voyages-bt">
                                        Découvrir
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-sub header-sub-voyages" data-link-id="sur-mesure">
                        <div className="header-sub-bg">
                            <div className="header-sub-bg-item img-lazyload-container">
                                <img className="img-lazyload"  src="front/photos.altai-travel.com/1080x585/vue-sur-la-baie-de-disko-groenland-2556.jpg"
                                     data-width="1080" data-height="585" width="100%" alt="Vue sur la baie de Disko, Groenland" title="Vue sur la baie de Disko, Groenland - &copy; Guillôme Alisson" />
                            </div>
                        </div>
                        <div className="header-sub-wrapper">
                            <div className="header-sub-container">
                                <div className="header-sub-voyages-left img-lazyload-container">
                                    <img className="img-lazyload" data-lazyload="true" src="front/img/others/header/illu-sur-mesure.png" width="100%" alt="Voyages sur mesure &lt;br&gt;&amp; individuels - 66°Nord" />
                                </div>
                                <div className="header-sub-voyages-right">
                                    <div className="header-sub-voyages-right-top">
                                        <h2 className="header-sub-voyages-right-title header-title">Voyages sur mesure <br/>& individuels</h2>
                                        <h4 className=" header-subtitle">En couple, en famille, entre amis, vous voyagez selon votre rythme et votre style.</h4>
                                        <p className="header-sub-voyages-right-txt header-txt">
                                            Partez l&#039;esprit libre avec une organisation fiable. Fins connaisseurs du Grand Nord, nos spécialistes vous conseillent. Itinéraires, logistique, réservations... Nous nous occupons de tout !
                                        </p>
                                    </div>
                                    <a href="organiser-vacances/voyage-individuel-sur-mesure.html" className="header-sub-item button button-white buton-large header-sub-voyages-bt">
                                        Découvrir
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-sub header-sub-voyages" data-link-id="croisiere">
                        <div className="header-sub-bg">
                            <div className="header-sub-bg-item img-lazyload-container">
                                <img className="img-lazyload" src="front/photos.altai-travel.com/1080x585/voyage-voilier-croisiere-au-groenland-2355.jpg"
                                     data-width="1080" data-height="585" width="100%" alt="Voyage voilier, croisière au Groenland" title="Voyage voilier, croisière au Groenland - &copy; Lifesong Sailing"/>
                            </div>
                        </div>
                        <div className="header-sub-wrapper">
                            <div className="header-sub-container">
                                <div className="header-sub-voyages-left img-lazyload-container">
                                    <img className="img-lazyload" src="front/img/others/header/illu-croisiere.png" width="100%" alt="Croisières polaires - 66°Nord" />
                                </div>
                                <div className="header-sub-voyages-right">
                                    <div className="header-sub-voyages-right-top">
                                        <h2 className="header-sub-voyages-right-title header-title">Croisières polaires</h2>
                                        <h4 className=" header-subtitle">En Arctique ou en Antarctique, embarquez sur nos bateaux d&#039;expédition pour vivre une aventure unique en mer polaire.</h4>
                                        <p className="header-sub-voyages-right-txt header-txt">
                                            Sur les traces de Jean-Baptiste Charcot, vous explorez l&#039;univers polaire, observez la faune, écoutez le silence rompu par le fracas de la banquise.
                                        </p>
                                    </div>
                                    <a href="" className="header-sub-item button button-white buton-large header-sub-voyages-bt">
                                        Découvrir
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            
                  
                    <div className="header-sub header-sub-equipe" data-link-id="team">
                        <div className="header-sub-bg">
                            <div className="header-sub-bg-item img-lazyload-container">
                                <img className="img-lazyload" src="front/photos.altai-travel.com/1080x585/equipe-islande-66-nord-153.jpg"
                                     data-width="1080" data-height="585" width="100%" alt="Equipe Islande 66°Nord" title="Equipe Islande 66°Nord - &copy; De Fréminville Caroline" />
                            </div>
                        </div>
                        <div className="header-sub-wrapper">
                            <div className="header-sub-container header-sub-equipe-container">
                                <div className="header-sub-equipe-item header-burger-back">
                                    L’équipe <span>Qui sommes-nous ?</span>
                                </div>
                                <div className="header-sub-equipe-item">
                                    <h2 className="header-sub-equipe-title header-title">Qui sommes-nous ?</h2>
                                    <h4 className="header-sub-equipe-sub header-subtitle">Les bonnes raisons de partir avec 66° Nord</h4>
                                    <p className="header-sub-equipe-txt header-txt">
                                        Implanté sur chacune de nos destinations, avec nos différents camps de base, 66°Nord conçoit sans intermédiaire de A à Z ses voyages. En faisant appel à nous, c’est la garantie d’être en contact direct  avec l’équipe de terrain.
                                    </p>
                                    <a href="a-propos.html" className="header-sub-item button button-white header-sub-equipe-bt">
                                        <span>Nous connaitre</span>
                                    </a>
                                </div>
                                <div className="header-sub-equipe-item">
                                    <h2 className="header-sub-equipe-title header-title">L’équipe</h2>
                                    <h4 className="header-sub-equipe-sub header-subtitle">Être spécialiste des destinations polaires, ça ne s’invente pas !</h4>
                                    <p className="header-sub-equipe-txt header-txt">
                                        Alors chez 66° Nord, nous accordons une importance toute particulière et fondamentale à un principe : « on ne parle bien que de ce que l’on connaît ».
                                    </p>
                                    <a href="equipe.html" className="header-sub-item button button-white header-sub-equipe-bt">
                                        <span>Voir notre équipe</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </header>
              
                <div id="page-container">
            
                   
                    <section id="page" className="home" data-js-id="home" data-title="66°Nord, le Spécialiste des voyages polaires | 66° Nord">
            
               
                <section className="home-head page-head observable">
                              
                                <div className="page-head-bg home-head-bg img-lazyload-container">
                            <img className="img-lazyload" src="front/photos.altai-travel.com/1920x1040/kayak-devant-un-iceberg-au-groenland-2549.jpg"
                                 data-width="1920" data-height="1040" alt="Kayak devant un iceberg au Groenland" title="Kayak devant un iceberg au Groenland - &copy; Legain Clément"/>
                        </div>
                                <div className="page-head-bg home-head-bg img-lazyload-container">
                            <img className="img-lazyload" src="front/photos.altai-travel.com/1920x1040/volcans-du-kamtchatka-1578.jpg"
                                 data-width="1920" data-height="1040" alt="Volcans du Kamtchatka" title="Volcans du Kamtchatka - &copy; Shutter Stock"/>
                        </div>
                    
                    <div className="page-head-container">
                        <div className="home-head-slider" id="home-head-slider" data-total="2">
                                                <div className="home-head-slide active">
                                    <div className="home-head-slide-inner">
                                        <div className="home-head-slide-title">
                                            <div className="home-head-slide-title-sub"><span>Where to go</span></div>
                                            <h2 className="home-head-slide-title-main">Destination</h2>
                                        </div>
                                                                      
                                                                    <a href="avis-clients.html" className="button button-white home-head-slide-bt change-page">Explore more</a>
                                    </div>
                                </div>
                                              
                                                <div className="home-head-slide ">
                                    <div className="home-head-slide-inner">
                                        <div className="home-head-slide-title">
                                            <div className="home-head-slide-title-sub"><span>Where to go</span></div>
                                            <h2 className="home-head-slide-title-main">Destination</h2>
                                        </div>
                                                                    <a href="pays/voyage-norvege/238.html" className="button button-white home-head-slide-bt change-page">Explore more</a>
                                    </div>
                                </div>
                                                <div className="home-head-slide ">
                                    <div className="home-head-slide-inner">
                                        <div className="home-head-slide-title">
                                            <div className="home-head-slide-title-sub"><span>Where to go</span></div>
                                            <h2 className="home-head-slide-title-main">Destination</h2>
                                        </div>
                                                                    <a href="pays/voyage-groenland/145.html" className="button button-white home-head-slide-bt change-page">Explore more</a>
                                    </div>
                                </div>
                                               
                            
                            <div className="home-head-slider-nav">
                                <div className="home-head-slider-nav-item home-head-slider-nav-item-prev" id="home-head-slider-prev">
                                    <span className="home-head-slider-nav-item-inner"></span>
                                </div>
                                <div className="home-head-slider-nav-item home-head-slider-nav-item-next" id="home-head-slider-next">
                                    <span className="home-head-slider-nav-item-inner"></span>
                                </div>
                            </div>
            
                        </div>
                    </div>
            
                   
                    <div className="slider-progress home-head-slider-progress" id='home-head-slider-progress'>
                        <div className="slider-progress-inner"></div>
                    </div>
                </section>
                </section>
                </div>
            
            
            
            
                <section className="home-filters no-events" data-json-travels="/organiser-vacances/filtres.json">
            
              
                    <div className="home-filters-mobile-button">
                        <div className="home-filters-mobile-button-icon">
                            <svg className="icon icon-filtres">	<use xlinkHref="#filtres" /></svg>
                        </div>
                        <div className="home-filters-mobile-button-txt">Rechercher</div>
                    </div>
            
                    <div className="home-filters-bar">
            
                        
                       
            
                        
                        <div className="home-filters-burger-head">
                            <div className="home-filters-burger-head-txt">
                                <div className="home-filters-burger-head-title">Filtres</div>
                                <div className="home-filters-burger-head-selection">
                                    <span>(0)</span> sélectionnés
                                </div>
                            </div>
                            <div className="home-filters-burger-head-bt burger-bt">
                                <div className="burger-bt-inner">
                                    <span></span>
                                </div>
                            </div>
                        </div>
            
                        <form className="home-filters-form" method="get">
            
                            
                            <div className="home-filters-search-bar">
                                <div className="home-filters-search-bar-inner">
                                    <div className="home-filters-item home-filters-search">
                                        <svg className="icon icon-search">	<use xlinkHref="#search" /></svg>
                                    </div>
                                    <div className="home-filters-search-bar-input">
                                        <input type="text" name="search" placeholder="Tapez votre recherche ici" />
                                    </div>
                                    <div className="home-filters-search-bar-close">
                                       
                                    </div>
                                </div>
                            </div>
            
                           
                            <div className="home-filters-line home-filters-line-first">
                                <div className="home-filters-item home-filters-destination">
                                    <select name="destination" className="selectpicker" data-visible="6" title="Destination" data-select-id="0" data-filter-id="0">
                                        <option value="">Peu importe</option>
                                                                        <option value="38">Alaska</option>
                                                                        <option value="45">Antarctique</option>
                                                                        <option value="86">Canada</option>
                                                                        <option value="134">Finlande</option>
                                                                        <option value="145">Groenland</option>
                                                                        <option value="160">Iles Feroe</option>
                                                                        <option value="170">Islande</option>
                                                                        <option value="238">Norvège</option>
                                                                        <option value="278">Russie</option>
                                                                        <option value="298">Spitzberg</option>
                                                                        <option value="302">Suède</option>
                                                                </select>
                                </div>
                                <div className="home-filters-item home-filters-type">
                                    <select name="type" className="selectpicker" data-visible="4" title="Type de voyage" data-select-id="1" data-filter-id="1">
                                        <option value="">Peu importe</option>
                                                                        <option value="1">Voyage accompagné</option>
                                                                        <option value="2">Individuel &amp; sur-mesure</option>
                                                                        <option value="3">Croisière</option>
                                                                </select>
                                </div>
                                <div className="home-filters-item home-filters-activity">
                                    <select name="theme" className="selectpicker" data-visible="6" title="Activités &amp; thématiques" data-select-id="2" data-filter-id="2">
                                        <option value="">Peu importe</option>
                                                                        <option value="1">Aurores boréales</option>
                                                                        <option value="2">Autotour</option>
                                                                        <option value="3">Canoë</option>
                                                                        <option value="4">Chien de traîneau</option>
                                                                        <option value="5">Croisière &amp; voile</option>
                                                                        <option value="6">Famille</option>
                                                                        <option value="7">Multi-activités</option>
                                                                        <option value="8">Observation animalière</option>
                                                                        <option value="9">Photo</option>
                                                                        <option value="11">Rando Kayak</option>
                                                                        <option value="10">Randonnée</option>
                                                                        <option value="12">Raquettes</option>
                                                                        <option value="13">Réveillon</option>
                                                                        <option value="14">Ski</option>
                                                                        <option value="15">Trek</option>
                                                                </select>
                                </div>
                                <div className="home-filters-item home-filters-more">
                                    <svg className="icon icon-plus">	<use xlinkHref="#plus" /></svg>
                                </div>
                            </div>
            
                            <div className="home-filters-line home-filters-line-second">
                                <div className="home-filters-item home-filters-level">
                                    <select name="level" className="selectpicker" data-visible="5" title="Niveau" data-select-id="3" data-filter-id="3">
                                        <option value="">Peu importe</option>
                                                                        <option value="1">Très facile</option>
                                                                        <option value="2">Facile</option>
                                                                        <option value="3">Modéré</option>
                                                                        <option value="4">Soutenu</option>
                                                                        <option value="5">Engagé</option>
                                                                </select>
                                </div>
                                <div className="home-filters-item home-filters-start">
                                    <select name="month" className="selectpicker" data-visible="6" title="Mois de départ" data-select-id="4" data-filter-id="4">
                                        <option value="">Peu importe</option>
                                                                        <option value="1">janvier</option>
                                                                        <option value="2">février</option>
                                                                        <option value="3">mars</option>
                                                                        <option value="4">avril</option>
                                                                        <option value="5">mai</option>
                                                                        <option value="6">juin</option>
                                                                        <option value="7">juillet</option>
                                                                        <option value="8">août</option>
                                                                        <option value="9">septembre</option>
                                                                        <option value="10">octobre</option>
                                                                        <option value="11">novembre</option>
                                                                        <option value="12">décembre</option>
                                                                </select>
                                </div>
                                <div className="home-filters-item home-filters-duration">
                                    <div className="dropdown dropdown-filters-duration dropup">
                                        <button className="btn btn-primary dropdown-toggle" type="button">
                                            <span className="pull-left">Durée du séjour</span>
                                            <span className="filter-mobile-title hidden">Durée du séjour</span>
                                        </button>
                                        <input className="input-filters-duration-min" type="text" name="duration-min" data-filter-id="5" />
                                        <input className="input-filters-duration-max" type="text" name="duration-max" data-filter-id="5" />
                                        <div className="dropdown-menu open">
                                            <div className="dropdown-menu inner">
                                                <div className="home-filters-duration-slider" data-min="4" data-max="30">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-filters-item home-filters-confirm">
                                    <select name="guaranteed" className="selectpicker" data-visible="6" title="Départ confirmé" data-select-id="5" data-filter-id="6">
                                        <option value="">Peu importe</option>
                                        <option value="1">Oui</option>
                                        <option value="0">Non</option>
                                    </select>
                                </div>
                            </div>
            
                          
        
                          
                            <div className="home-filters-item hover-bg-blue home-filters-submit">
                                <input type="submit" className="home-filters-button" value="" />
                                <div className="home-filters-submit-validate">Valider</div>
                                <div className="home-filters-submit-nbresults"></div>
                            </div>
            
                        </form>
            
                    </div>
            
                </section>
            
            
            
          
                <section className="home-selection observable">
                   
                    <div className="slider-selection observable">
            
                        <h2 className="slider-selection-top">
                            <span className="title-sub">For You</span>
                            <span className="title-1">Our Selection</span>
            
                        </h2>
                        <p className="text-center" style={{marginLeft:"573px", color: "black"}}>Curated lists of traveller's recommendation</p>

                        <div className="slider-selection-tab">
                            <div className="dropdown dropdown-mobile">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><span className="caret"></span><span className="btn-inner">Nos inspirations</span></button>
                                <div className="dropdown-menu open">
                                   
                                </div>
                            </div>
                        </div>
            
                        <div className="slider-container" id="slider-selection">
            

                            <div className="slider-nav">
                                <div className="slider-nav-container">
                                    <div className="slider-nav-buttons">
                                        <div className="slider-nav-item slider-nav-item-next" id="slider-selection-next">
                                            <div className="slider-nav-item-icon-container"><br/>
                                               <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="slider-nav-item slider-nav-item-prev" id="slider-selection-prev">
                                            <div className="slider-nav-item-icon-container"><br/>
                                                <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="slider-nav-pagination">
                                        <span className="slider-nav-page">01</span>
                                        <span className="slider-nav-total">01</span>
                                    </div>
                              
                                    <div className="slider-progress slider-nav-progress" id='slider-selection-progress'>
                                        <div className="slider-progress-inner"></div>
                                    </div>	</div>
                            </div>
            
                                                <div className="slider-selection-slides active" id="slider-selection-tab1" data-id="tab1" data-total="3">
                                                                
                                                           
                                        <div className="slider-selection-item" data-num="7">
                                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                                <div className="slider-selection-card-img img-lazyload-container">
                                                    <img className="img-lazyload" src="front/img/one.jpg" />
                                                </div>
                                                <div className="slider-selection-card-content">
                                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                                    <br/><br/>
                                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                                   
                                                </div>
                                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                                    <span>Read more</span>
                                                </div>
                                            </a>
                                        </div>
                                                                
                                        <div className="slider-selection-item" data-num="8">
                                            <a href="vacances-spitzberg/voyage-texas-bar/ENSPTEX.html" className="slider-selection-card change-page">
                                                <div className="slider-selection-card-img img-lazyload-container">
                                                    <img className="img-lazyload" src="front/img/two.jpg" />
                                                </div>
                                                <div className="slider-selection-card-content">
                                                    <h4 className="slider-selection-card-title">Spitzberg</h4>
                                                    <br/><br/>
                                                    <p className="slider-selection-card-desc">Texas Bar</p>
                                                </div>
                                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                                    <span>Read more </span>
                                                </div>
                                            </a>
                                        </div>
                                                              
                                        <div className="slider-selection-item" data-num="9">
                                            <a href="vacances-islande/voyage-cote-sud-sauvage-et-hautes-terres-dislande/EISL8C2.html" className="slider-selection-card change-page">
                                                <div className="slider-selection-card-img img-lazyload-container">
                                                    <img className="img-lazyload" src="front/img/three.jpg" />
                                                </div>
                                                <div className="slider-selection-card-content">
                                                    <h4 className="slider-selection-card-title">Islande</h4>
                                                     <br/><br/>
                                                    <p className="slider-selection-card-desc">Côte sud sauvage et hautes terres d'Islande</p>
                                                </div>
                                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                                    <span>Read more</span>
                                                </div>
                                            </a>
                                        </div>
                                                        </div>
                            
            
                        </div>
                    </div></section>
            
            
            
                
                <section className="home-experts observable">
                    <div className="wrapper-960">
                        <h2 className="home-experts-top">
                            <span className="title-sub">Recommended</span>
                            <span className="title-1">Deals of The Day</span>
                        </h2>
                          <p className="text-center" style={{marginLeft:"290px", color: "black"}}>Save up to 70% on holiday packages and things to do</p>
            
                        <div className="home-experts-content">
                            <div className="home-experts-bg img-lazyload-container">
                                <img className="img-lazyload" src="front/img/ok.jpg" />
                            </div>
                          
                            <div className="home-experts-left">
                                <div className="home-experts-left-inner">
              <p className="title-sub-left" style={{color:"#96DAF0"}}>Nuse Penida</p>
                            <br/>
                                    <h4 className="title-2">Nusa Penida Day Tour</h4>
                                    <div className="home-experts-left-txt txt">Official The Trippy Trip from $199 AUD<br/>
            Nous nous occupons de tout.</div>
                                    <a href="demander-un-devis.html" className="button button-icon home-experts-left-button change-page"><span>Book Now</span></a>
                                </div>
                            </div>
                            <div className="home-experts-right">
                                <div className="home-experts-slider" id="home-experts-slider" data-total="3">
                                                                <div className="home-experts-slide active">
                                            <a href="#" className="home-experts-slide-img change-page">
                                                <div className="home-experts-slide-img-inner">
                                                  
                                                    <img className="img-lazyload" src="front/img/three.jpg"/>
                                                </div>
                                            </a>
                                           
                                        </div>
                                                               
                                                              
                                                                <div className="home-experts-slide ">
                                            <a href="equipe/alisson-guillome/9.html" className="home-experts-slide-img change-page">
                                                <div className="home-experts-slide-img-inner">
                                                  
                                                    <img className="img-lazyload" src="front/img/three.jpg" />
                                                </div>
                                            </a>
                                            <h5 className="home-experts-slide-name title-4"> </h5>
                                            <div className="home-experts-slide-specialities">
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                </div>
                                            <div className="home-experts-slide-desc"></div>
                                        </div>
                                                                <div className="home-experts-slide ">
                                            <a href="equipe/emmanuelle-revol/11.html" className="home-experts-slide-img change-page">
                                                <div className="home-experts-slide-img-inner">
                                                  
                                                   <img className="img-lazyload" src="front/img/three.jpg" />
                                                </div>
                                            </a>
                                            <h5 className="home-experts-slide-name title-4"> </h5>
                                            <div className="home-experts-slide-specialities">
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                        <div className="home-experts-slide-specialities-item"></div>
                                                                                </div>
                                            <div className="home-experts-slide-desc"></div>
                                        </div>
                                                            <div className="home-experts-slider-nav">
                                                                        <div className="home-experts-slider-nav-item active" data-id="1"></div>
                                                                        <div className="home-experts-slider-nav-item " data-id="2"></div>
                                                                        <div className="home-experts-slider-nav-item " data-id="3"></div>
                                                                       
                                                                </div>
                                </div>
                            </div>
            
                        </div>
            
                    </div>
            
                </section>
            
              
            
                <div className="row">
                    <div className="col" style={{marginLeft: "150px", marginTop: "100px"}}>
                        <section className="home-map observable">
            
            
            
                    <div className="home-map-bg img-lazyload-container">
                        <img className="img-lazyload" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
                    </div>
            
                  
            
            
                    <div className="wrapper-960">
                        <div className="home-map-content">
                          <div className="slider-selection-item" data-num="7">
                                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                                <div className="slider-selection-card-img img-lazyload-container">
                                                    <img className="img-lazyload" src="front/img/one.jpg" />
                                                </div>
                                                <div className="slider-selection-card-content">
                                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                                    <br/><br/>
                                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                                     <div style={{marginTop: "60px"}}>
                                                    <p><span style={{color:"#80c7de"}}>canggu </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$105 AUD</b></p>
                                                </div>
                                                </div>
                                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                                    <span>Book Now</span>
                                                </div>
                                            </a>
                                        </div>
                        </div>
                    </div>
                        </section>
                        </div>
                    </div>
            
                <div className="col" style={{marginLeft: "600px", marginTop: "-400px"}}>
                        <section className="home-map observable">
            
            
            
                    <div className="home-map-bg img-lazyload-container">
                        <img className="img-lazyload" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
                    </div>
            
                  
            
            
                    <div className="wrapper-960">
                        <div className="home-map-content">
                          <div className="slider-selection-item" data-num="7">
                                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                                <div className="slider-selection-card-img img-lazyload-container">
                                                    <img className="img-lazyload" src="front/img/one.jpg" />
                                                </div>
                                                <div className="slider-selection-card-content text-center">
                                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                                    <br/><br/>
                                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                                       <div style={{marginTop: "60px"}}>
                                                    <p><span style={{color:"#80c7de"}}>canggu </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$105 AUD</b></p>
                                                </div>
                                                </div>
            
            
                                                   
                                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                                    <span>Book Now</span>
                                                </div>
                                            </a>
                                        </div>
                            
                            </div>
                        </div>
                    
                        </section>
                    </div>



                    </div>

<div className="col" style={{marginLeft: "1048px", marginTop: "-400px"}}>
<section className="home-map observable">



<div className="home-map-bg img-lazyload-container">
<img className="img-lazyload" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
</div>




<div className="wrapper-960">
<div className="home-map-content">
  <div className="slider-selection-item" data-num="7">
                    <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                        <div className="slider-selection-card-img img-lazyload-container">
                            <img className="img-lazyload" src="front/img/one.jpg"
                                />
                        </div>
                        <div className="slider-selection-card-content">
                            <h4 className="slider-selection-card-title">Groenland</h4>
                            <br/><br/>
                            <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                              <div style={{marginTop: "60px"}}>
                            <p><span style={{color:"#80c7de"}}>canggu </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$105 AUD</b></p>
                        </div>
                        </div>
                        <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                            <span>Book Now</span>
                        </div>
                    </a>
                </div>
    
    </div>
</div>


</section>

</div>   


<br/><br/>

    
    <section className="home-love observable">
       
        
        <div className="slider-progress home-love-slider-progress" id='home-love-slider-progress'>

        </div>
        <div className="footer-top-content" style={{textAlign: "center"}}>
            <p className="title-sub">What. When. Where. Why</p>
            <h5 className="footer-top-title" style={{fontSize: "100px"}}>The Trippy Trip</h5>
        </div>
    </section>

  
    <section className="home-review observable">
        <div className="wrapper-1440">
            

            <div className="slider-container" id="home-review-slider" data-total="3">

              
                <div className="slider-nav">
                    <div className="slider-nav-container">
                        <div className="slider-nav-buttons">
                            <div className="slider-nav-item slider-nav-item-next" id="home-review-slider-next">
                                <div className="slider-nav-item-icon-container">
                                    <span className="slider-nav-item-icon-1">
                                        <br/>
                                   <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </span>
                                    <span className="slider-nav-item-icon-2">
                                        <br/>
                                    <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-right" aria-hidden="true"></i>
                               </span>
                                </div>
                            </div>
                            <div className="slider-nav-item slider-nav-item-prev" id="home-review-slider-prev">
                                <div className="slider-nav-item-icon-container">
                                    <span className="slider-nav-item-icon-1">
                                        <br/>
                                    <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-left" aria-hidden="true"></i>
                               </span>
                                 
                                    <span className="slider-nav-item-icon-2">
                                         
                                        <br/>
                                    <i style={{color:"white", fontSize: "20px"}} className="fa fa-arrow-left" aria-hidden="true"></i>
                               </span>
                                
                                </div>
                            </div>
                        </div>

                        <div className="slider-nav-pagination">
                            <span className="slider-nav-page">01</span>
                            <span className="slider-nav-total">03</span>
                        </div>
                       
                        <div className="slider-progress slider-nav-progress" id='home-review-slider-progress'>
                            <div className="slider-progress-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="home-review-slider-slides">
                                            <div className="home-review-slider-item active">
                            <div className="home-review-slider-card">
                                <div className="home-review-slider-card-bg img-lazyload-container">
                                    <img className="img-lazyload" data-lazyload="true" src="photos.altai-travel.com/960x400/kayak-de-mer-parmi-les-icebergs-2450.jpg"
                                        alt="Kayak de mer parmi les icebergs, Arctique, Svalbard" title="Kayak de mer parmi les icebergs - &copy; Roche Sébastien" />
                                </div>
                                <div className="home-review-slider-card-map img-lazyload-container">
                                    <img width="100%" height="300px" src="front/img/three.jpg" alt=" - 66° Nord" />
                                </div>
                                <div className="home-review-slider-card-content">
                                                                            <div className="home-review-slider-card-stars">
                                            <div className="home-review-slider-card-star"><svg className="icon icon-star-full">	<use xlinkHref="#star-full" /></svg></div>
<div className="home-review-slider-card-star"><svg className="icon icon-star-full">	<use xlinkHref="#star-full" /></svg></div>
<div className="home-review-slider-card-star"><svg className="icon icon-star-full">	<use xlinkHref="#star-full" /></svg></div>
<div className="home-review-slider-card-star"><svg className="icon icon-star-full">	<use xlinkHref="#star-full" /></svg></div>
<div className="home-review-slider-card-star"><svg className="icon icon-star-full">	<use xlinkHref="#star-full" /></svg></div>
                                        </div>
                                                                       
                                    <p className="home-review-slider-card-travel">Spitzberg - Randonnée et kayak au pays des glaciers bleus</p>
                                    <p className="home-review-slider-card-txt">voyage exceptionnel pour la beauté des paysages, le rythme très particulier que donne la présence du jour permanent. On se sent hors du temps, face à soi même et à la nature.</p>
                                    <div className="home-review-slider-card-details">
                                                                                    <div className="home-review-slider-card-detail">
                                                <svg className="icon icon-kayak">	<use xlinkHref="#kayak" /></svg>
                                                Rando Kayak
                                            </div>
                                                                            </div>
                                </div>
                            </div>
                        </div>
                                          
                                           
                                       
                </div>
            </div>
        </div>
    </section>

    
    <section className="home-news observable">
        <div className="wrapper-1120">

            <h2 className="home-news-top">
                <span className="title-sub">Guides</span>
                <span className="title-1">Top Pick's</span>
                <span className="title-2" style={{marginLeft: "170px"}}>All of the latest news, stories and advice on bail</span>
            </h2> 
        </div>
    </section>


    <footer id="footer" className="footer">


<section className="footer-top">
    
    
    <div className="footer-top-nuages">
        <div className="footer-top-nuages-item footer-top-nuages-4 img-lazyload-container">
            <img className="img-lazyload" data-lazyload="true" src="front/img/others/footer/top/nuage-4-min.png" alt="Nuage" />
        </div>
        <div className="footer-top-nuages-item footer-top-nuages-3 img-lazyload-container">
            <img className="img-lazyload" data-lazyload="true" src="front/img/others/footer/top/nuage-3-min.png" alt="Nuage" />
        </div>
        <div className="footer-top-nuages-item footer-top-nuages-2 img-lazyload-container">
            <img className="img-lazyload" data-lazyload="true" src="front/img/others/footer/top/nuage-2-min.png" alt="Nuage" />
        </div>
        <div className="footer-top-nuages-item footer-top-nuages-1 img-lazyload-container">
            <img className="img-lazyload" data-lazyload="true" src="front/img/others/footer/top/nuage-1-min.png" alt="Nuage" />
        </div>
    </div>
    
</section>

<div className="wrapper-1120">


                   <div className="row">
    <div className="col" style={{marginLeft: "-80px", marginnTop: "-480px"}}>
        <section className="home-map observable">



    <div className="home-map-bg img-lazyload-container">
        <img className="img-lazyload" data-lazyload="true" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
    </div>

  


    <div className="wrapper-960">
        <div className="home-map-content">
          <div className="slider-selection-item" data-num="7">
                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                <div className="slider-selection-card-img img-lazyload-container">
                                    <img className="img-lazyload" src="front/img/one.jpg"
                                        />
                                </div>
                                <div className="slider-selection-card-content">
                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                    <br/><br/>
                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                    
                                </div>
                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </div>
            
            </div>
        </div>
        </section>
    </div></div>
        
    </div>

<div className="col" style={{marginLeft: "370px", marginTop: "-400px"}}>
    
        <section className="home-map observable">



    <div className="home-map-bg img-lazyload-container">
        <img className="img-lazyload" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
    </div>

  


    <div className="wrapper-960">
        <div className="home-map-content">
          <div className="slider-selection-item" data-num="7">
                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                <div className="slider-selection-card-img img-lazyload-container">
                                    <img className="img-lazyload" src="front/img/one.jpg"/>
                                </div>
                                <div className="slider-selection-card-content text-center">
                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                    <br/><br/>
                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                      
                                </div>


                                   
                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </div>
            
            </div>
        </div>
    
        </section>
    </div>


<div className="col" style={{marginLeft: "1048px", marginTop: "-400px"}}>
        <section className="home-map observable">



    <div className="home-map-bg img-lazyload-container">
        <img className="img-lazyload" data-lazyload="true" src="front/img/others/home/map/bg-map.jpg" alt="Paysage enneigé - 66°Nord" />
    </div>

  


    <div className="wrapper-960">
        <div className="home-map-content">
          <div className="slider-selection-item" data-num="7">
                            <a href="vacances-groenland/voyage-icebergs-de-la-baie-de-disko/EGROL8.html" className="slider-selection-card change-page">
                                <div className="slider-selection-card-img img-lazyload-container">
                                    <img className="img-lazyload" src="front/img/one.jpg"
                                        />
                                </div>
                                <div className="slider-selection-card-content">
                                    <h4 className="slider-selection-card-title">Groenland</h4>
                                    <br/><br/>
                                    <p className="slider-selection-card-desc">Icebergs de la Baie de Disko</p>
                                      
                                </div>
                                <div className="slider-selection-card-button" style={{backgroundColor: "black", color:"white"}}>
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </div>
            
            </div>
        </div>
        </section>
    </div>
        
    

<div className="horigantel" style={{borderTop: "2px solid black", width: "400px", marginLeft: "188px", marginTop: "80px"}}>
</div>
<span style={{fontSize: "20px", color:"white", backgroundColor: "black", padding: "13px 37px", marginLeft: "720px", marginTop: "-30px"}}>See More</span>
<div className="horigantel" style={{borderTop: "2px solid black", width: "400px", marginLeft: "63.5%", marginTop: "-20px"}}>
</div>



  <section className="home-news observable">
    <div className="wrapper-1120">

        <h2 className="home-news-top">
            <span className="title-sub">Sported</span>
            <span className="title-1">Our Partner</span>
            <span className="title-2" style={{marginLeft: "400px", fontSize: "20px"}}>Working with leadres in the industry</span>
        </h2>

        
        
    </div>
</section><br/><br/>

    
    
  <section className="footer-partners">
        
        <div className="footer-partners-items">
             <a href="#" target="_blank" className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/1.PNG" alt="Atalante - Partenaire 66°Nord" />
            </a>
            <a href="#" target="_blank" className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/2.PNG" alt="Atalante - Partenaire 66°Nord" />
            </a>
            <a href="#" target="_blank" className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/3.PNG" alt="Humans - Partenaire 66°Nord" />
            </a>
            <a href="#" target="_blank" className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/4.PNG" alt="Stagexpe - Partenaire 66°Nord" />
            </a>
            <div className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/5.PNG" alt="Altai - Partenaire 66°Nord" />
            </div>
            <div className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/6.PNG" alt="Altai - Partenaire 66°Nord" />
            </div>
            <div className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/7.PNG" alt="Altai - Partenaire 66°Nord" />
            </div>
            <div className="footer-partners-item img-lazyload-container loaded">
                <img className="img-lazyload"  src="front/img/8.PNG" alt="Altai - Partenaire 66°Nord" />
            </div>
        </div>
    </section>

    
    <section className="footer-map" style={{backgroundColor: "#242A3A", height: "550px"}}>
        <div className="footer-map-col">
            <div className="footer-map-col-title title-5" style={{color:"white"}}>Our Partners</div>
            <div className="col-md-4" style={{color:"white"}}>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Amed</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Condidasa</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Canggu</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Denpaser</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Gili Island</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Jimbaran</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Kuta</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Lagien</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Lembongan</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Lombok</a>
                                <a style={{color:"white"}} href="#" className="footer-map-col-link change-page txt">Lovina</a>
                                
                        </div>
                    </div>
        <div className="footer-map-col">
            <div className="footer-map-col-title title-5" style={{color:"white"}}> Other Stuff</div>
                                <a href="activites-vacances/voyage-aurores-boreales/1.html" className="footer-map-col-link change-page txt"></a>
                                <a href="activites-vacances/voyage-autotour/2.html" className="fo
                                oter-map-col-link change-page txt" style={{color:"white"}}>Autotour</a>
                                <a href="activites-vacances/voyage-canoe/3.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Canoë</a>
                                <a href="activites-vacances/voyage-chien-de-traineau/4.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Chien de traîneau</a>
                                <a href="activites-vacances/voyage-croisiere-voile/5.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Croisière &amp; voile</a>
                                <a href="activites-vacances/voyage-famille/6.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Famille</a>
                                <a href="activites-vacances/voyage-multi-activites/7.html" className="footer-map-col-link change-page txt"style={{color:"white"}}>Multi-activités</a>
                                <a href="activites-vacances/voyage-observation-animaliere/8.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Observation animalière</a>
                                <a href="activites-vacances/voyage-photo/9.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Photo</a>
                                <a href="activites-vacances/voyage-rando-kayak/11.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Rando Kayak</a>
                                <a href="activites-vacances/voyage-randonnee/10.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Randonnée</a>
                                <a href="activites-vacances/voyage-raquettes/12.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Raquettes</a>
                                <a href="activites-vacances/voyage-reveillon/13.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Réveillon</a>
                                <a href="activites-vacances/voyage-ski/14.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Ski</a>
                                <a href="activites-vacances/voyage-trek/15.html" className="footer-map-col-link change-page txt" style={{color:"white"}}>Trek</a>
                        </div>


        <div className="footer-map-col">
            <div className="footer-map-col-title title-5" style={{color:"white"}}>Subscribe</div>
           
            <div>
                <form action="" className="footer-newsletter-form" method="post" noValidate="">
                 <input type="text" placeholder="Email" className="form-control"/>
                </form>
            </div>

           
            <div className="line" style={{borderTop: "2px solid white", marginTop: "400px", marginLeft: "-250%", width: "1200px"}}></div>
            <img src="front/img/logo.png" height="100px" style={{marginLeft: "-150%"}} />
          

</div>
</section>

</footer>
<div id="cookie">
       
    </div>

  

       </React.Fragment>
        )
    }
}
