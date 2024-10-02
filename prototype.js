//ONE
let parent={
    read:"Read"


};
let child={
    play:"I want to play"
    
};
child.__proto__=parent;
console.log(child.read);
console.log(child.play)

//TWO
let person={
    
    walk(){
        console.log("Yes walk")
    }


};
let person1={
    ride(){
        console.log("I can ride")  },
    __proto__:person
    
};
let person2={
    jump(){
        console.log("I can Jump")
    },
    __proto__:person1
};
person2.walk();
person2.ride();
person2.jump();
