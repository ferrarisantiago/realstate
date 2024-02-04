//import imagenes
import BBQ from '../src/components/images/BBQ.jpg';
import cokctail from '../src/components/images/cocktailBar.jpeg';
import pool from '../src/components/images/pool.jpg';
import suite from '../src/components/images/Roomsuite.jpg';
import standar from '../src/components/images/standarRoom.jpg';

const mockData =[
    {
        src: pool,
        title: 'Piscina',
        description: 'description room 1'
    },
    {
        src: cokctail,
        title: 'cokctail Bar',
        description: 'description room 2'
    },
    {
        src: BBQ,
        title: 'BBQ',
        description: 'description room 3'
    },

    {
        src: suite,
        title: 'Room 3',
        description: 'description room 3',
        cat: 'room',
        price: 100,
        stock: 10,
        notAvailableStart: new Date(2024,1,29),
        notAvailableEnd: new Date(2024,1,29),
    },
    {
        src: standar,
        title: 'Room 4',
        description: 'description room 4',
        cat: 'room',
        price: 100,
        stock: 10,
        notAvailableStart: new Date(2024,1,29),
        notAvailableEnd: new Date(2024,1,29),
    }
];

export const chips = [
    {key:0,lavel: 'Cancellation flexibility'},
    {key:1,lavel: 'standard rooms'},
    {key:2,lavel: 'Executive rooms'},
    {key:3,lavel: 'Access to lounge'},
    {key:4,lavel: 'more filters'},
];

export default mockData;