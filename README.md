 Starsart – My Personal Website Portfolio

 
Introduction: The Beginning of My Website
Starsart is a personal website portfolio that I created as part of my web development class. This showcases art and photography that I’ve worked on throughout the quarter of class. When I first started this project, I wanted to create something that represented me, my creativity, my interests, and the things that are important in my life while having easy accessibility to its users.
As my first website I create a website that was just a collection of assignments and what I learned while applying all those to the website. On this portfolio I applied all these skills and  built something personal that I could continue developing as I learned more about technology and web development.
I decided to create different sections throughout my website to introduce myself, showcase my projects, and share my photography. One of the things I wanted to include was a photography gallery featuring my dogs, puppies.

1. Planning and Organizing My Website - 11/10/2026
Before I started building the different pages, I needed to understand how to organize my website.
I decided to separate my content into different webpages so visitors could easily find the information they were looking for.
My website includes:
Home: The main page where visitors are introduced to my website.
About Me: A section where I share information about myself.
Commisons|Art Gallery|Pet Photography: A place to showcase my schoolwork, projects, and things I have created.
Pet Photography: A photography gallery where I share pictures of my animals.
I wanted each page to have its own purpose while still looking like it belonged to the same website.
How I Organized My Files
I created separate HTML files for each webpage and CSS files to control the appearance of the pages.
I also created folders to organize my photographs and other website images.

Organizing my files helped me understand how websites are structured and how different files connect to one another.
It also made it easier to find photographs, update my code, and troubleshoot problems.

2. HTML: Building the Structure of Starsart 11/10/2026
HTML was one of the first things I learned in class. I learned that HTML creates the structure of a webpage and tells the browser what information to display.
I applied HTML throughout my website to create headings, paragraphs, navigation links, images, sections, and other elements.
Creating My Webpages
I used HTML to build each individual page of Starsart.
For example, on my homepage, I used headings and paragraphs to introduce the website and organize the content.
On my About Me page, I used headings and paragraphs to share personal information.
On my Projects page Commisons|Art Gallery|Pet Photography:  I created sections to organize the different projects I wanted to showcase. I used HTML to organize my photographs into separate sections of my Art Gallery and Pet Photography page 
Learning Semantic HTML
One important thing I learned in Mr Renna's class was that HTML elements have different purposes and to build a structure.
I started using elements such as:
<header> for the top section of my pages.
<nav> for my navigation links.
<main> for the main content.
<section> to separate different areas of my website.
<footer> for information at the bottom of my pages.
<h1> and <h2> for headings.
<p> for paragraphs.
<img> to display photographs.
Learning these elements helped me organize my website instead of putting everything into one large section.
Creating Navigation Between Pages
I wanted visitors to be able to move between my webpages without having to return to the homepage every time.
I learned how to use anchor elements with the href attribute to connect my pages.

<nav>
    <a href="index.html">Home</a>
    <a href="commisons.html">My commission page</a>
    <a href="contact.html">Contact me </a>
    <a href="art-pieces.html"> Explore my Art Pieces </a>
    <a href="pet-photography.html"> Pet Photography</a>
</nav>
This allowed me to create navigation links that connect the different parts of my website.
I also learned that the file names and paths must be correct. If a link points to the wrong file, the webpage may not open.
This was something I had to pay attention to while building and testing my website.

3. Adding My Personal Photographs
One of my favorite parts of creating Starsart was learning how to add my own photographs.
I wanted my website to reflect my personality and include something meaningful to me, so I decided to create a pet photography section.
Instead of displaying all my photographs in one place, I wanted to organize them into separate galleries.
My photography sections include:
Kilo
Nita
Papi
Philly
Mercy
Puppies
Aine(the artist)
Step 1: Organizing My Photographs
I started by collecting the photographs I wanted to use and organizing them into my website’s image folders.
I learned that keeping images organized is important because HTML needs to know exactly where each photograph is located.
Step 2: Adding Images With HTML
I learned how to use the <img> element to display photographs.
Example:
<img src="images/pets/kilo.jpg"
     alt="Kilo sitting outside">
