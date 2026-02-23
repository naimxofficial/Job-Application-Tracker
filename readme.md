# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### - getElementById is used to select an html element using the given id it has in itself. getElementById can only select 1 id at a time.
### - getElementsByClassName can select every html element that has the same class name. It returns them in a live HTMLCollection.
### - querySelector returns only the first match it finds.
### - querySelectorAll returns all the matches it finds. It returns matches in a NodeList.
### - querySelector and querySelectorAll both can find html elements by their tag, class and id.

# 2. How do you create and insert a new element into the DOM?
### - First we have to create an html element using document.createElement() . Inside the paranthesis, we have to write a tag like p/div/h1 etc. Then, we have to set the innerText. At the end, we have to select the parent and use appendChild() to insert the newly created html element into the DOM.

# 3. What is Event Bubbling? And how does it work?
### - In the DOM, when an event happens on an element, it doesn't just stop there. It bubbles up to its parent, then the grandparent, and so on, until it reaches the very top.

# 4. What is Event Delegation in JavaScript? Why is it useful?
### - Event delegation is a JavaScript technique where a single event listener is attached to a common parent element to manage events. We select the parent instead of selecting every child elements

# 5. What is the difference between preventDefault() and stopPropagation() methods?
### - event.stopPropagation() stops the event from moving further through the DOM tree.
### - stopPropagation() prevents the default action of an element.