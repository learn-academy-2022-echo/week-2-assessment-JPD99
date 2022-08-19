# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Any normal function requires an input and produces an output. Although a function has many parts that is required for its functionality it can be reduced to just an input and an output. The input is a parameter, this term is added within the paraentheses when invoking a function; the parameter can exist as any data type. On the otherhand, an output isn't exactly an arguement. An arguement is the process that changes an input into an output, you can think of an arguement as a list of instructions that turns raw materials, the parameter, into a commerical product, the output. 
<!-- my answer is so wrong...  -->

Researched answer:
<!-- Referenced https://linuxhint.com/function-parameters-arguments-javascript/ -->
The parameter and the arguement are closely similar to one another, what is obvious is that they both are related to functions. During the creation of a function, a parameter is a placeholder for an input, it holds no significance that affects the final output, however a parameter can be named as an expected data type to increase coding competency. When a function is invoked and a real data value takes place of a parameter, that is now identified as an arguement. The parameter is the thoretical value of a function, while the arguement is the actual value of a function. 
Parameters and arguements are basic componenets of dynamic coding languages. As an upcoming devloper, I have used the above terms way before I knew what they meant. They both have become very familar in my coding journey. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The bulit in method .map() is an emulation of a for loop iteration. From my understanding the only two data types that can be iterated in javascript are strings and arrays; numbers, boolean, null, undefined, and symbols cannot be reiterated. Just like the methods:   .filter(), and .forEach() , .map() has 3 potential parameters which are value, index number, and array in that specific order;   .map(value, index, array). Value is the only parameter that is strictly required to utilize .map(), while the index + array parameters are optional. 
<!-- slightly wrong I forgot to mention about functions + thisValue is also another parameter?!?!?-->

Researched answer:
<!-- Referenced https://www.geeksforgeeks.org/javascript-array-map-method/#:~:text=Generally%20map()%20method%20is,on%20every%20element%20of%20array.&text=Parameters%3A%20This%20method%20accepts%20two,on%20each%20element%20of%20array. -->
The .map() method is considered an acessor method, bascially a method that outputs a new array and does not alter the orginal array. .map() takes a function as a parameter, requires at least 1 parameter to be functional--that parameter is called currentValue. Although the method can take in 4 parameters: currentValue, index, arr, and thisValue--currentValue is the only parameter that is required every other parameter is considered optional. An additional parameter can be added as well, but even so it is still considered another optional one--that is we can use a function as a parameter too.
To overcome the long and ardous syntax of a for loop, I have used .map() to reiterate through an array to slightly change the elements. At the beginning, I considered .map() to be too cumbersome to be added because conceptionally, I was unable to process the steps of iteration with such little code. However, I have slowly warned up to the technique as this format is much more clean to review. 

3. What is the difference between map and filter?

Your answer: The .map() and the .filter() are both methods that focuses on recreating the process of a for loop without the long format of a typical for loop. Both methods are useful for different situtations. Lets go through the conditions to use either. .map() is a method that is intended to be use if the devloper wants to create a new array of the same length compared to inputted orginal array. .filter() is a method that is specifically used if a devloper wants to create a new array of smaller length compared to the orginal array. 

Researched answer:
<!-- https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319 -->
.map(), and .filter() are excellent subsuitutes to writing a traditional for loop, the nuanced format of a for loop is remedied with these two methods. Just like any other method there is a time and place to use them to their fullest extent. .map() is integral in creating a new array with an identical array length of the original, while .filter() is creating a new array with a shorter array length of the original. All the function statements that alters an array can be integrated into a .map() method. However, .filter() works so much more differently, instead of function statements .filter() creates a condition that must be satisfied to allow enterance into its new array, if the data value is not applicable it is rejected and toss out.
.map() and .filter() are so useful to devlopers, as aforementioned they create new arrays, they are non-mutating methods that does not disrupt the establish code and adds for more flexibility. These two methods are called acessors, and they by far have been so useful coding assessments!

4. What is the DOM?

