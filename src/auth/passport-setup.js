import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";

passport.serializeUser(function (
  user,
  cb
) {
  cb(null, user);
});

passport.deserializeUser(function (
  user,
  cb
) {
  // user find by id from data base
  cb(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "oAUTH Client ID",
      clientSecret:
        "CLIENT SECRET",
      callbackURL: `${process.env.URL}:${process.env.PORT}/google/callback`,
      passReqToCallback: true,
    },
    function (
      request,
      accessToken,
      refreshToken,
      profile,
      done
    ) {
      return done(null, profile);
      //   User.findOrCreate(
      //     { googleId: profile.id },
      //     function (err, user) {
      //       return done(err, user);
      //     }
      //   );
    }
  )
);

export default passport;
