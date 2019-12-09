
 function BoardMember(name, homeState, training){
    this.training = training;
    this.homeState = homeState;
    this.name = name;
  }
  
  BoardMember.prototype.veto =  function (){
    return "No, I must disagree";
  }

<<<<<<< HEAD
    BoardMember.prototype.approve  =  function (){
=======
    BoardMember.prototype.veto =  function (){
>>>>>>> f49eded350ba0851895ee311df6c2a33326fd08f
    return "You can do that!";
  }

    BoardMember.prototype.doCharity =  function (){
    return 'I like to help people.';
  }

    BoardMember.prototype.releasePressStatement =  function (){
    return "You will see great things from Scuber.";
  }
  
    BoardMember.prototype.sayHi =  function (){
<<<<<<< HEAD
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
=======
    return "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.";
>>>>>>> f49eded350ba0851895ee311df6c2a33326fd08f
  }