const text = document.querySelector(".quote");
const author = document.querySelector(".author");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".styled");
const fetch_Quote = async () => {
  const hold = await fetch("https://type.fit/api/quotes");
  const quote1 = await hold.json();
  const number = Math.floor(Math.random() * quote1.length);
  const list = quote1[number];
  const quote = list.text;
  const authorName = list.author;
  text.innerText = quote;
  author.innerText = authorName;
  button2.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`;
};
button1.addEventListener("click", fetch_Quote);
fetch_Quote();
