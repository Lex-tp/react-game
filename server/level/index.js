import  {fillWithCards} from '../level-controller.js';

const arrayOfCards = [
    {shortcut: 'cd', title: 'CD', src: './level/images/cd.png', isOpen: true},
    {shortcut: 'key', title: 'Keyboard', src: './level/images/keyboard.png', isOpen: true},
    {shortcut: 'mot', title: 'Motherboard', src: './level/images/motherboard.png', isOpen: true},
    {shortcut: 'mou', title: 'Computer mouse', src: './level/images/mouse.png', isOpen: true},
    {shortcut: 'sd', title: 'SD', src: './level/images/sd.png', isOpen: true},
    {shortcut: 'ssd', title: 'SSD', src: './level/images/ssd.png', isOpen: true},
    {shortcut: 'usb', title: 'USB', src: './level/images/usb.png', isOpen: true},
    {shortcut: 'webcam', title: 'Webcam', src: './level/images/webcam.png', isOpen: true},
    {shortcut: 'pr', title: 'Processor', src: './level/images/processor.png', isOpen: true},
    {shortcut: 'au', title: 'Audio-cable', src: './level//images/audio-cable.png', isOpen: true},
    {shortcut: 'im', title: 'Imac', src: './level/images/imac.png', isOpen: true},
    {shortcut: 'la', title: 'Laptop', src: './level/images/laptop.png', isOpen: true},
    {shortcut: 'vi', title: 'Video-card', src: './level/images/video-card.png', isOpen: true},
];


const field = [
    {
        line: [
            {},
            {},
            {},
            {},
            {},
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
            {},
            {},
            {},
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
            {},
            {},
            {},
            {}
        ]
    }
];

const newField =(req,res)=> { res.json(fillWithCards(arrayOfCards, field));}
export default newField;
