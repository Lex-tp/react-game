import  {fillWithCards} from '../level-controller.js';

const arrayOfCards = [
    {shortcut: 'cd', title: 'CD', src: './level-2/images/cd.png'},
    {shortcut: 'key', title: 'Keyboard', src: './level-2/images/keyboard.png'},
    {shortcut: 'mot', title: 'Motherboard', src: './level-2/images/motherboard.png'},
    {shortcut: 'mou', title: 'Computer mouse', src: './level-2/images/mouse.png'},
    {shortcut: 'sd', title: 'SD', src: './level-2/images/sd.png'},
    {shortcut: 'ssd', title: 'SSD', src: './level-2/images/ssd.png'},
    {shortcut: 'usb', title: 'USB', src: './level-2/images/usb.png'},
    {shortcut: 'webcam', title: 'Webcam', src: './level-2/images/webcam.png'},
];


const field = [
    {
        line: [
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
            {}
        ]
    },
    {
        line: [
            {},
            {},
            {},
            {}
        ]
    }
];

const newField =(req,res)=> { res.json(fillWithCards(arrayOfCards, field));}
export default newField;