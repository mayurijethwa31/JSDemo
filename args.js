function greet(fname, lname, lang, ...rest) {
            if (arguments.length === 0) {
                console.log("missing parameters");
            }
            lang = lang || 'en';
            console.log(fname);
            console.log(lname);
            console.log(lang);
            console.log(rest[1]);
            console.log(arguments);
        }
        greet('john', 'kat', 'english', 'pune', 'kothrud');