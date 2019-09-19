const chalk = require('chalk');
const notes = require('./notes.js')
const yargs = require('yargs');
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
        console.log('remove a note');

    }
})
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => {
        console.log(chalk.green('list the notes'));
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title:{
            describe: 'read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.readNote(argv.title)
    }
})
yargs.parse();