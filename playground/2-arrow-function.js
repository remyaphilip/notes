const event = {
    name : 'birthday party',
    guestList: ['remya','libin','renjith'],
    peintGuestList(){
        this.guestList.forEach((x)=>{
            console.log(x)
        })
    }
}

event.peintGuestList();