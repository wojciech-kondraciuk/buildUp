import icon1 from 'assets/images/icon1.svg';
import icon2 from 'assets/images/icon2.svg';
import icon3 from 'assets/images/icon3.svg';

import photo1 from 'assets/images/about1.jpg';
import photo2 from 'assets/images/about2.jpg';
import photo3 from 'assets/images/about3.jpg';
import photo4 from 'assets/images/about4.jpg';
import photo5 from 'assets/images/about5.jpg';
import photo6 from 'assets/images/about6.jpg';


function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}

export const aboutData = [
    {
        id: 1,
        name: 'Design a Better Future',
        desc: 'Our mission is to build a more sustainable society through exceptional architecture that transforms, inspires and enhances the environments in which we live.',
    },
    {},
    {
        id: 2,
        name: 'Who we are',
        title: 'Over 200 Destinations',
        link: `/about/${convertToSlug('Who we are')}`,
        slug: convertToSlug('Who we are'),
        desc: 'We are a global family of designers specialising in architecture, masterplanning and interiors.',
        body: 'A fast and simple solution to ship your Cargo to 200+ countries worldwide. Track and trace your shipment on our website. Timed collection and delivery is available.',
        photo: [photo1, photo2],
        icon: icon1,
    },
    {
        id: 3,
        name: 'Our projects',
        title: 'Choosing a location',
        link: `/about/${convertToSlug('Our projects')}`,
        slug: convertToSlug('Our projects'),
        desc: 'Where you buy or build your home has a profound influence over your ability to meet your existing and future needs.',
        body: 'Where you buy or build your home has a profound influence over your ability to meet your existing and future needs. Where you choose to live has a significant impact on the environment and your finances. Remember the real estate adage: location',
        photo: [photo3, photo4],
        icon: icon2,
    },
    {
        id: 4,
        name: 'Our team',
        title: 'Choosing a locality and housing type',
        link: `/about/${convertToSlug('Our team')}`,
        slug: convertToSlug('Our team'),
        desc: 'We are a global family of designers specialising in architecture, masterplanning and interiors.',
        body: 'The decision to buy or build a new home is often driven by inadequacies in our existing home, which often relate directly to lifestyle. A new home offers many opportunities to alter or change lifestyle. Maximise this opportunity by analysing your existing lifestyle and future needs',
        photo: [photo5, photo6],
        icon: icon3,
    },

];
