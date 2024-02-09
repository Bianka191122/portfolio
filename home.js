export const home = () => {
    const words = ["lelket", "csak", "egyszer", "kapunk."];

    const panelBackgrounds = [
        "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
        "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
        "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57",
        "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
        "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
        "https://source.unsplash.com/tuEtpjghVmg/1500x1500",
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