const addComment = () => {
    const commentInput = document.getElementById("textarea");
    if (commentInput.value) {
        const inputDate = new Date().toLocaleString();
        const commentData = {
            date: inputDate,
            text: commentInput.value
        }

        const savedComment = JSON.parse(localStorage.getItem('comment') || '[]');
        savedComment.push(commentData);
        localStorage.setItem('comment', JSON.stringify(savedComment));
        commentInput.value = '';
    } else {
        alert("Please comment something!!!")
    }

};

export { addComment };