import express from "express";
const router = new express.Router();
import passport from '../passport-setup.js';

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router.get('/welcome',(req,res)=>{
  res.send(`Welcome ${req.user.given_name}!`);
});
router.get('/',(req,res)=>{
  res.send("You are not logged in");
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect:
      "/",
  }),function(req,res){
    res.redirect('/welcome');
  }
);

router.get('/logout',(req,res)=>{
  req.session = null;
  req.logout();
  res.redirect('/');
});
export default router;
