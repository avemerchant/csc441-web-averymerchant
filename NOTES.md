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