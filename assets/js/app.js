import "../scss/app.scss";
import axios from "axios"

function getDataFromRoom() {
    return axios.get('http://localhost:3000/room.json')
}

async function data(room) {
    const res = await getDataFromRoom(room);
    return res;
}

let link = document.querySelectorAll('.room_link');
let roomName = document.querySelector('.room_box .name');
let roomCapacity = document.querySelector('.values #capacity');
let roomPeople = document.querySelector('.values #people');
let roomMaterial = document.querySelector('.values #material');
let roomImage = document.querySelector('.img_container_room #image');

link = Array.from(link);
link.forEach((element) => {
    element.addEventListener('click', () => {
        data().then(roomArray => {
                let selectedRoom = roomArray.data.find(e => e.id === element.id);
                roomName.innerHTML = selectedRoom.name;
                roomCapacity.innerHTML = selectedRoom.capacity;
                roomPeople.innerHTML = selectedRoom.people;
                roomMaterial.innerHTML = selectedRoom.material;
                roomImage.src = selectedRoom.image;
            }
        )
    })
});