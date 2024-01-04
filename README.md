Live link : https://contest-website-4b439.web.app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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
