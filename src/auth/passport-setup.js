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
        "968381799429-2140bae9m6dmikslb207mdmssg0qtvsp.apps.googleusercontent.com",
      clientSecret:
        "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",
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
