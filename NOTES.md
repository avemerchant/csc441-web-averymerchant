## Week 8, Friday
On the phone, I didn't like that my picture was still showing up next to my name so I changed it using flex-wrap: wrap. I also changed the gap between my picture and name to be 1rem instead of 1.5rem because I felt that they were too far apart. 

## Week 9, Wednesday
1. My three pages are my intro page, my projects page, and my relevant coursework page. Since I'm graduating this year, I would really like for this website to be basically a second resume for me. I think it will look really good on my resume and it also gives me an area to expand on my projects and my relevant coursework. When I find the time, I'll add more projects with Github links so that anyone can have direct access to the repo that contains that project. I'll also expand on my relevant coursework more when I have the time to do so.
2. If there were three different css files for each page, I would've had to change each one to be the same in order for my pages to be different. 
3. I'm confused as to why the h1 text appears next to my picture in the home page but only appears below the picture on both of my other pages. I don't necessarily think I want the same picture on each page, but I would like to now how to get it so that h1 appears next to the picture on every page. 

## Week 9, Friday
1. I picked 43rem (~693pix). I dragged my window until the cards were too skinny (in my opinion) and picked the width of the screen at that point. 
2. I changed the max-width. I didn't like how little amount of the screen my text was taking up when I had it on the wide screen of my laptop. It was 43rem and I changed it to 50rem. 
With phone dimensions (iPhone 16 - 393 x 852), my first and last name were very far apart so I changed the line-height to 1.3. 
I also made a media query for my navigation ul because I want the navigation to be in a row until there's not enough room. When the screen is 31rem (~500pix). 
3. I know that they align items on different axes, but I don't fully understand how that works. Based on the note in the lab that says "justify-content: space-betweem - it is inside the media query, because in a column it would push your name to the top of the screen and the link to the bottom," I think in a column, justify-content affects the vertical alignment, but in a row, it affects the horizontal alignment. But, align-items works opposite of that. 
4. I think it makes the CSS more directly tailored to phones / smaller devices. That being said, as the screen gets wider, we add the extra details: "a row when there's room." If it was the other way around, we would be getting rid of rules if the screen wasn't large enough, which I would assume is more time efficient and would the rendering would take longer.

## Week 10, Wednesday
1. HTMl contains the structure and content of a webpage. CSS controls the styling, and presentation of the HTML elements. JavaScript adds aspects that allow the webpage to respond to user actions. 
2. Without defer, the browser stops reading the HTML. It runs the script and then builds the page. The script will be looking for elements that don't exist in the browser yet. 
3. It worked because CSS variables store colors globally. Without variables we would have to write override rules for every element, class, and ID across the whole stylesheet; we would have a lot of repetitive code. 
4. I accidentally put the task 3 work outside of themeButton.addEventListener. I was expecting the button text to change every time I pressed it and instead it wasn't. I noticed rather quickly what was wrong when I compared my code to the code in the lab 15 document. I also knew that that code had to be the issue because I was expecting something very specific to happen and it wasn't happening, so I knew where the mistake was in the code right after figuring out it wasn't working. 
5. When my screen is the full width of my computer (on my Relevant Coursework page), there are 4 cards in a row and two below it in a separate row. I don't like how it looks with the different widths of cards. Is there a way to set the maximum number of cards in a single row? I would like it so that the maximum number of cards in a single row is only 3 cards. I think it would look better overall, since I have 6 cards in that section. Right now it looks messy. 

## Week 10, Friday
1. It prevents the browser's default behavior which would be reloading the page. Without it, the page would reload after the user presses the submit button. 
2. The js code attempts to access a property or method on a variable that evaluates to null because it didn't find the element in the HTML (like the form on the home page). An if statement fixed it because the js code looked to see if that variable was present before attempting to run any methods on it. 
3. I added a live character counter. I thought it would be useful to have a maximum character limit and for there to be a max character limit, the user would have to know how many characters they've typed. I made my maximum 500 characters and I added this to my js file: 
const maxCharacters = document.querySelector("#message").getAttribute("maxlength");
        
        if (message.length > maxCharacters) {
            formStatus.textContent = "Your message is too long. Please keep it under " + maxCharacters + " characters.";
            formStatus.classList.add("error");
            return;
        }
4. I changed the min-width on my media query for my nav. The addition of the dark/light button made it look a little weird. My "Relevant Coursework" title was becoming two lines (stacked) which made the line under the current screen look weird and the button became rather large. I found this in the responsive view, not the phone view. I changed the min width to be 33rem. 
Also, while I was looking in phone view, I realized that I didn't like the way my footer looked. The back-to-top button wasn't center in the ul and I thought it looked strange so I added display: flex which made the button fill out the space. 
5. The form is missing a route. We haven't attached an email to it or anything so it has no where to go. 