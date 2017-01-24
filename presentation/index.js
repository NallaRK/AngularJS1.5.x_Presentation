// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem

} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
//import Interactive from "../assets/interactive";

import CodeSlide from "spectacle-code-slide";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),

  mvvm: require("../assets/images/MVvM.png"),
  angularArch: require("../assets/images/AngularArch.jpg"),
  angularFeatures: require("../assets/images/AngularFeatures.jpg"),
  services: require("../assets/images/services.png"),
  globalArch: require("../assets/images/globalArch.png"),
  directiveScope: require("../assets/images/directiveScope.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              AngularJS 1.5.x
            </Heading>
             <Text textSize="1.5em" margin="20px 0px 0px" bold>Structural framework for dynamic web apps. </Text>
             <Text textSize="1.5em" margin="20px 0px 0px" >Where You Can Write SPA Applications.</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="<ul><li>Frameworks like Angular, Backbone, and Ember brings structure to your JavaScript code and keep it organized.  </li><li>They are built using jQuery library. Angular JS is similar to jQuery UI, but declarative instead of triggering through JS.</li></ul>">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} fit textColor="primary" textFont="primary">
             Oho god! Why AngularJS.  What about jQuery, ember, knockout, ExtJS, backbone..hmmm!
            </Heading>
          </Slide>
<Slide transition={["zoom", "fade"]} bgColor="primary">
 <Layout>
              <Fill>
                <Heading textSize="2em" size={4} textColor="secondary" bgColor="white" margin={5}>
                  jQuery
                </Heading>
                <Appear>
               <List>
                <ListItem textSize="0.7em">is a library used for DOM Manipulations</ListItem>
                <ListItem textSize="0.7em">Has nothing to do with models </ListItem>
                <ListItem textSize="0.7em">don't have two-way binding feature</ListItem>
                <ListItem textSize="0.7em">becomes complex and difficult to maintain when size of project increases</ListItem>
                <ListItem textSize="0.7em">Sometimes you have to write more code to achieve the same functionality as in Angular</ListItem>
              </List>
            </Appear>
              </Fill>
                            <Fill>
                <Heading textSize="2em" size={4} textColor="secondary" bgColor="white" margin={5}>
                  AngularJS
                </Heading>
                <Appear>
                 <List>
              <ListItem textSize="0.7em">is a MVC (Angular way  is : MVvM) Framework</ListItem>
              <ListItem textSize="0.7em">Best for SPA (Single Page Applications)</ListItem>
              <ListItem textSize="0.7em">Has key features like routing, directives, two way data binding, models, dependency injection, unit tests etc</ListItem>
              <ListItem textSize="0.7em">Modular, maintainable</ListItem>
              <ListItem textSize="0.7em">Angular 1.x is fast - Angular 2 is 4-5 times faster</ListItem>
               </List>
            </Appear>
              </Fill>
              </Layout>
            </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps fit textColor="primary">Advantages of Angular</Heading>
          <List>
              <Appear><ListItem>AngularJS is a structural framework for dynamic web apps</ListItem></Appear>
              <Appear><ListItem>Declarative - Extends HTML's syntax to express your application's components</ListItem></Appear>
              <Appear><ListItem>Angular JS 1.x – Two way data binding</ListItem></Appear>
              <Appear><ListItem>BEST for CRUD Apps and SPAs</ListItem></Appear>
              <Appear><ListItem>Enables Productivity</ListItem></Appear>
          </List>
          </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="NOT Good for:: Games, GUI Editor, Intensive DOM Manipulations">
          <Heading size={1} caps fit textColor="primary">Angular 1.x Downsides</Heading>
          <List>
              <Appear><ListItem>Steep learning curve</ListItem></Appear>
              <Appear><ListItem>New terms and concepts</ListItem></Appear>
              <Appear><ListItem>Many ways to do things</ListItem></Appear>
              <Appear><ListItem>Bad SEO</ListItem></Appear>
              <Appear><ListItem>Poor performance</ListItem></Appear>
          </List>

          </Slide>

