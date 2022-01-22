# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Link](#link)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Link

- Live Site URL: https://frontend-mentor-tipcalculator.vercel.app/

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on the sizes given by the challange
- See hover states change for some interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

https://github.com/mendoza256/frontend-mentor-tipcalculator/blob/bd99db17f0136da20791a45b866068dcae71d455/screenshot.png

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- actually forgot mobile-first workflow, but re-did it later
- Javascript (mostly looked at tutorials here and there and adapted the code to fit my project)

### What I learned

The most frustrating things I had to overcome were: The struggle with CSS margins and paddings not adjusting how I thought they would. Either because I forgot about the concept of collapsing margins, or I had declared a padding/margin somewhere else on the element and forgot. From now on I'll try to use "margin-bottom" only and "box-sizing: border-box", wherever it makes sense.

To see how you can add code snippets, see below:

```css
.proud-of-this-css {
    border: 2px solid transparent;
    outline: none;
}
```
```js
function errorMsg() {
    if (peopleValue <= 0) {
        document.getElementById("error-msg").innerHTML = "Can't be zero";
        document.getElementById("input-ppl").style.border = "2px solid indianred";
    } else {
        document.getElementById("error-msg").innerHTML = "";
        document.getElementById("input-ppl").style.border = "2px solid transparent";
    }
};
}
```

### Continued development

I wanna tidy up all the code. I feel like especially the CSS code is lacking cleanliness.
There's also still some hiccups in the javascript calculation.

### Useful resources

There's a youtube tutorial doing this challenge, I looked at it for the most parts of the JS code, as I never did JS on a website before. It felt a bit like cheating, but I still learned a lot on how to apply JS to web pages.


