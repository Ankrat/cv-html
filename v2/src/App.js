import React from 'react';

import './App.css';

const App = () => {

    return (
        <div>

            <header className="mod-brand">
                <div className="title">
                <h1>Yann Le Corre</h1>
                <h2>Front End Developer</h2>
                </div>
                <div className="contact">
                <p>4, Wickham road</p>
                <p>SE4 1PB, LONDON</p>
                <p>y.lecorre.mail@gmail.com</p>
                <p>Tel: +44 741 296 1516</p>
                </div>
            </header>

            <div className="main">
                <section className="introduction">
                <div className="profile">
                    <h4>About me</h4>
                    <p>I am able to develop <strong>fully responsive websites</strong> using media queries and flexible layouts and I have built <strong>HTML5 applications</strong> with <strong>Titanium</strong> and <strong>PhoneGap</strong> ( Cordova ).</p>
                    <p> Also, I have experience using <strong>CSS code pre-processors</strong> such as SASS and Less. Today, I am looking to join a team in which I could strengthen my skills, including working on projects using <strong>Backbone.js</strong>/<strong className="future">Angular.js</strong>, <strong className="future">Node.js</strong> and opportunities to create awesome interactions with <strong className="future">canvas</strong> and <strong className="future">webGL</strong>.</p>
                </div>

                <div className="skills">
                    <h4>Technical Exposure</h4>
                    <ul>
                    <li className="head-line"><p className="sk divider">Key skills</p></li>
                    <li>HTML5<p className="sk html5"></p></li>
                    <li>CSS3 (Less-SASS)<p className="sk css3"></p></li>
                    <li>jQuery - RequireJS - BackboneJS <p className="sk js"></p></li>
                    <li>Responsive Web Design<p className="sk rwd"></p></li>
                    <li>Flash (AS3)<p className="sk as3"></p></li>
                    <li className="head-line"><p className="sk divider">Environment</p></li>
                    <li>CMSes / Umbraco, Kentico, Sharepoint (ASP / C#)<p className="sk cms"></p></li>
                    <li>Blog platforms / Wordpress, Drupal, Joomla (PHP / MySQL)<p className="sk php"></p></li>

                    </ul>
                </div>
                </section>

                <section className="employement">
                <header><h3>Employement</h3></header>
                <div className="position">
                    <p className="date"><span>April 2011 - present</span>, <span className="company">Skyron</span>, London (skyron.co.uk)</p>
                    <p className="desc">Skyron develops various digital solutions, websites, responsive websites and mobile applications.</p>
                    <p>I was responsible for all front end coding, assuring the integrity of the design cross browsers and platforms.</p>
                    <p>The projects I work on include redesigns, CMS integrations ( Umbraco, Kentico, Sharepoint, Drupal, Wordpress ) and building bespoke solutions.</p>
                    <p>I initiated the evolution of the workflow, bringing a mobile first approach, pre-processor&rsquo;s technologies (SASS, Compass) and pointed out the performance issues regarding images optimization / javascript and http requests. As a result, Skyron is using sprites or icon-fonts, and amd / common js pattern for javascript on all project.</p>
                    <p className="sample">Examples: <strong>skyron.co.uk</strong>, <strong>ideasforinvesting.com</strong>, <strong>lyondellbasell.com</strong> (landing page)</p>
                </div>

                <div className="position">
                    <p className="date"><span>September 2010 - March 2011</span>, <span className="company">Sybaris Analytics</span>, Toronto (sybaris.ca)</p>
                    <p className="desc">Sybaris Analytics provides a custom made solution for its clients. Based on the famous cake-php framework, Sybaris developers were building the dream platform for their clients.</p>
                    <p>The &ldquo;pixel perfect&rdquo; philosophy of the company taught me how to be rigorous and thorough across my development process.</p>
                    <p className="sample">Examples: <strong>lea-annbelter.com</strong>, <strong>chive.com</strong>,  <strong>wyldeabouthealth.com</strong></p>
                </div>

                <div className="position">
                    <p className="date"><span>February  2010 - March 2011</span> , <span className="company">IMS Incorporated</span>, Toronto (realestatestatistics.com)</p>
                    <p className="desc">IMS Incorporated provide tools and data for Agents and Brokers.</p>
                    <p>I was hired to create a promotional tool in Flash AS3, praising their apps, through a 3D Interactive Caroussel.</p>
                </div>

                <div className="position">
                    <p className="date"><span>September 2009 – August 2010</span> , <span className="company">Design Media Development</span>, Champier, France (design-media-developpement.com)</p>
                    <p className="desc">DMD is a digital agency which produces all communication means ( print, web, video...).</p>
                    <p>I developed standards-compliant HTML, CSS, and JavaScript pages for numerous projects including also PHP, MySQL and flash.</p>
                </div>
                </section>

                <section className="education">
                <header><h3>Education</h3></header>
                <div className="qualification">
                    <p className="date">
                    <span>September 2008 - June 2009</span>, <span className="establishment">ARIES</span>, Meylan, France</p>
                    <p>Qualification of Webmaster,</p>
                    <p className="desc">Programming web applications using Flash, PHP, HTML, JavaScript, AJAX, MySQL.</p>
                </div>
                <div className="qualification">
                    <p className="date"><span>September 2002 - June 2004</span>, <span className="establishment">JOSEPH FOURIER UNIVERSITY</span>, Grenoble, France</p>
                    <p>Bachelor in “Mathematics Informatics Applied to Sciences”, </p>
                    <p className="desc">Computer programming, C / C++, Caml, Pascal, assembly language.</p>
                </div>
                </section>
            </div>

            <footer className="mod-footer">

            </footer>

        </div>
    );
};

export default App;