<Slide transition={["spin", "slide"]} bgColor="tertiary" notes="MVvM is specifically targeted at user interface development. The View consists of the presentation layer, the ViewModel (Controller) contains the presentation logic and the Model contains our business logic and data.">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Angular MVC Design pattern
            </Heading>
            <Image width="100%" src={images.mvvm}/>
<Text textSize="1em" margin="20px 0px 0px" bold>AngularJS uses MVC ( MVvM) Pattern, also known as MV*</Text>
            {/*<Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>*/}
          </Slide>


          <Slide transition={["fade"]} bgColor="tertiary" >
            <Image width="70%" src={images.angularFeatures}/>
          </Slide>

          <Slide transition={["spin", "fade"]} bgColor="tertiary" notes="NOTE: Bower is a package manager for client-side JavaScript components  $ npm install -g bower">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Lets get started coding with AngularJS
            </Heading>
             <Text textSize="0.7em">Using CDN or hosting file locally </Text>
             <Markdown>
              {`
                https://ajax.googleapis.com/ajax/libs/angularjs/1.5.9/angular.min.js
            `}
            </Markdown>

             <Text textSize="0.7em">Using Bower </Text>
             <Markdown>
              {`
                bower install angular#1.5.9
                `}
            </Markdown>

             <Text textSize="0.7em">Using npm</Text>
             <Markdown>
              {`
                npm install angular@1.5.9  --save
                `}
            </Markdown>

             <Text textSize="1em">Along with angular core module, AngularJS also provides additional modules:</Text>
             <Link href="https://code.angularjs.org/1.5.9/">https://code.angularjs.org/1.5.9/</Link>
             <Text textSize="0.5em">Local Server to use: npm install -g live-server</Text>

          </Slide>


<Slide transition={["spin", "zoom"]} bgColor="tertiary" notes="You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.">
            <Heading caps fit size={0.5} textColor="primary">
             Angular Modules
            </Heading>
           <Layout>

            <Fill>
              <Appear>
                <List>
                  <ListItem textSize="0.7em">Config</ListItem>
                  <ListItem textSize="0.7em">Routes</ListItem>
                </List>
              </Appear>
            </Fill>

            <Fill>
              <Appear>
                  <List>
                    <ListItem textSize="0.7em">Filter</ListItem>
                  </List>
              </Appear>
            </Fill>
            <Fill>
            <Appear>
            <List>
            <ListItem textSize="0.7em">Directives</ListItem>
            <ListItem textSize="0.7em">Components</ListItem>
            </List>
            </Appear>
            </Fill>
            <Fill>
            <Appear>
            <List>
            <ListItem textSize="0.7em">Factory</ListItem>
            <ListItem textSize="0.7em">Service</ListItem>
            <ListItem textSize="0.7em">Provider</ListItem>
            <ListItem textSize="0.7em">Value</ListItem>
            <ListItem textSize="0.7em">Constant</ListItem>
            </List>
            </Appear>
            </Fill>

            <Fill>
            <Appear>
            <List>
            <ListItem textSize="0.7em">Controller</ListItem>

            </List>
            </Appear>
            </Fill>
            </Layout>

          </Slide>

