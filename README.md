# Email checkout
An idea 💡to help e-commerce integrate checkout experience inside email recommendations/promotions campaigns.

## Inspiration 🥇

Email marketing can help businesses reach a wider audience, drive sales, recover abandoned carts, and further develop their relationship with customers. The user gets redirected to a website guiding them to checkout.

With Rapyd checkout toolkit, payment experiences can be embedded as iframes directly into the cart thus, giving more control and simplifying the entire checkout experience.
However, iframes load content from an external website and there are significant security concerns due to which most email service providers (Gmail, Yahoo, etc.) won’t allow iframe content in emails and they automatically block it.

We solve this by using Email add-ins(add-ons) that help to address the security concerns of loading an iframe inside an email. This would bring the checkout experience to where the user is currently, without requiring a context switch.


## Run
- Getting the recommendations email
    - Use [message playground](https://messagecardplayground.azurewebsites.net/) to send yourself an example email of product recommendation.
    - Paste the JSON from [https://email-checkout.herokuapp.com/checkout-actionable-message.json](https://email-checkout.herokuapp.com/checkout-actionable-message.json) into the editor and send yourself the card (requires login).
- Add your add-in to Outlook desktop following the steps below
    - Click on GetAddins -> My Addins
    - Select Addin from URL and paste the URL [https://email-checkout.herokuapp.com/manifest.xml](https://email-checkout.herokuapp.com/manifest.xml)
    - Click on install
- Click any item in the actionable message that you sent yourself in the first step.
- Enjoy the checkout experience 🎉

![image](https://user-images.githubusercontent.com/88541725/169943140-0ecf6219-5b35-4a35-a162-d63fee35fd44.png)
![image](https://user-images.githubusercontent.com/88541725/169943234-d2807e09-7bbd-4899-a071-7aa76259b204.png)
![image](https://user-images.githubusercontent.com/88541725/169943283-609d8a1a-d937-41b1-87f2-ff5d9e579c6b.png)
![image](https://user-images.githubusercontent.com/88541725/169943999-3b58a5e1-8306-4dfb-aca4-840e8fcc55ff.png)

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
In another terminal/cmd prompt
```
 $ cd server
 $ npm run dev
```

After the installation is done, try the checkout experience by following the [Run](#run) section

## How can it help? ⛑️ 
**Email checkout** is an add-in that helps customers check the recommended (advertised) items directly from the email app (e.g. Outlook).
- It all starts with e-commerce sending customers recommended /abandoned cart products as a card in promotional emails.
- The user can select the items from recommendations (promotions) and are presented with a checkout page without leaving the email client 💻.
- It also manages users' data by leveraging the potential of Rapyd Checkout toolkit.

## How we built it 🔧 
- The first stage is to design an adaptive card containing product cards that are used to trigger the email add-in checkout.[Card Designer](https://amdesigner.azurewebsites.net/)
- The email add-in is built using React.js and Office.js, which renders the Checkout experience.
- The server uses node.js needed to run the add-in and serves as CDN for HTML and images.

Below is an example card for shoe e-commerce recommendations card.
![image](https://user-images.githubusercontent.com/86864820/169894458-e35d1f73-1cd0-4382-a740-806dd3d47245.png)


## Challenges we ran into 
The spark began with the idea of embedding checkout experience in email recommendations/promotions, however using iframe inside the email body is not supported by many email providers due to security concerns. This problem was difficult to solve given the closed nature (private source code) of various apps. The idea of using add-ins (add-ons) is a breakthrough to finally achieve email checkout.


## Accomplishments that we're proud of
I am really happy that I was able to create a solution that helps e-commerces enable their customers to use the checkout experience from the email client itself.


## What's next for Email checkout ⏭️
Other important features that I would enjoy adding are:
- Adding various payment methods besides IN Visa.
- Creating an onboarding set up to help customers understand the value of email checkout.
- We would also like to extend the email checkout experience to the GMail addon


## Snaps
![image](https://user-images.githubusercontent.com/88541725/170025650-914fb827-319b-426d-b17a-d21d4b498035.png)
![image](https://user-images.githubusercontent.com/88541725/170026262-76b18dd1-62c0-4d7f-ac81-25a4c616159e.png)
![image](https://user-images.githubusercontent.com/88541725/170026362-56688599-27ae-4359-bbb5-c0699922b2c3.png)
![image](https://user-images.githubusercontent.com/88541725/170026582-89be8579-e897-4f86-8a80-14d16201cae5.png)
![image](https://user-images.githubusercontent.com/88541725/170026646-1451f827-f0d7-4374-8ba4-411e58a56f34.png)
![image](https://user-images.githubusercontent.com/88541725/170026832-cc359527-c601-4849-b8d2-387d05b0f4f6.png)
![image](https://user-images.githubusercontent.com/88541725/170026907-2a0f1192-961e-49e3-a629-3b3bdf5ea27b.png)

Hope you enjoyed the project 😃.

A sincere thanks to Rapyd and Devpost for creating an opportunity to learn through the Hackathon.

Have a beautiful day 😊.
