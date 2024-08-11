# Intro to Javascript

This project is a fair attempt to explain all the major concepts in ReactJs with a beginner's approach. All the code are written in our PluralCode April 2024 Cohort React Class

NOTES:
ReactJS is a popular javascript <a href="https://www.red-gate.com/simple-talk/featured/the-difference-between-libraries-and-frameworks/">library</a> for building user interfaces

What is MVC? https://www.freecodecamp.org/news/what-does-mvc-mean-in-computer-science/#:~:text=MVC%20is%20an%20abbreviation%20that,so%20you%20can%20understand%20it.

What is JSX? https://www.w3schools.com/react/react_jsx.asp#:~:text=JSX%20stands%20for%20JavaScript%20XML,and%20add%20HTML%20in%20React.

# IN REACT, THE APP.JSX FILE IS THE ENTRY POINT TO THE REST OF YOUR REACT CODE. IT IS IMPORTED INTO THE MAIN.JSX FILE AND INJECTED INTO THE ROOT DIV, THEREFORE IT IS EXPECTED TO BE THE MAIN FILE THAT HOLDS THE REST OF YOUR UI CODE. 

JAVASCRIPT CONCEPTS TO KNOW BEFORE LEARNING REACT -> https://www.geeksforgeeks.org/top-javascript-concepts-to-know-before-learning-react/

# DESTRUCTURING
## ARRAY DESTRUCTING
    const vehicles = ["Toyota", "Ford", "Mitsubishi", "Tesla"]; //vehicles[2] -> Mitshubishi

    const [simple, truck, german, electric] = vehicles;

    console.log(simple);

## OBJECT DESTRUCTING

 const person = {
    name: 'Lahm',
    age: 45,
    city: 'Los Angeles'
}

const {name: personName, age, city} = person;
console.log(personName); //Lahm


# Rest Operator => allows you to collect all the remaining elements into an array.

    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0); 

    }

    console.log(sum(1, 2, 3, 4))

# Spread Operator => is used to spread/copy elements of an array or object into another array or object
    const numbers = [1, 2, 3, 4];

    const numbers2 = [...numbers, 5, 6, 7, 8];

    console.log(numbers2);

# CALLBACK FUNCTION 

    function greet(name) { //parameter
        return "Hello there, " + name + ". " + "Your name is "   
    }

    function callBackFn(name) {
        return name;
    }

    console.log(greet(callBackFn("Bayo")));//when a function call accepts another function as the argument, then you call the argument a call back function;

# EXERCISE: TRY AND IMPLEMENT THE FOLLOWING WITH REACTJS:
https://www.figma.com/design/8GKMXn7LgVoLXr9fWILrH6/Laundry-service-website-(Community)?node-id=2-1204&t=rY6kgkH9VOAAexU3-0