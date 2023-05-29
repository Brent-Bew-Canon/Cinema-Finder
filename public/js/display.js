const movBtn = document.querySelectorAll("#saveMovie")
const delBtn = document.querySelectorAll("#deleteMovie")

// adds event listener to each save movie button
movBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        myEl = btn.parentElement
        console.log(myEl.firstChild.nextSibling.firstChild.nextSibling.innerText)
    })
});

// adds event listener to each save delete button
delBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        myEl = btn.parentElement
        console.log(myEl.firstChild.nextSibling.firstChild.nextSibling.innerText)
    })
});

// TODOS:
// 1. get the id of the correct element
// 2. query the database to get all the other information related to the movie
// 3. add the saved movie to the saved movie table
// 4. render the movie information from the SQL query as a new element under the SavedMovies List