const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");
const btnE1 =  document.getElementById("btn");
const apiURL="https://api.quotable.io/random";
 async function getQuote(){
   const response = await fetch(apiURL);
   const data = await response.json()
   const quotecontent = data.content;
   const quoteauthor= data.author;
   quoteE1.innerText = quotecontent;
   authorE1.innerText ="~"+quoteauthor;
 }
btnE1.addEventListener("click",getQuote);
  
  

