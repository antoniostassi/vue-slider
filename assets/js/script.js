
const { createApp } = Vue

createApp({
    data() {
        return {
            carouselImages: [
                {
                    image: 'assets/img/01.webp',
                    title: '2024 Fat Bob 114',
                    text: 'Un macina asfalto affamato di potenza, il Fat Bob 114 di Harley-Davidson accompagna uno stile muscoloso a prestazioni irriducibili.',
                }, 
                {
                    image: 'assets/img/02.webp',
                    title: '2024 Heritage Classic',
                    text: 'Il cruiser americano per eccellenza, l’Heritage Classic 114 di Harley-Davidson sfoggia dettagli vintage mozzafiato e puro stile rock ‘n’ roll.',
                }, 
                {
                    image: 'assets/img/03.webp',
                    title: '2024 Road King Special',
                    text: "Un bagger maestoso con una potenza che lascia il segno, il Road King Special di Harley-Davidson si distingue per il portamento autoritario che ti fa sentire dominatore della strada.",
                }, 
                {
                    image: 'assets/img/04.webp',
                    title: '2024 Sportster S',
                    text: 'Erede di un retaggio nato nel 1957, l’irriverente e ricercato Sportster S di Harley-Davidson evolve i tratti universalmente amati dei suoi predecessori: velocità scattante, agilità sorprendente e divertimento assicurato.',
                },
                {
                    image: 'assets/img/05.webp',
                    title: '2024 Softail Standard',
                    text: 'Un modello stile bobber grezzo ed essenziale, il Softail Standard di Harley-Davidson è una tela bianca ideale da personalizzare.',
                }
            ]
        };
    }
}).mount('#application');