I learned that the src attribute tells the browser where the photograph is located.
The alt attribute provides a description of the photograph for people who use screen readers.
Step 3: Organizing My Photography Sections
I used HTML sections and containers to separate the photographs of each animal.
This allowed me to create individual areas for Kilo, Nita, Papi, Philly, Mercy, the puppies, and the cats.
I wanted visitors to be able to browse through the photographs without everything looking crowded.
Step 4: Styling My Photographs
I used CSS to control the size, spacing, and appearance of my images.

.photo-gallery img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}
I learned that object-fit: cover helps photographs fill their containers without stretching them.
I also explored hover effects that allow photographs to enlarge when someone moves their mouse over them.
This gave me ideas for making my photography page more interactive.

4. CSS: Designing the Appearance of My Website
After learning how HTML creates the structure of a webpage, I learned how CSS changes the appearance and design.
I used CSS to customize Starsart and make the different pages look more organized.
Some of the things I worked with included:
Background colors.
Text colors.
Font styles.
Heading sizes.
Margins and padding.
Image sizing.
Borders.
Rounded corners.
Navigation styling.
Button styling.
Page layouts.
Hover effects.
Connecting My CSS Files
I learned how to connect an external CSS stylesheet to an HTML document.
Example:
<link rel="stylesheet" href="style.css">
This allowed me to keep my styling separate from my HTML.
As I continued developing my website, I learned the importance of using consistent styling across pages.
I also learned that if I use different stylesheets for different pages, I need to make sure the overall design still feels connected.
Understanding CSS Selectors
I learned how to use different selectors to style specific parts of my website.
Element selector:
h1 {
    color: teal;
}
This changes the appearance of all H1 headings.
Class selector:
.gallery {
    display: grid;
}
A class allows me to apply styling to elements that share the same class name.
ID selector:
#contact {
    padding: 20px;
}
An ID allows me to target a specific element.
Understanding these selectors helped me make changes to different sections without having to rewrite my entire stylesheet.

5. Learning Flexbox and Applying It to My Website - 11/14/2026

Flexbox was one of the layout concepts I learned in class.
Before learning Flexbox, I didn’t fully understand how websites organized elements into rows and columns.
Flexbox helped me understand how to position items, control spacing, and align content.
I learned that Flexbox is especially useful when arranging elements in one direction, either horizontally or vertically.


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

How I Applied Flexbox
I used what I learned about Flexbox when working on the layout of my website.
For example, I could use Flexbox to:
Arrange my navigation links.
Organize photographs into rows.
Align content within sections.
Position buttons.
Create spacing between different elements.
Allow content to wrap when the screen becomes smaller.
What Each Property Does
display: flex turns on Flexbox.
justify-content controls horizontal or main-axis positioning.
align-items controls alignment across the cross axis.
gap creates space between elements.
flex-wrap: wrap allows items to move onto another row.
Learning Flexbox helped me understand how to control the layout of my website instead of relying on spaces or manually positioning everything.

6. Learning CSS Grid and Creating Organized Layouts
Another layout concept I learned was CSS Grid.
Grid allows me to organize elements into rows and columns.
I found this especially useful when thinking about how to organize my pet photography gallery.
I wanted the photographs to be displayed evenly instead of having different sizes and spacing.
Example:
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

Applying Grid to My Photography Page
I learned that Grid could help me:
Display multiple photographs in columns.
Keep photographs evenly spaced.
Organize different gallery sections.
Create a consistent layout.
Make my photography page easier to browse.
The repeat(3, 1fr) property creates three equal-sized columns.
The gap property controls the spacing between photographs.
This helped me understand how professional websites organize image galleries and project displays.

