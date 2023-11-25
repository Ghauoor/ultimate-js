## Dom ==> Tree structure

document --> Main Tree hold many properties in JSON

## HTML Selector

ie -> document.querySelector(".bold") and many more...

## HTML Element

const el = document.getElementById("myDiv")

```<html lang="en">

<head>
    <title>Basics of DOM</title>
</head>

<body>
    <div id = 'myDiv'>
        <p class =  'bold'>Hello</p>
    </div>
</body>

</html>
```

el.innerText --> ""
el.innerHTML --> change the HTML
el.id --> access any attribute

const e = document.getELementByClassName("bold")[0]
e.ClassName ==> 'bold'
e.innerText ==> "Hello"

## Attributes

const el = document.getELementByTagName("p")[0]
el.getAttribute("class") --> bold
el.setAttribute("class","bold dark") --> bold

## CSS Styles

const el = document.getELementByTagName("bold")[0]
el.styles.color -> black
el.styles.color = blue
el.styles.backgroundColor
el.styles.backgroundColor = 'yellow'

## Events

const el = document.getELementByTagName("bold")[0]
el.onClick = function () {}
el.addEventListner ("click", function(){})

## Add Element

const el = document.getELementByTagName("bold")[0]
const child = document.createChild('span')
el.appendChild(child)
By the same we can remove elememt as well

## BOM ==> Browser Object Modal

window is the main object
