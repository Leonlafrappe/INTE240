const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 34, text: "I can't seem to face up to the facts" },
    { time: 38, text: "I'm tense and nervous and I can't relax" },
    { time: 42, text: "I can't sleep because my bed's on fire" },
    { time: 46.8, text: "Don't touch me I'm a real live wire" },
    { time: 51, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa better" },
    { time: 59.5, text: "Run, run, run, run, run, run, run away" },
    { time: 65.8, text: " Ohhhh ay-ya-ya-ya-ya-ya, ooh" },
    { time: 72, text: "..." },
    { time: 80, text: "You start a conversation, you can't even finish it" },
    { time: 84, text: "You're talking a lot, but you're not saying anything" },
    { time: 88.2, text: "When I have nothing to say, my lips are sealed" },
    { time: 92.4, text: "Say something once, why say it again?" },
    { time: 97, text: "Psycho Killer" },
    { time: 99.5, text: "Qu'est-ce que c'est?" },
    { time: 101, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 105.5, text: "Run, run, run, run, run, run, run away" },
    { time: 111.8, text: " Ohhhh ooh oh" },
    { time: 113.8, text: "Psycho Killer" },
    { time: 116.1, text: "Qu'est-ce que c'est?" },
    { time: 117.7, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 122.5, text: "Run, run, run, run, run, run, run away" },
    { time: 128.6, text: " Ohhhh ay-ya-ya-ya-ya-ya, ooh" },
    { time: 135, text: "Ce que j'ai fait, ce soir-là" },
    { time: 140, text: "..." },
    { time: 143, text: "Ce que j'ai fait, ce soir-là" },
    { time: 147.8, text: "..." },
    { time: 151.6, text: "Réalisant mon espoir" },
    { time: 155.6, text: "Je me lance vers la gloire, okaaaaaaaaaay" },
    { time: 163.6, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah"},
    { time: 168.3 , text: "We are vain and we are blind"},
    { time: 172.3 , text: "I hate people when they're not polite"},
    { time: 177 , text: "Psycho Killer"},
    { time: 179.3, text: "Qu'est-ce que c'est?" },
    { time: 180.7, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa better" },
    { time: 186, text: "Run, run, run, run, run, run, run away" },
    { time: 191.8, text: " Ohhhh ay-ya-ya-ya-ya-ya, ooh" },
    { time: 198, text: "..." },








    







   
    ];
    /*
I can't seem to face up to the facts
I'm tense and nervous and I can't relax
I can't sleep 'cause my bed's on fire
Don't touch me, I'm a real live wire
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ay-ya-ya-ya-ya-ya, ooh
You start a conversation, you can't even finish it
You're talking a lot, but you're not saying anything
When I have nothing to say, my lips are sealed
Say something once, why say it again?
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh Ay-ya-ya-ya-ya-ya
Ce que j'ai fait, ce soir-là
Ce qu'elle a dit, ce soir-là
Réalisant mon espoir
Je me lance vers la gloire, okay
Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
We are vain and we are blind
I hate people when they're not polite
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ai-ya-ya-ya-ya-ya, ooh
*/

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");
audio.addEventListener("play", () => {
setInterval(displayLyrics, 100); 
accuracy
});
function displayLyrics() {
    const currentTime = audio.currentTime;
    if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
    ) {
    lyricElement.textContent = lyrics[currentLyricIndex].text;
    currentLyricIndex++;
    }
    }