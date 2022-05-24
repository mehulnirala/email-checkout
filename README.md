# Email checkout
An idea :bulb:  to intergrate checkout experience inside email recommendations campaigns.

## Inspiration 🥇

Email marketing can help businesses reach a wider audience, drive sales, recover abandoned carts, and further develop your relationship with customers. The user gets redirected to a website guiding them to checkout.

With Rapyd checkout toolkit, payment experiences can be embedded as iframes directly into the cart thus, giving more control and simplifing the entire checkout experince.
However, iframes load content from an external website and there are large security concerns due to which most email service providers (Gmail, Yahoo, etc.) won’t allow iframe content in emails and they automatically block it.

We solve this by using Email add-ins(add-ons) that helps to address the security concerns of loading an iframe inside an email. This would bring the the checkout experience to where the user is curently at, without requiring context switch.


## Run
- Getting the recommendations email
    - Use [message playground](https://messagecardplayground.azurewebsites.net/) to send yourself an example email of product recommendation.
    - Paste the json from [https://email-checkout.herokuapp.com/manifest.xml](https://email-checkout.herokuapp.com/manifest.xml) into the editor and send yourself the card (requires login).
- Add your addin to Outlook desktop following the steps below
    - Click on GetAddins -> My Addins
    - Select Addin from url and paste the url [https://email-checkout.herokuapp.com/manifest.xml](https://email-checkout.herokuapp.com/manifest.xml)
    - Click on install
- Click any item in the actionable message that you sent yourself in the first step.
- Enjoy the checkout experience 🎉


## Build and Run
Set the debug variable in `"Checkout email checkout\src\taskpane\utilities.ts"` to true

Building the project
```
 $ git clone
 $ cd "Checkout email checkout"
 $ npm install
 $ cd ../server 
 $ npm install
```

Running the project
Open a new terminal and go to the project root.
```
 $ cd "Checkout email checkout"
 $ npm start
```
In other terminal/cmd prompt
```
 $ cd server
 $ npm run dev
```

After the installation is done, try the checkout experience by following the [Run](#run) section

## How can it help? ⛑️ 
**Email checkout** is an addin that helps the customers to checkout the recommended (adverstised) items directly from the email app (e.g. Outlook).
- It all starts with e-commerce sending customers recommended /abandoned carts products as a card in promotinal email.
- The user can select from the items from recommendations (promotions) and are presented with checkout page without leaving the email-client 💻.
- It also manages users' data by leveraging the potential of Rapyd Checkout toolkit.

## How we built it 🔧 
- The first stage is to design an adaptive card containing products cards that is used to trigger the email addin checkout.[Card Designer](https://amdesigner.azurewebsites.net/)
- The email addin is built using React.js and Office.js, which renders the Checkout experience.
- The server uses node.js needed to run the add-in and serves as cdn for html and images.

The below is an example card for shoes e-commerce recommendations card.
![image](https://user-images.githubusercontent.com/86864820/169894458-e35d1f73-1cd0-4382-a740-806dd3d47245.png)


## Challenges we ran into 
The spark began with the idea of embedding checkout experience in email recommendations/promotions, however using iframe inside email body is not supported by a lot of email providers due to security concerns. This problem was difficult to solve given the closed nature (private source code) of various apps. The idea of using addin(addons) is a break through to finally achieve email checkout.


## Accomplishments that we're proud of
I am really happy that I was able to create a solution that helps e-commerces  enable their customers to use checkout experince from the email client itself.


## What's next for Email checkout ⏭️
Other important features that I would enjoy adding are:
- Adding various payment methods besides IN Visa.
- Creating an onboarding setup to help customers understand the value of email checkout.
- We would also like to extend email checkout experience to GMail addon


## Snaps
Hope you enjoyed the project 😃.

A sincere thanks to Rapyd and Devpost for creating an opportunity to learn through the Hackathon.

Have a beautiful day 😊.
