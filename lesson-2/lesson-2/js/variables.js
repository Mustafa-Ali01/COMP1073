/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */


		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */


		// STEP 4: Variable types (use typeof in the console)
		// Numbers

		// Strings (use '' or "")

		// Booleans

		// Arrays
		
		// Objects

		// STEP 5: Typing (JavaScript is a loosely-typed language)

//Difference between var and let
//1. Scope
        function testScope(){
            if(true){
                var a = 10;//function-scoped
            }
            console.log(a);

             if(true){
                let b = 20;//block-scoped
                 console.log(b);
            }
            //console.log(b);

        }

        testScope();


        //2.Re-declartion and hoisitng

        function demo(){
            //Hoisting with var
            console.log('value of x before declataion',x);
            var x = 10;

             //Hoisting with let
            //console.log('value of y before declataion',y);
            let y = 11;
            


            //Redeclaration with var
            var a = 15;
            var a = 20;
            console.log('Redeclared var a: ',a);

            //Redeclaration with let

            let b = 10;
             b = 20;
            console.log('Redeclared let b: ',b);
                 console.log(c);
                const c = 10;
                //c = 20;
               

        }
        demo();