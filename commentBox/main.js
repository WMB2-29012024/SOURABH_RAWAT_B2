import { addComment } from "./commentForm.js";
import { showComments } from './commentList.js'

const addCommentbtn = document.getElementById("button");
const form = document.getElementById("form");
const commentInput = document.getElementById("textarea");

showComments();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment();
    showComments();
})
