# Live Link :

# ContestHub - Project Contest Creation Platform

##ContestHub is a comprehensive platform designed to facilitate contest creation, management, and participation across diverse domains. Here are the key features and functionalities:

## Features:

### Home Page:
- **Navigation Bar:** Includes logo, website name, Home, and Login buttons.
- **User Profile:** Displayed in the navbar with a dropdown menu for user-specific actions.
- **Search Bar:** Enables users to search contests based on tags, implemented with backend functionality.
- **Popular Contests Section:** Showcasing popular contests with unique design elements, contest name, image, participant count, and details button.
- **Competition Advertisement:** Dynamic section displaying contest winners, participation count, inspiring text, and images.

### All Contest Page:
- Displays all contests added by creators.
- Contest details include name, image, participant count, details button, and short description.
- Implements tab view for contest types/tags.

### Contest Details Page:
- Provides comprehensive contest details, including name, image/banner, participant count, description, task details, prize, winner's information (if decided), and dynamic deadline countdown.
- Allows users to register for contests and redirect them to the payment page.

### Role Management:
- Admin, Contest Creator, and User roles defined with specific permissions.
- Admin can approve, update, and delete contests.
- Contest Creators can add contests, update details, and select winners.
- Users can participate, view their dashboard, and manage their contests.

### User Dashboard:
- Sections for My Participated Contests, Winning Contests, and Profile.
- Enables users to view registered contests, successful participation, and update profile information.

### Creator Dashboard:
- Sections for adding contests, viewing created contests, and managing submissions.
- Add Contest Page with a form containing essential fields for contest creation.
- Submission page to view all submissions, declare winners, and manage entries.

### Admin Dashboard:
- Sections for managing users and contests.
- Allows admin to toggle user roles and perform CRUD operations on contests.

### Login and Registration System:
- Secure login with email/password and Google sign-in.
- Registration page includes fields for name, email, password, and photo URL.



##

- Implementation of tanstack query for data fetching (GET method).
- Integration of react-hook-form in all form pages.
- Use of toast for CRUD operations instead of alerts.
- JWT implementation for login authentication and token storage.
- Pagination integrated for table and card views.












Website Feature :
1. In home page we can see a navbar section.where user can login.
2. Participant can complete registration through payment and also he/she must be logged in in this website otherwise he/she cann't see contest details.
3. After login user can see a dashboard.There are three dashboard :user, creator, admin
4. When user will log in then user can see his/her dashboard here are: 
 --My Participated Contest:In this section user can see all the contests  which he/she has
completed payment.
 --My Winning Contest Page: In this page user will see where he is winner.
 --My Profile: User  will see his/her win percentage and user can update his/her profile(profile name, picture),
 5. When creator will log in creator can see 3 options:
 --Add Contest: where creator can add contest
 --My Created Contest: If a creator visits this page, he/she can see all the
contests he/she posted. There have
edit and delete buttons for the contest, By default the contest status will
be pending. If an admin approves the contest the status changes to
accepted. The contest will then appear on the all-contest page. Also if an
admin accepts the contest the creator can not edit and delete the contest.
Only an admin can delete the contest after this.
6. Contest Submitted Page: If a creator visits this page, he/she can see all
the submissions of a particular contest he/she posted.Clicking on this the creator can declare the winner for that particular task.
7. Admin Login Page:
--Manage User Page: If an Admin visits this page, he/she can see all the users and admin can
toggle the role of any user(admin>Contest creator>Normal User)
--Manage Contest Page: If an admin visits this page, he/she can see all the contests.
 in tabular form with two buttons(Delete and Confirm).  When an admin deletes a contest, the
contest gets removed from the database.


Website Technologies which i have used : tanstack query , react-hook-form, JWT, 
