const params = new URLSearchParams(window.location.search)

const placeId = params.get("id")

let placeData
let currentLang = "uz"

async function loadData() {

    const res = await fetch("data/places.json")

    const data = await res.json()

    placeData = data[placeId]

    render()

}

function render() {

    document.getElementById("title").innerText =
        placeData[currentLang].title

    document.getElementById("description").innerText =
        placeData[currentLang].description

    document.getElementById("video").src =
        placeData.video

    document.getElementById("map").src =
        placeData.map

}

document.getElementById("language").addEventListener("change", (e) => {

    currentLang = e.target.value

    render()

})

loadData()