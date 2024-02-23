export const home = () => {
    const words = ["Álmok", "formálják", "a", "valóságot."];

    const panelBackgrounds = [
        "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611625105602-42ee06be977e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1592666452220-529326e2588e?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    words.forEach((item) => {
        console.log(item.index);
        document.querySelector(".panels").innerHTML += `
        <div class="panel">${item}</div>
        `;
    });

    const panelNodeList = document.querySelectorAll(".panel");

    panelNodeList.forEach((panel, i) => {
        panel.style.backgroundImage = `url(${panelBackgrounds[i]})`;
    });

    document.querySelector(".panels").addEventListener("click", ToggleOpen)

    function ToggleOpen(e) {
        if (e.target.classList.contains("open"))
            e.target.classList.remove("open");
        else {
            panelNodeList.forEach((obj) => obj.classList.remove("open"));
            e.target.classList.add("open");
        }
    }
};