var LocalStrategy   = require('passport-local').Strategy;
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        if(email == 'leogaldioli@hotmail.com'){
            return done(null,true);
        }else{
            return done(null,false);
        }
        //asynchronous
        // process.nextTick(function() {
    	   // #TODO pesquisar usuario com o mesmo email no banco        
            
                // if there are any errors, return the error
                // if (err)
                //     return done(err);

                // check to see if theres already a user with that email
        //         if (user) {
        //             return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        //         } else {

    				// // if there is no user with that email
        //             // create the user
        //             var newUser            = new User();

        //             // set the user's local credentials
        //             newUser.local.email    = email;
        //             newUser.local.password = newUser.generateHash(password);

    				// // save the user
        //             newUser.save(function(err) {
        //                 if (err)
        //                     throw err;
        //                 return done(null, newUser);
        //             });
        //         }
    }));

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
            // if (err)
            //     return done(err);

            // if no user is found, return the message
            if (email == 'leogaldioli@hotmail.com'){
                return done(null, true);
            }else{
                return done(null, false);
            }
            // if the user is found but the password is wrong
            // if (!user.validPassword(password))
            //     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
        // });

    }));
};