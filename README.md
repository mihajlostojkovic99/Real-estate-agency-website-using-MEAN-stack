# Real-estate-agency-website-using-MEAN-stack
Web application for an agency renting and selling real estate. The app implements login and register system which supports 3 types of users as well as a guest user. Users can be:
* Admin
* Registered User
* Agency employee

**This was made as a university project for *Internet Application Programming* class in School of Electrical Engineering, University of Belgrade.**

## Basic details
While registering, some fields are mandatory and a password regex is implemented for a secure password. Admin has to approve or deny every registration. He can also manually add a User to the system. Users can at any point change their details and password. When registering, user data that must be provided is:
* Name
* Surname
* Username (unique and can't be changed)
* Password
* Profile picture (optional, default one is set if none provided)
* E-mail
* Country and city of residence

## Guest/Front Page
Guests have reduced access to the site. They can do a reduced search of real estate but cannot click on them for further details.\
Search results are shown as *"cards"*. The *card* shows some basic description and one random picture of the apartment/house. Advertised real estate is shown above the search results in form of big pictures with arrows on both sides for scrolling through the advertisements.

## Registered User
In addition to the above, a registered user can click on the *"card"* to view details on a new page. Every property has the following details:
* Short description by the owner
* Address - city, municipality, street and number
* Whether it is a house or an apartment
* For a house - how many floors it has, for a apartment - on what floor it is
* Area (in sqm)
* Number of rooms
* With or without furniture
* Picture and video gallery
* Is it for selling or renting
* Price (for renting it is a monthly rent)
* Owner (can be another User or the agency)

If the property is for renting then the User can choose the dates when he'd want to rent it and propose the price for those dates. The aplication takes into account previous approved rents and won't allow the dates to overlap (will alert the user to change the dates). 
  
If the property is for sale then the User can choose to pay cash or take a credit in which case the User will be shown the down payment ammount (20%).  
  
Every User also has a page where he can manage sent and received requests. He can check the approval status for sent requests and he can approve the received requests for his own properties. By accepting an offer, the request is forwarded to an agent for review. Every property the User adds to the application has to be verified by an agent as well.

## Agent
Agents can approve properties and can also add their own (in that case the owner is the agency) and they can see all properties on the application. Agents can also promote a property. On their homepage they have a graphical overview of properties by different parameters (per price range, per city etc.). This is implemented using a ***chart.js library***.\
When an agent approves a request it is finished and the property dissapears from search results if it is sold or it becomes unavailable for those dates for renting. All other requests for that property are automatically denied. Agent can also see a list of finished sales with profit information.

## Admin
Admin is a user with special privileges. Admin can add/update/delete users, can accept or deny registration requests, add and approve properties and like agent, has a graphical overview of properties and can see a list of finished sales. Admin also defines what percentage the agency takes for mediation (for properties now owned by the agency).

## Technical characteristics of the application
### Navigation
The application has a navigation bar on top with dropdown menus which dynamically change with a different type of user. It is elegantly made with fluid animations and adjusts with resizing (though not mobile friendly).
### Uniformity
The application has a uniform look accomplished using pure CSS. Every page has a header and a footer, home page button and a logout button.
### Authorisation
Authorisation is implemeted within the CMS(Content Management System). Levels of access are: guest, registered user, agent and admin. Web pages are allowed only to a single category of users, and not allowed to other types.
### Technologies
The web site is made using Angular framework with Express and NodeJS in the backend with the use of a noSQL MongoDB database.