{/*
<Slide transition={["spin", "zoom"]} bgColor="tertiary" notes="You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.">
            <Heading caps fit size={0.5} textColor="primary">
             Angular Modules
            </Heading>
        
<Table>
  <TableRow>
    <TableHeaderItem>2016</TableHeaderItem>
    <TableHeaderItem>2011</TableHeaderItem>
  </TableRow>
  <TableRow>
    <TableItem>None</TableItem>
    <TableItem>61.8%</TableItem>
  </TableRow>
  <TableRow>
    <TableItem>jQuery</TableItem>
    <TableItem>28.3%</TableItem>
  </TableRow>
</Table>

          </Slide>

 */}

      <Slide transition={["fade"]} bgColor="primary" notes="ng-init='message=`Hello, World!`">
            <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
              Basic Angular :: Hands-on 
            </Heading>
      </Slide>


       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/basicNGcode.example")}
         ranges={[
         { loc: [0, 0], title: "Walking through some code" },
         { loc: [2, 3], note: "The ngApp directive designates the root element of the application and auto-bootstrap the app" },
         { loc: [16, 18], note: "Modules can have other modules as dependencies, which have modules that pull in other dependencies." },         
         { loc: [4, 7], note: "Angular will instantiate a new Controller object, using the specified Controller's constructor function." },
        { loc: [18,23], note: "Exposes variables and functionality to HTML (expressions and directives). This will 'control' / 'init' the model and update the view. -new child scope" },
        
         { loc: [1, 23] }
         ]}
       />

          <Slide transition={["fade"]} bgColor="primary" notes="controller as, input element two way data binding">
            <Heading size={0.5} caps fit lineHeight={1.5} textColor="tertiary">
              Sample Controller :: Hands-on 
            </Heading>
             <Text textSize="1em">Basic controller</Text>
             <Text textSize="1em">Two-way Data Binding</Text>
             <Text textSize="1em">Angular Expressions</Text>
             <Text textSize="1em">Objects in controller scope</Text>
             <Text textSize="1em">Dependency Injection</Text>
                         
            </Slide>


            <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
              Angular Data Binding 
            </Heading>
                         <Markdown>
              {`
* ng-model      --> Two way data binding  ($scope <--> view)
* {{}}          --> The brackets {{}}  will be dirty checked and refreshed in every $digest, even if it's not necessary.
* ng-bind       --> One-way Data Binding ($scope --> view)
                    to update inner HTML blocks with content.  Can't be used with input tags.
* {{::vm.user }}--> One-Time Binding.  
  Ex: <li ng-repeat="user in ::vm.users"></li> `}
       </Markdown>
         </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="
          $scope is a context where the model is stored so that controllers, directives and expressions can access it.         An app can have only one $rootScope which will be shared among all the components of an app.  All other $scopes are children of the $rootScope.
">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              $scope && $rootScope
            </Heading>
               <List>
              <ListItem>$scope as an automated bridge between JavaScript and the DOM itself which holds synchronised data. </ListItem>
              <ListItem>$rootScope is very top level scope</ListItem>
              <ListItem> Parent scope values will be inherited to Child scope.</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" >
            <Text textSize="2em" bold>Services in Angular</Text>
            <Image width="80%" src={images.services}/>
          </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="">
            <Heading size={1} fit lineHeight={1.0} textColor="primary">
              Factory, Services & Providers
            </Heading>
             <Text textSize="1em" textAlign="left">• A common code / utility / business logic to use across different modules of the application.</Text>
             <Text textSize="1em" textAlign="left">• Singleton & Lazy loaded</Text>
             <Text textSize="1em" textAlign="left">• These can injected into controllers, filters, directives and other services.</Text>
             <Text textSize="1em" textAlign="left">• Behind the scenes - 'service' and 'factories' actually wrappers of the 'providers'.</Text>
          </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" notes="">

<Table>
  <TableRow>
    <TableHeaderItem>Services</TableHeaderItem>
    <TableHeaderItem>Factories</TableHeaderItem>
    <TableHeaderItem>Providers</TableHeaderItem>
  </TableRow>
  <TableRow>
    <TableItem textSize="0.5em" textAlign="left" margin="5px">• A service is just a constructor Object that gets called (automatically) with the new keyword, which means we'll be using the this keyword to bind our logic to the Service.</TableItem>
    <TableItem textSize="0.5em" textAlign="left">• Factory methods return an Object or a Function, which means we can make usage of closures as well as returning a host Object to bind methods to. We can create private and public scope. </TableItem>
    <TableItem textSize="0.5em" textAlign="left">• Use when a service needs some configuration information, before even its get instantiated. This can be done .config() function.</TableItem>
  </TableRow>
  <TableRow>&nbsp;</TableRow>
  <TableRow>
    <TableItem textSize="0.5em" textAlign="left">• You’ll add properties to ‘this’ and the service will return ‘this’. $http, $log are inbuilt services</TableItem>
    <TableItem textSize="0.5em" textAlign="left">• Typically in factory you create an object, add properties to it, then return that same object. </TableItem>
    <TableItem textSize="0.5em" textAlign="left">• These can injected into controllers, filters, directives and other services.
