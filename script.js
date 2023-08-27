var phrases = [
    'Beautiful',
    'Intelligent',
    'Elegant',
    'Smart',
    'Hilarious',
    'Capable of great things',
    'Sweet (to those she likes)',
    'Gorgeous',
    'Charismatic',
    'Charming',
    'Sexy',
    'Brilliant',
    'What the song Ojitos Lindos is written about',
    'A hard worker',
    'Going to make a very good Housewife who does Hot Yoga one day',
    'A Go-Getter',
    'Unique',
    'An Anime weeb <3',
    'Ambitious',
    'Someone who can light up a room with her smile'
]

function newQuote() {
    var newQuote = Math.floor(Math.random() * (phrases.length));
    document.getElementById('phrase').innerHTML = phrases[newQuote];
}
