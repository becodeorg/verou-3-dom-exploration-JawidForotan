Now that we can acess the DOM and modify existing nodes, let's try to create new ones!

Using the document.createElement() method we can create any element node we'd like (<p>, <section>, <div>, ...).

We then need to create text node for the text inside the elements, using the createTextNode method.

The trick is to append each node to its corresponding parent, using either the appendChild or insertBefore method, that way you can position your newly created nodes in the DOM tree.

Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
