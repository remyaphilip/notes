const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return 'your notes';
}
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((x)=> x.title === title)
    if (!duplicateNote) {
        notes.push({title: title, body: body});
        saveNotes(notes);
        console.log("new note added");
    } else {
        console.log("note title exists");
    }
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    } catch (e) {
        return [];
    }
}
const readNote =(title)=>{
    const notes = loadNotes();
    finsNote = notes.find((e)=> e.title === title);
    if(!finsNote){
        console.log(chalk.red('note not found'))
    }else{
        console.log(chalk.green(finsNote.title,finsNote.body))
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((x)=>{
       return title !== x.title;
    });
    if(notes.length > newNotes.length){
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(newNotes);
    }else{
        console.log(chalk.red.inverse('no note found'));
    }
}
const listNotes = () =>{
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element.body)
    });
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}
