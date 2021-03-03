import  {fillWithCards} from '../level-controller.js';

const arrayOfCards = [
    {shortcut: 'pr', title: 'Processor', src: './level-1/images/processor.png', isOpen: true},
    {shortcut: 'au', title: 'Audio-cable', src: './level-1//images/audio-cable.png', isOpen: true},
    {shortcut: 'im', title: 'Imac', src: './level-1//images/imac.png', isOpen: true},
    {shortcut: 'la', title: 'Laptop', src: './level-1//images/laptop.png', isOpen: true},
    {shortcut: 'vi', title: 'Video-card', src: './level-1//images/video-card.png', isOpen: true},
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