</TableItem>
  </TableRow>
 <TableRow>&nbsp;</TableRow>
    <TableRow>
    <TableItem textSize="0.5em" textAlign="left">• Service works better for objects of a custom type</TableItem>
    <TableItem textSize="0.5em" textAlign="left">• Factory can produce JavaScript primitives and functions.</TableItem>
    <TableItem textSize="0.5em" textAlign="left">• Provider usefull, when you are building a reusable piece of code that needs global configuration.</TableItem>
  </TableRow>

</Table>

  </Slide>

       <CodeSlide
         transition={[]}
         lang="js"
         code={require("raw!../assets/code/services.example")}
         ranges={[
         { loc: [0, 0], title: "Walking through code" },
         { loc: [4, 7], note: "Service: Adding properties to ‘this’ and the service will return ‘this’" },
         { loc: [12, 17], note: "Factory: Creates an object, add properties to it, then return that same object" },         
         { loc: [23, 30], note: "Proivder: properties which can be configured" },
        { loc: [34,39], note: "Provider: returns object which is constructed in .$get method" }
         ]}
       />

          <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={1} lineHeight={1.0} textColor="tertiary">
             Filters
            </Heading>
             <Text textSize="1em" textAlign="left">• Angular filters are a way of processing data and returning a specific set of it, against some kind of logic</Text>
             <Text textSize="1em" textAlign="left">• DOM via a pipe | character inside  expressions</Text>
             <Text textSize="1em" textAlign="left">• $filter Service, which we can dependency inject and use within JS logic ( ex: controller) </Text>
             <Text textSize="1em" textAlign="left">• Custom filters created using .filter. The Filter API returns a function contains closure and called each time Angular needs to run the Filter</Text>
          </Slide>


          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li></li></ul>">
            <CodePane
              lang="JS"
              source={require("raw!../assets/code/filters.example")}
              margin="5px auto"
            />
          </Slide>


          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li></li></ul>">
            <CodePane
              lang="JS"
              source={require("raw!../assets/code/filters-2.example")}
              margin="5px auto"
            />
          </Slide>


          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li></li></ul>">
            <CodePane
              lang="JSX"
              source={require("raw!../assets/code/filters-3.example")}
              margin="5px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={1} lineHeight={1.0} textColor="tertiary">
             Directives
            </Heading>
             <Text textSize="1em" textAlign="left">A directive is a way of defining HTML elements that use JavaScript to create custom behaviors. There are two main types of directives: elements and attributes (also referred to as decorators).</Text>

          </Slide>


          <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={1} lineHeight={0.5} textColor="tertiary">
             In-Built Directives
            </Heading>
           <List>
              <Appear><ListItem textSize="1em">ng-app, ng-model, ng-init, ng-controller, ng-bind</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-change: directive for input elements that evaluates the expression after any change.</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-repeat: directive repeats an HTML element</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-click: Angular will evaluate the expression(s) inside the ng-click for us and bind the relevant listeners.</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-href/ng-src:Angular takes care of any browser quirks with dynamically setting a href and src value</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-class: Angular will add and remove classes based on the expression you provide it, along with a className.</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-show/ng-hide: Uses a class to toggle element's visibility on the page</ListItem></Appear>

              <Appear><ListItem  textSize="1em">ng-if, ng-switch</ListItem></Appear>
          </List>

          </Slide>


          <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={1} lineHeight={1.0} textColor="tertiary">
             Custom Directives
            </Heading>

            <Text textSize="1em" textAlign="left">With directives, you can create custom, reusable components for your application that make developing interactive UI widgets drastically easier.</Text>
         
           <List>
              <Appear><ListItem textSize="1em">New directives are created by using the .directive function.</ListItem></Appear>

              <Appear><ListItem  textSize="1em">Normalization. ex: cardSection card-section Directive name in HTML DOM replaced with  -  :  _  characters</ListItem></Appear>

              <Appear><ListItem  textSize="1em">DDO and DSL</ListItem></Appear>
              
              <Appear><ListItem  textSize="1em"> Type of Directive :: A E C M ::By default the value is EA</ListItem></Appear>

              <Appear><ListItem  textSize="1em">Directive API :: restrict, replace, scope, controller, link, compile</ListItem></Appear>

          </List>

          </Slide>

       <CodeSlide
         transition={[]}
         lang="jsx"
         code={require("raw!../assets/code/directives.example")}
         ranges={[
         { loc: [0, 0], title: "Directives" },
         { loc: [4, 10], note: "Simple Custom Directive" },
         { loc: [13, 14], note: "E: Element" },
         { loc: [15, 16], note: "A: Attribute" },
         { loc: [17, 18], note: "C: Class" },
         { loc: [19, 20], note: "M: Comment" },
         { loc: [24, 26], note: "Directive function returns DDO" },         
         { loc: [26, 27], note: "EA :: directive can be invoked using HTML element OR attribute" },
         { loc: [27,28], note: "If true replaces original Directive's element, with given template" },
         { loc: [28,29], note: "Defines scope of directive" },
         { loc: [29,30], note: "To manage the template's viewModel " },
         { loc: [30,31], note: "Use this to refer in directive template" },
         { loc: [31,41], note: "The link function is called after the element is compiled and injected into the DOM.  Do all your DOM manipulation and event handling here." },
         { loc: [44,45], note: "HTML markup that will be produced when the directive is compiled and linked by Angular.  Recommended to use templateUrl"},
         { loc: [50,51], note: "Tells AngularJS to capture the content/inner HTML of the directive and make it available in the directive's template."},
         { loc: [53,58], note: "directive's template with <ng-transclude>"},
         { loc: [61,70], note: "directive element with <ng-transclude>"}
         ]}
       />

