document.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector("article");
    const counter = document.getElementById("word-count");

    if (!article || !counter) return;

    const text = article.innerText
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = text ? text.split(" ").length : 0;

    counter.textContent = `Word count: ${wordCount.
