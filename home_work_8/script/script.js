const wrapper = document.querySelector(".tamagochi_wrapper");
const metrics = document.querySelector(".tamagochi_metrics");
let id = 0;

function createItem() {
    const tamagochiHTMLInstance = document.createElement("div");
    tamagochiHTMLInstance.className = "bird";
    tamagochiHTMLInstance.innerHTML = `
    <div class="body">
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="beak">
            <div></div>
        </div>
        <div class="feet"></div>
    </div>`;
    wrapper.append(tamagochiHTMLInstance);    
}

createItem()
id = id++;
// const bird = new Tamagochi {

// }