<Slide transition={["spin", "slide"]} bgColor="tertiary" notes="">
  <Heading size={1} caps fit lineHeight={0.5} textColor="primary">
    Directive Scope
  </Heading>

  <Text textSize="0.7em" textAlign="left" margin="50px 0px 0px" >By default a directive gets the parent’s scope.
  </Text>


  <Text textSize="0.7em" textAlign="left" margin="10px 0px 0px" ><b>scope : false</b> ( Default- Directive uses its parent scope )
  </Text>

  <Text textSize="0.7em" textAlign="left" margin="10px 0px 0px"><b>scope : true </b>( Directive gets a new child scope  & parent scope get inherited - Any changes made to this new scope will not reflect back to the parent scope )
  </Text>


  <Text textSize="0.7em" textAlign="left" margin="10px 0px 0px"><b>scope : {'{'}  {'}'}</b> ( Directive uses isolated scope )

  <br/><br/>Data can be passed to directive isolated scope using below literals:<br/><br/>
		○ @ Attribute string binding<br/>
		○ = Two-way model/Object binding<br/>
		○ & Callback method binding<br/>

  </Text>  
  <br/>
    <Text textSize="0.7em" textAlign="left" margin="5px 0px 0px"><b>Best Practice:</b> Use isolated scope option, when making components that you want to reuse throughout your app.</Text>

  
  <Image width="50%" src={images.directiveScope}/>
  
</Slide>

<Slide transition={["spin", "slide"]} bgColor="primary" notes="">
  <Text textSize="1em" margin="5px 0px 0px"><b>Directive Isolated Scope</b></Text>
  <CodePane
        lang="JS"
        source={require("raw!../assets/code/directivesScope.example")}
        margin="5px"
      />
</Slide>

<Slide transition={["fade"]} bgColor="primary" notes="">
  <Heading size={1} lineHeight={0.5} textColor="tertiary">
    Components
  </Heading>
    <Text textSize="0.7em" textAlign="left" margin="40px 0px 0px"><b>A component is basically a directive that uses a simpler configuration and that is suitable for a component-based architecture</b></Text>
  <List>
    <Appear><ListItem  textSize="1em">Components are always created with isolate scope.
    </ListItem></Appear>

    <Appear><ListItem  textSize="1em">Component is restricted to 'E' - Element Only.</ListItem></Appear>

    <Appear><ListItem  textSize="1em">enforces best practices and provides optimizations (isolate scope, bindings)</ListItem></Appear>


    <Appear><ListItem  textSize="1em">A component is defined by an object and no longer by a function call.</ListItem></Appear>


    
