import  {fillWithCards} from '../level-controller.js';

const arrayOfCards = [
    {shortcut: 'pr', title: 'Processor', src: './level-1/images/processor.png'},
    {shortcut: 'au', title: 'Audio-cable', src: './level-1//images/audio-cable.png'},
    {shortcut: 'im', title: 'Imac', src: './level-1//images/imac.png'},
    {shortcut: 'la', title: 'Laptop', src: './level-1//images/laptop.png'},
    {shortcut: 'vi', title: 'Video-card', src: './level-1//images/video-card.png'},
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
