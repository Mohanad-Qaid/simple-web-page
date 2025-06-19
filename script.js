document.getElementById("recommendation-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const newRec = document.getElementById("newRec").value;
    const recList = document.getElementById("recommendation-list");

    const li = document.createElement("li");
    li.textContent = newRec;
    recList.appendChild(li);

    alert("✅ Recommendation submitted successfully!");
    document.getElementById("newRec").value = "";
});
