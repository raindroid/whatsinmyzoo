## Inspiration
<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/386/123/datas/original.png" height="200"/>
During this COVID-19 pandemic time, most of us are working or studying at home. We've all had moments where we wanted to go to the library to study but we can't; or wanted to go and hang out with friends and chat about life, but we can't. The number of covid cases is declining steadily, but how about our mental health? We are having much fewer social interactions than normal. From a poll conducted by KFF, 53% of adults in the United States reported that their mental health has been negatively impacted due to worry and stress over the coronavirus time. 

With all that, we want to come up with a way to address the social anxieties we have caused by the pandemic.

## Video Introduction & Demo
[![Video Demo](http://img.youtube.com/vi/bjh7DhCyrmI/0.jpg)](http://www.youtube.com/watch?v=bjh7DhCyrmI "WhatsInMyZoo - UottaHacks Project")

## UI
<p float="left">
  <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/385/670/datas/gallery.jpg" height="240"/>
  <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/386/105/datas/gallery.jpg" height="240"/>
  <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/386/085/datas/gallery.jpg" height="240"/>
  <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/386/093/datas/gallery.jpg" height="240"/>
</p>

## What it does
**What's in my zoo?!** is a web app that allows individuals to chat, call, or live streaming within an online room. What makes our app different from other chat apps? All of the session rooms can be made public so everyone sees it can join. Each room could be a working environment or a library/study environment. 

Apart from exploring and joining others’ rooms, you can also create one room on your own, of course. With only a room type (study or work) and a room topic, you can find strangers online who are interested in your topic and join your room, so you won’t be alone studying or working!!! You can also invite your friends to join your room by sharing the room id with them, so you can study/work with them online just the same as you were in real life!!! (there’s also an option to make your room private, so you and your friends will not be bothered by any strangers). 

Inside each session room, there will be a panel that displays the time you spend for this work/study session(also known as the Zoo time in our app). We plan to keep track of every work/study session for each user and display their daily Zoo time in the form of charts and diagrams. Apart from your own Zoo time displayed within the session, there’s a separate panel displaying the current Zoo time for all users inside the room. This is also known as the ‘leaderboard’ to show who spent the most time inside the session studying/working.

Okay, I know you may wonder now, up until here, where’s the zoo in our app name coming from? Here comes the interesting part!! To help increase our user’s productivity, every time they use the app, they will have the chance to win a random animal badge after finishing a session. The badges they hold will later turn into “real’ animals moving around in their virtual zoo. You can also check out your animal badge collection on the gallery page. 

Animals have different levels of rarity (rarity by the chances to get them). The longer you spent in a session studying/working, the higher chance you would have to earn more rare animals. So study/work hard and get your animal badges!!! 

With the collection and zoo display feature in our app, users can share and show off their zoo to friends. Isn’t that fun to collect and build your zoo while studying/working with high productivity and not being alone at the same time? Start using our **What’s in my zoo?!** now!!!

## How we built it
The wap app is hosted on the **google cloud** compute engine. The front-end uses ReactJS and the back-end uses NodeJS. We use firebase for site user authentication. For instant messaging and live video streaming, we use the message distribution service provided by **Solace**. It significantly decreased the complexity and the pressure on our back-end. For storing and retrieving all the user data, we use RESTful API from **DataStax**. The domain and DNS lookup service of our website is provided by **domain.com**.
![Block Diagram of The Project](https://raw.githubusercontent.com/Louis-He/whatsinmyzoo/main/whatisinmyzoo.png)
## Challenges we ran into
1. Take time reading documents and make sample codes work.
2. Front-end development and implementation are harder than we thought and took more time than we expected. We’ve faced many tiny problems when trying to implement animations on the web.

## Accomplishments that we're proud of
1. We are so proud of the idea of this web app we came up with. During this pandemic time, we faced situations where we have questions about a school class but we can’t seek help as much as we do in real life. Or it is just too boring for working from home and sometimes we just want to talk to someone. Our app would perfectly solve the problems. Not only provided a platform for making more friends online, but our app would also boost your study/work productivity. Our app is also perfect for people who have less self-control. By sharing a room to work/study together, people can discipline and help each other.
2. Our web app is designed to host multiple sessions and each session needs to support instant messaging and video streaming between multiple users. This can significantly increase the complexity of our back-end and can certainly hurt the scalability of our app. To solve this, we use the message distribution service provided by Solace. This is the first time we learned and used this service on our project. It decreases a lot of pressure on our back-end.

## What we learned
1. Excellent teamwork! Good things happen during this hard time.
2. Use NodeJS to support the back-end. 
3. Backend connection to DataStax for database deployment.
4. Solace message distribution and live video streaming on top of it.
5. Web Animation.
6. Adobe XD for the design phase.

## Future pitch
Our app is intended to increase productivity and increase the level of social interaction at the same time. More features will be added if we want to continue this project after the Hackathon. More features could be but not limited to:
1. Competition Zoo time between friends.
2. Share zoo and badge achievement through social platforms.
3. Unique daily schedule for every user. Mixed with study/work session and the interest group/club or school/work social session.
4. Penalty for not completing their session.
5. Gallery collection that displays all the animal badges that users hold, with the rarity of the animal also shown.
6. Virtual AI that monitors the session room to make sure everyone follows the rule in each session.

# Link
[Devpost](https://devpost.com/software/what-s-in-my-zoo) 
