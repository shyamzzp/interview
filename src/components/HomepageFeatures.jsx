import React from "react";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1> About the Notes </h1> <br />
        <p class="thin">
          {" "}
          ✅ Each note will provide a summary of the most important points
          related to the topic.{" "}
        </p>{" "}
        <p class="thin">
          {" "}
          ✅ This is useful for getting a higher - level understanding and
          refreshing your memory.{" "}
        </p>{" "}
        <p class="thin">
          {" "}
          ✅ If you want more details, you can use the resources at the end of
          the note as a curated list of resources.{" "}
        </p>{" "}
      </div>{" "}
      <br />
      <br />
      <div class="container flex-wrap">
        <div class="column width50 padding20" style={{ paddingLeft: 0 }}>
          <h3>Data Structures(Java)</h3> Contains all the data structures that
          are used in the language.All the common operations used along with
          their complexities.{" "}
        </div>
        <div class="column width50 padding20">
          <h3>Design Patterns</h3> Curated list of design patterns and their
          classification and benefits.Also contains commonly and frequently used
          design patterns.{" "}
        </div>
        <div class="column width50 padding20" style={{ paddingLeft: 0 }}>
          <h3>Questions(Java)</h3> Some of the solved questions from recognized
          sites along with the concepts used for them as well as the efficient
          usable data - structures used to minimize the complexities.{" "}
        </div>
        <div class="column width50 padding20">
          <h3>Object Oriented Concepts(JS)</h3> Contains all the common object
          oriented concepts along with the snippets and their use - cases.For
          now these concepts are specifically for JS but some of them will be
          common among other OOP languages.{" "}
        </div>{" "}
        <div class="column width50 padding20" style={{ paddingLeft: 0 }}>
          <h3>System Design</h3> Contains common terminology used in the system
          design.Includes process of designing the architecture, components, and
          interfaces for a system so that it meets the end - user 's needs.{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <br />
      <div className="container">
        <h1> About the Author </h1> <br />
        <p class="thin"> ✅ Full Stack Developer. </p>{" "}
        <p class="thin">
          {" "}
          ✅ Love talking about new Open Source Technologies & UI Designs.{" "}
        </p>{" "}
      </div>{" "}
      <br />
      <br />
      <div class="container flex-wrap">
        <img src="img/home/angularjs.svg" class="home-icon" title="angularjs" />
        <img src="img/home/antd.svg" class="home-icon" title="antd" />
        <img src="img/home/arduino.svg" class="home-icon" title="arduino" />
        <img src="img/home/aws.svg" class="home-icon" title="aws" />
        <img src="img/home/bootstrap.svg" class="home-icon" title="bootstrap" />
        <img src="img/home/c++.svg" class="home-icon" title="c++" />
        <img
          src="img/home/c-programming-500.svg"
          class="home-icon"
          title="c-programming-500"
        />
        <img src="img/home/css.svg" class="home-icon" title="css" />
        <img src="img/home/cssinjs.svg" class="home-icon" title="cssinjs" />
        <img src="img/home/d3js.svg" class="home-icon" title="d3js" />
        <img src="img/home/dart.svg" class="home-icon" title="dart" />
        <img src="img/home/django.svg" class="home-icon" title="django" />
        <img src="img/home/drupal-500.svg" class="home-icon" title="drupal-500" />
        <img src="img/home/express.svg" class="home-icon" title="express" />
        <img src="img/home/figma.svg" class="home-icon" title="figma" />
        <img src="img/home/firebase.svg" class="home-icon" title="firebase" />
        <img src="img/home/flutter.svg" class="home-icon" title="flutter" />
        <img src="img/home/github.svg" class="home-icon" title="github" />
        <img src="img/home/gitlab.svg" class="home-icon" title="gitlab" />
        <img
          src="img/home/google-cloud.svg"
          class="home-icon"
          title="google-cloud"
        />
        <img
          src="img/home/graphql-500.svg"
          class="home-icon"
          title="graphql-500"
        />
        <img src="img/home/green-sock.svg" class="home-icon" title="green-sock" />
        <img src="img/home/grunt.svg" class="home-icon" title="grunt" />
        <img src="img/home/html.svg" class="home-icon" title="html" />
        <img src="img/home/instagram.svg" class="home-icon" title="instagram" />
        <img src="img/home/java.svg" class="home-icon" title="java" />
        <img src="img/home/javascript.svg" class="home-icon" title="javascript" />
        <img src="img/home/jQuery.svg" class="home-icon" title="jQuery" />
        <img src="img/home/linkedin.svg" class="home-icon" title="linkedin" />
        <img src="img/home/markdown.svg" class="home-icon" title="markdown" />
        <img src="img/home/materialui.svg" class="home-icon" title="materialui" />
        <img src="img/home/mongodb.svg" class="home-icon" title="mongodb" />
        <img src="img/home/mysql.svg" class="home-icon" title="mysql" />
        <img src="img/home/nodejs.svg" class="home-icon" title="nodejs" />
        <img src="img/home/npm.svg" class="home-icon" title="npm" />
        <img src="img/home/open-shift.svg" class="home-icon" title="open-shift" />
        <img src="img/home/php.svg" class="home-icon" title="php" />
        <img src="img/home/python.svg" class="home-icon" title="python" />
        <img
          src="img/home/raspberry-pi.svg"
          class="home-icon"
          title="raspberry-pi"
        />
        <img src="img/home/react.svg" class="home-icon" title="react" />
        <img src="img/home/sass.svg" class="home-icon" title="sass" />
        <img
          src="img/home/sublime-text.svg"
          class="home-icon"
          title="sublime-text"
        />
        <img src="img/home/tailwind.svg" class="home-icon" title="tailwind" />
        <img src="img/home/terraform.svg" class="home-icon" title="terraform" />
        <img src="img/home/twitter.svg" class="home-icon" title="twitter" />
        <img src="img/home/typescript.svg" class="home-icon" title="typescript" />
        <img
          src="img/home/visual-studio.svg"
          class="home-icon"
          title="visual-studio"
        />
        <img
          src="img/home/visual-studio-code.svg"
          class="home-icon"
          title="visual-studio-code"
        />
        <img src="img/home/vue-js.svg" class="home-icon" title="vue-js" />
        <img src="img/home/webpack.svg" class="home-icon" title="webpack" />
      </div>{" "}
      <br />
      <br />
    </section>
  );
}