</List>
<Appear>
      <Text textSize="0.7em" textAlign="left" margin="5px 0px 0px" textColor="tertiary"><b>When to use Directives?</b></Text>
  </Appear>        
  <List>
    <Appear><ListItem  textSize="0.7em">To perform actions in compile and pre-link functions</ListItem></Appear>

    <Appear><ListItem  textSize="0.7em">To manipulate the DOM by adding or removing elements (Structural directive) </ListItem></Appear>

    <Appear><ListItem  textSize="0.7em">To change the appearance or behavior of an element (Attribute directive)</ListItem></Appear>

    <Appear><ListItem  textSize="0.7em">ng-if, ng-switch</ListItem></Appear>
</List>

</Slide>


<Slide transition={["fade"]} bgColor="primary" notes="<ul><li></li></ul>">
  <Layout>

    <Fill>
       <Text textSize="1em" margin="5px 0px 0px"><b>Directive</b></Text>
      <CodePane
        lang="JS"
        source={require("raw!../assets/code/DirvsComp-1.example")}
        margin="5px"     
      />
      </Fill>
    <Fill>
    <Text margin="5px 0px 0px">&nbsp;</Text>
   
    </Fill>
     <Fill>

     <Text textSize="1em" margin="5px 0px 0px"><b>Component</b></Text>
  
      <CodePane
        lang="JS"
        source={require("raw!../assets/code/DirvsComp-2.example")}
        margin="5px"
      />
    </Fill>
    
  </Layout>
</Slide>

<Slide transition={["fade"]} bgColor="primary" notes="">
      <Text textSize="1.2em" margin="5px 0px 0px" textColor="tertiary"><b>Component Data Bindings</b></Text>
      <Text textSize="0.7em" textAlign="left"  margin="10px 0px 0px"><b>There are four different types of bindings:</b></Text>
  
      <List>
        <Appear><ListItem  textSize="0.7em"><b>{'"'}{'<'}{'"'} binding (one-way): </b>To retrieve data from the parent scope passed as an expression (1.5 onwards) </ListItem></Appear>
        <Appear><ListItem  textSize="0.7em"><b>{'"'}{'@'}{'"'} binding (string):</b>To retrieve string values from the parent scope.</ListItem></Appear>
        <Appear><ListItem  textSize="0.7em"><b>{'"'}{'&'}{'"'} binding (callback):</b> To retrieve data from the parent scope, or be used as the only way to pass data to the parent scope</ListItem></Appear>
        <Appear><ListItem  textSize="0.7em"><b>{'"'}{'='}{'"'} binding (two-way):  </b>  Better to avoid using this.  This means that if you update that variable in your component scope, the change will be reflected on the parent scope</ListItem></Appear>
      </List>
</Slide>

<Slide transition={["fade"]} bgColor="primary" notes="">
  <Heading size={0.7} caps fit lineHeight={1.5} textColor="tertiary">
  Component LifeCycle
  </Heading>
      <Markdown>
      {`
    * $onInit()     
      This event runs after the controller and bindings are initialized.

      controller: function() {
          var vm = this;
          console.log(vm.title); // May not yet be available!
          
          vm.$onInit = function() {
            console.log(vm.title); // Guaranteed to be available!
          }
      }

    * $onChanges(changesObj)
      Called when changes occur to '<' (one-way databinding) and '@' (for evaluated DOM attribute values)

    * $postLink()
      Called after all child elementes linked.  Do all your DOM handlers and manipulation here.

    * $onDestroy()
      This event runs right before the controller and its scope are destroyed. 
      It is important to clean up anything that your component might have created or that holds memory, 
      such as event listeners, watchers, or additional DOM elements.

      `}
    </Markdown>
</Slide>


<Slide transition={["fade"]} bgColor="tertiary" >
  <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
    AngularJS Application Architecture
  </Heading>
  <Image width="80%" src={images.angularArch}/>
</Slide>

<Slide transition={["fade"]} bgColor="tertiary" >
  <Text textSize="2em" bold>Simple Entrpise Architecutre</Text>
  <Image width="100%" src={images.globalArch}/>
</Slide>


<Slide transition={["fade"]} bgColor="tertiary" >
  <Heading size={0.5} caps fit lineHeight={1.5} textColor="primary">
    We will continue in next session.- Thank you!
  </Heading>
</Slide>


        </Deck>
      </Spectacle>
    );
  }
}
