let input = "";
const AddTask = () => {
    input = document.getElementById("texto").value;
    console.log(input);

    document.getElementById("tarefas").innerHTML += "<div id='${input}'  class='barrinha2'><p class='text' onclick='Riscado(this)'>" + input + "<p> <button class='delete-button' onclick='DeleteTask(\"${input}\")'>X</button></div>";
}

const DeleteTask = (id) => {
    document.getElementById(id).remove();
    console.log("Tarefa removida:", id);
}

const Riscado = (text) => {
    text.classList.toggle("text-delete");
}