# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

## Notes

For the missing styles, I chose to implement font sizes for the desktop and tablet cart items based on patterns from the rest of the designs. The style of the layout was based on what I believed made sense moving from the mobile design.

I chose to also use the default Helvetica font rather than Helvetica Neue, since I was missing the font files. Related to the fonts, I also noticed that the quantity counter in the cart view used Lora instead of Chivo or Helvetica Neue. I wasn't sure if this was a mistake, so I opted to follow the conventions of the rest of the design instead of pulling in a 3rd font. In a real world setting, I would ideally double check this with the designer(s).

Since there wasn't an established pattern for the CSS, I chose to use a mixture of BEM and SUIT for the naming conventions. I opted to not use CSS modules since in the past I felt that it resulted in slightly less readable code. In an ideal world, I would've used a style guide for fonts, buttons, and other common component styles in order to establish a more rigorous `_common.scss` file using SASS mixins with all of the relevant styling, but I felt that it wasn't necessary for this exercise.

I also chose to round some of the font sizes, letter-spacing, and line-heights to very closely related styles found in the rest of the app. In situations where it was _not_ <1px of a difference, I opted for the style that existed in the Sketch document. This is also something that I would clarify with designers before I chose to implement my choices.

In terms of the images, I also chose to not implement different images, since I felt that in a real-world scenario, the images would be embedded in the API. If this wasn't the case, I would have exported and mapped the images to the store's data object. But that would still be unideal to me. I did still choose to implement the images using `srcset` as an example of how I'd like to set up the images.

In terms of functionality, the biggest question mark for me was the `Update` button in the cart view. If I had a little more time, I would've liked to implement the update functionality along with an input field for the `quantity`. The imagined UX would be that a user could input whatever quantity they want in the input field, and as they hit `Update`, it would be checked against available inventory and adjusted accordingly. A value greater than the available inventory would automatically adjust to the maximum quantity available, and the user would see a feedback message indicating that there's not enough inventory available. A value of `0` would remove the item from the cart. If the user exited the cart without clicking `Update`, then the inputs would reset to their previous values. That is how I would assume that the experience would work based on the designs; however, this is another thing I would talk through with the UX/UI designers before implementing the final design.

As for modules I pulled in, I used `cross-fetch` for the API fetch, `classnames` to handle the conditional hiding and showing of the cart, and `node-sass` to handle the `.scss` files.
