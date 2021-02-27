import  {fillWithCards} from '../level-controller.js';

const arrayOfCards = [
    {shortcut: 'pr', title: 'Processor', src: './images/processor.png'},
    {shortcut: 'au', title: 'Audio-cable', src: './images/audio-cable.png'},
    {shortcut: 'im', title: 'Imac', src: './images/imac.png'},
    {shortcut: 'la', title: 'Laptop', src: './images/laptop.png'},
    {shortcut: 'vi', title: 'Video-card', src: './images/video-card.png'},
];

const field = [
    {
        line: [
            {},
            {},
            {}
        ]
    },
    {
        line: [
            {},
            {},
            {},
            {},
        ]
    },
    {
        line: [
            {},
            {},
            {}
        ]
    }
];


const newField =(req,res)=> { res.json(fillWithCards(arrayOfCards, field));}
export default newField;