Your answer: DOM is an acroynm for document object model. Almost all social media wensites uses a virtual DOM and a regular DOM. A regular DOM requires to refresh an entire page to update information. A virtual DOM is the same thing as a regular DOM, but it works on the background and is able to update infromation with refreshing the page -- interupting user's experience.

Researched answer:
<!-- Referenced https://www.codecademy.com/article/react-virtual-dom + NOTES -->
Currently, the interactive web uses both DOM and VDOM to permit a better user experience. DOM (Document Object Model) is a antiquiated component of the web that is used to update html elements directly. At the time of MySpace, a popular website that only used DOM, users would commit changes on their webpage and experience a long refresh time on their page to update + display their changes. This direction of lagged user experience has truly been redefined with the pairing of VDOM (Virtual Document Object Model). VDOM uses an application called React (more on this later...) to help supplement DOM. Keyword supplement, VDOM is a powerful tool that isn't strong enough as a stand alone, in fact VDOM is incapable of changing Html elements on your webpages. VDOM is essentially a manager that takes note of all the changes that happens on the user's side, this means that there's two copies of VDOM, by the end of it the difference between the two VDOM are expressed to the DOM, and later the DOM is updated with all those changes in one go!
I have not used DOM or VDOM as much, but I am still implementing these factors in my coding, with these two, users will have a more enjoyable experience to whatever webpage I create for them.

5. What is React? Why would you use it?

Your answer: React is a open-source application devloped by a group of computer science / coding engineers. React is used by a majority of websites, and, so has a large following of web devlopers (around 6 milion!). As communication of ideas are growing on the web, many people have used websites that have incorporated React. In short, React has made the creation of web devlopment a lot more streamlined with its flexible + dynamic features.

Researched answer:
<!-- Referenced https://www.freecodecamp.org/news/why-use-react-for-web-development/ -->
React is an application that was devloped by Facebook engineers. At the moment, Facebook, Instagram, and other websites use React. React is not designed to fully create a website on its own, upon its intial creation, React was meant to used to develop componenets for thier websites. With additional thrid-party applications, React can be used to develop componenets, static websites, desktop applications, mobile apps, and virtual reality websites. The flexibility of React is astronomical, it can be integrated into existing projects very easily. With the many ways React can be used, developers are more inclined to learn as its implmentation is widely used. React has a strong community of devlopers as well, React may be a hub for interaction between coders alike

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in the English sense means to pull up something, so I am assuming that hoisting in Javascript or any other computer language means pulling up a line of code upwards for tidiness or hoisting could mean pulling a line of code up and adding something underneath to make the code functional. 

Researched answer:
<!-- Referenced https://developer.mozilla.org/en-US/docs/Glossary/Hoisting -->
Hoisting is a technique to rectify undefined errors and / or Hoisting is a technique to allow appropriate outputs of functions. When we are hoisting a function, varible, and classes are moved to the top of the 'scope' (the top of where ever, so that the computer is able to recognized the function, varible, or class before the intializer). 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
<!-- Referenced https://www.objectstyle.com/agile/user-stories-how-to -->
User stories are bullets of request a user will want. User stories are written in first person that identifies who this user is, informs us of what they want, and states what will occur if their desires are accomplished.

2. Spread operator:
<!-- Referenced https://www.w3schools.com/react/react_es6_spread.asp -->
Shorthand to inform the computer to copy the entirity of an array or an object. Very similar to ' this. ' notation when classes were being created.

3. React props:
<!-- Referenced https://www.javatpoint.com/react-props -->
React props is short for React Properties. React Properties are read-only components (stores data and cannot be modified). Usually in React, React props are passed through the parameter of a component.

4. Conditional rendering:
<!-- Referenced https://reactjs.org/docs/conditional-rendering.html -->
Conditional: a condition must be met for an action to be executed; Rendering: depiction of an image. Conditional Rendering is a technique used in React that is basically a conditional statement that will execute an action, in this case printed words, an image, maybe something promotional. 

5. DOM events:
<!-- Referenced https://www.w3schools.com/jsref/dom_obj_event.asp -->
DOM events are used in Javascript to accept triggers on the website like, keyboard clicking or mouse clicking, and return a event. 
