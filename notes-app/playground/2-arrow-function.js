const event = {
    name: 'birthday party',
    guestList: ['remya','libin','renjith'],
    printGuestList(){
        this.guestList.forEach((guest)=>{
            console.log(guest);
        })
    }
}
event.guestList()