7. Making My Website Responsive With Media Queries
One thing I learned in class was that websites should work on different devices.
I didn’t want someone visiting Starsart from a phone to have a completely different or difficult experience compared to someone using a computer.
This is where responsive web design comes in.
I learned how to use media queries to adjust my website depending on the screen size.
Example:
@media (max-width: 768px) {

    .photo-gallery {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 480px) {

    .photo-gallery {
        grid-template-columns: 1fr;
    }

}

How I Applied Media Queries
I used the concepts from class to understand how my layouts could change on:
Desktop screens.
Tablets.
Mobile phones.
For example, a gallery that displays three photographs across on a computer can change to two columns on a tablet and one column on a smaller phone.
This helps prevent photographs and other content from becoming too small or crowded.
I also learned the importance of testing different screen sizes rather than assuming that a website will automatically look good on every device.

8. Creating Buttons and Making My Website Interactive
Throughout my class, I learned how buttons work and how CSS can change their appearance.
Buttons are important because they allow visitors to interact with different features of a website.
On my personal website, buttons can be useful for navigating, submitting information, and accessing different features.
Example:
<button type="submit">
    Send Message
</button>
I learned how to style buttons using CSS.
button {
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}
I also learned how hover effects can make buttons respond visually when someone moves their mouse over them.
Example:
button:hover {
    transform: scale(1.05);
}
This creates a small enlargement effect.
I learned that interactive features should be easy to understand and should clearly communicate what happens when someone clicks them.

9. Creating My Contact me Section and Learning HTML Forms
I wanted my portfolio to include a way for visitors to contact me.
This introduced me to HTML forms and the different elements used to collect information.
I learned how to create fields for names, email addresses, and messages.
What I Learned From Creating a Form
I learned that:
<form> creates the form.
<label> describes each field.
<input> allows visitors to enter information.
type="text" creates a text field.
type="email" creates an email field.
<textarea> creates a larger message box.
required makes a field mandatory.
<button> creates the submission button.
I also learned that creating the appearance of a contact form is only one part of the process.
For the form to actually deliver messages, it needs to connect to a service or backend that processes the information.

10. Learning JavaScript and How It Can Improve My Website
JavaScript was another important part of learning web development.
I learned that JavaScript adds functionality to a website and allows it to respond to actions performed by visitors.
While HTML creates the structure and CSS controls the design, JavaScript makes it possible to add more interactive features.
Some examples of how I could use JavaScript throughout Starsart include:
Making navigation menus interactive.
Responding to button clicks.
Creating an interactive photography gallery.
Enlarging photographs.
Validating contact form information.
Displaying messages to visitors.
Learning JavaScript helped me understand that websites can do more than display information. They can respond to visitors and create interactive experiences.

11. Website Accessibility: Making Starsart Easier to Use
Accessibility was an important part of my web development learning experience.
I learned that creating a website isn’t just about making it look good. It is also important to make sure people with different abilities can access and understand the information.
I wanted to understand how someone using a screen reader or keyboard navigation might experience my website.
Adding Alt Text to My Photographs
Because my website includes a lot of personal photographs, I learned that images should have alternative text.
Example:
<img src="images/pets/kilo.jpg"
     alt="Kilo sitting outside posing for a photo session ">
This gives screen readers a description of the photograph.
I learned that alt text should describe the important information in an image rather than simply repeating the file name.
Using Proper Headings
I learned that headings should be organized in a logical order.
For example:
H1 identifies the main topic of a page.
H2 identifies major sections.
H3 identifies smaller sections within those sections.
This helps visitors understand the organization of my website.
Making Links and Buttons Understandable
I also learned that links and buttons should have clear descriptions.
For example, instead of using a link that simply says “Click Here,” I can use wording that explains where the visitor will go.
This makes navigation easier for everyone.

12. Understanding ARIA and Applying Accessibility Concepts
I learned about ARIA, which stands for Accessible Rich Internet Applications.
ARIA provides additional information to assistive technologies.
One example is using aria-label to describe an interactive element when it does not have a visible text label.
Example:
<button aria-label="Open navigation menu">
    ☰
</button>
I also learned about aria-expanded, which communicates whether an expandable menu or section is open or closed.
<button aria-expanded="false">
    Menu
</button>
These attributes can help screen readers understand interactive elements.
I learned that ARIA should not replace proper HTML. It should be used when additional accessibility information is necessary.
For my website, this helped me understand why accessible navigation, buttons, forms, and other interactive features matter.

13. Using WAVE to Evaluate My Website
One of the tools I learned to use for accessibility was WAVE (Web Accessibility Evaluation Tool).
WAVE helped me identify possible accessibility problems throughout my website.
Website: https://wave.webaim.org/
I used the tool to better understand how accessible my pages were and what I could improve.

Step 1: Entering My Website
I opened WAVE and entered my published Starsart webpage.
This allowed the tool to evaluate the page and identify potential accessibility issues.

Step 2: Reviewing the Results
WAVE displayed different indicators that helped me understand what was working and what needed attention.
I learned to look for:
Missing alternative text.
Missing form labels.
Empty links.
Heading structure problems.
Color contrast issues.

Step 3: Understanding Color Contrast
One of the things I learned was how important color contrast is.
For example, if I use light-colored text on a light background, some visitors may have difficulty reading it.
I learned to look at the relationship between the text color and background color.
When WAVE identified contrast concerns, I could go back into my CSS and adjust the colors.
This example uses dark text on a light background and white text on a darker button background.
Here is my report for each page 

Main page- https://wave.webaim.org/report#/https://atkinsonaine.github.io/Starsart/

Contact me page- https://wave.webaim.org/report#/https://atkinsonaine.github.io/Starsart/contact.html

Commission page - https://wave.webaim.org/report#/https://atkinsonaine.github.io/Starsart/commissions.html 

Pet photography page- 


Step 4: Making Changes
After reviewing the results, I learned to return to my code and make corrections.
-Adding missing alt text.
-Improving color contrast.
-Correcting heading organization.
-Adding form labels.
-Making links easier to understand.
= adding accessibility 


Step 5: Testing Again
After making changes, I could run WAVE again to see whether the problems were corrected.
This taught me that accessibility is something developers should continuously review throughout the development process.
I also learned that automated accessibility tools do not identify every possible problem, so manual testing is important too.

I started learning how to break the problem down and look for what needed to be corrected.
This helped me become more comfortable working in VS Code and understanding how HTML and CSS connect.


14. What I Learned and How I Have Grown
Building Starsart has helped me understand web development in a way that simply reading about HTML, CSS, and JavaScript could not.
I was able to take the concepts I learned in class and apply them to something personal.
I learned how to build webpages, organize photographs, create layouts, work with CSS, and understand the importance of accessibility.

Some of the biggest skills I developed include:

-Building webpages using HTML.
-Organizing content with semantic elements.
-Connecting external CSS stylesheets.
-Styling webpages with colors, fonts, and spacing.
-Using Flexbox to arrange elements.
-Using CSS Grid to organize photographs and content.
-Creating responsive layouts with media queries.
-Adding photographs and alternative text.
-Creating forms and buttons.
-Understanding JavaScript functionality.
-Learning about ARIA.
-Testing accessibility using WAVE.
-Improving color contrast.
-Publishing my website through GitHub Pages.
-Troubleshooting errors and correcting my code.

I also learned that there is always something new to learn in technology.

15. My Future Goals for Starsart website

-Adding a hover effect that enlarges photographs.
-Creating a lightbox that allows visitors to view larger photographs.
-Website Functionality
-Adding more JavaScript features.
-Making buttons and menus more interactive.
-Improving the contact form.
-Learning how to connect a database.
-Future Development
-Learning how to use APIs and the Fetch API.
-Understanding how online shopping carts work.
-Learning how to create websites that store and retrieve information.
-Continuing to improve accessibility.
-Making my website work smoothly on different devices.

These are skills I hope to continue developing as I learn more about web development.

 My Final Reflection
Creating Starsart  portfolio has been more than just completing a class assignment for me. It has given me an opportunity to take what I am learning and turn it into something I can actually see, interact with, and continue building to share with others 
When I first started learning HTML and CSS, I was still trying to understand how all the different pieces of a website connected. As I continued working through my assignments, I started recognizing how the things I learned in class could be applied to my own website.
I especially enjoyed being able to include my own photographs and artwork to create something that represents my interests. I also learned that building a website involves more than just design. It requires organization, problem-solving, accessibility, testing, and understanding how people will interact with what you create.
There were challenges along the way, and I didn’t always get things right the first time. However, those experiences helped me learn how to troubleshoot, make changes, and become more comfortable with coding.
One of the most important things I am taking away from this project is that I don’t have to know everything right away. Web development is something I can continue learning through practice, creativity, and experience.
I am proud of the foundation I have created with Starsart, and I look forward to continuing to improve it as I grow in my education and future career in technology.
Starsart is a reflection of what I have learned so far and a starting point for everything I hope to create in the future.
