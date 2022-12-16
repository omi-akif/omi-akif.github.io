
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){

  createText('--')

  createText('This is Akif here! What you are looking here is my portfolio.')

  createText("Type 'help' if you want to know how to know more about me.")

  createText('--')


  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest";
  span1.textContent = "@hummer-akif-portfolio";
  span2.textContent = " ~/khandaker-akif-razzak";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "This is my GitHub page. You can follow me here!d");
    createCode("about me", "If you want to know Who am i and what do i do...");
    createCode("social", "I am an introvert guy. But I do have a social life!");
    createCode("clear", "You can clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/omi-akif/' target='_blank'><i class='fab fa-github white'></i> github.com/omi-akif</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("I am an AI trainer working on developing and training an AI Chatbot known as Alime of Alibaba. My focus is to do Deep Learning based dialogue model research, chatbot development, NLP, and provide insights into the the development of the the Chatbot. I am also currently leading a Chatbot project in the entire South Asia called ASHA, which is about creating a transformer based dialogue models in an E-commerce context and do research on it. I am also researching on word2vec models to make scalable Chatbots in Bangladesh that can help customers with information and give a unique experience to retain customers.")
  }
  else if(value === "social"){
    trueValue(value);
    // createText("<a href='https://github.com/omi-akif/' target='_blank'><i class='fab fa-github white'></i> github.com/omi-akif</a>")
    createText("<a href='https://www.linkedin.com/in/omi-akif/'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/omi-akif/</a>")
    createText("<a href='https://web.facebook.com/omi.akif.7/' target='_blank'><i class='fab fa-facebook white'></i> facebook.com/omi.akif.7/</a>")
  }
  // else if(value === "social"){
  //   trueValue(value);
  //   createText("Didn't you mean: social -a?")
  // }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;

  app.appendChild(p);
}


function createDots(){
  const p = document.createElement("p");

  p.innerHTML += 'Wait';

  app.appendChild(p);
  
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();