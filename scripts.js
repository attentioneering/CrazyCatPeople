
const myCats = {};

myCats.catInfo = {
    catTitle:[
        'Mister',
        'Miss',
        'Master',
        'Mistress',
        'Mrs.',
        'Lil\'',
        'Big',
        'Admiral',
        'Doctor',
        'Sir',
        'Baby',
        'The',
    ],
    catName:[
        'Muffin',
        'Fluffy',
        'Junior',
        'Mittens',
        'Maury',
        'Elvis',
        'Hambone',
        'Maurice',
        'Max',
        'Morris',
        'Misty',
        'Nougat',
        'Norris',
        'Dainty',
        'Patches',
        'Oscar',
        'Tiger',
        'Sam',
        'Simba',
        'Coco',
        'Chloe',
        'Arc',
        'Innis',
        'Milo',
        'Lucy',
        'Lucky',
        'Rambo',
        'Teeny',
        'Bobby',
        'Gilbert',
        'Puss',
        'Muffy',
        'Bonnie',
        'Bean',
        'Molly',
        'Smudge',
        'Millie',
        'Daisy',
        'Jasper',
        'Wrinkles',
        'Felix',
        'Philip',
        'Alfie',
        'Snuggles',
        'Smooches',
        'Snowy',
        'Butch',
        'Billie',
        'Lana'
    ],
        catPersonality: [
        'Well-meaning Spazz',
        'Glutton',
        'Destroyer of cat toys',
        'Control freak',
        'Pees beside the box. Every. Single. Time.',
        'Bites you relentlessly',
        'Shy',
        'Escape Artist',
        'Neighbourhood Romeo',
        'Naps on your laptop',
        'Hedonist',
        'Knocks over all your houseplants',
        'Always in heat',
        'Only loves you because you have food',
        'Brings you an assortment of dead animals regularly',
        'Laser-pointer addict',
        'Sleeps on your chest',
        'Hogs all the cat treats',
        'Bullies the other cats',
        'Plays fetch',
        'Likes to throw up on your shoes',
        'Hides from your houseguests',
        'Poops constantly',
        'Loves to play with your socks',
        'Naps in your sock drawer',
        'Hides all the rubber bands',
        'Drinks from the toilet despite having fresh water',
        'Will not eat anything with fish',
        'Sunbather',
        'Cries to be let out, but will never go outside',
        'Runs amok constantly',
        'Always napping',
        'Has not been seen in a while...',
        'Expert cat-napper',
    ]
};
myCats.randomNumber = (array) => {
        return array[Math.floor(Math.random()* array.length)];
        };

myCats.init = ()=>{ 
    $('form').on('submit', function(event){
        event.preventDefault();
        $('.userInput').hide();
        $('.header').hide();
        $('.container').show();
        const userName = $('input[Name]').val();
        console.log(userName);
        const userLocation = $('#Location').val();
        console.log(userLocation);
        const userTotem = $('input[name=totem]:checked').val();
        console.log(userTotem);
    //searching for random cat hoard. Number of cats in hoard depends on the token/style selected. I originally wanted the number of cats returned in the array to be random, but I couldn't make randomizing the record limit work :(
            if (userTotem == "bathrobe") {
                let userStyle = `Your cat-collecting style is one of comfort. Nothing feels better than cat-napping on the couch surrounded by fuzzy bodies. You should consider working from home if you don't already ;)`;
                console.log(userStyle);
                let userGreeting = (`Oh Boy! You are super lucky, ${userName}! All of these lovely cats have come to be part of your menagerie! ${userStyle}`)
                console.log(userGreeting);
                 $('.greeting').html(`<h4>${userGreeting}</h4>`);
                     $.ajax({ 
                        url:"https://api.thecatapi.com/v1/images/search",
                        method: 'GET',
                        dataType: 'json',
                        headers: {
                            'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
                        },
                        data: {
                            limit: 9,
                            image: { url: ""}
                            },
                        error: function() {
                            $('#catArray').html('<p>An error has occurred</p>');
                        },
                        success: function(pictures) {
                            console.log(pictures);
                            const urlMap = (pictures.map((cat)=>{
                                console.log(cat.url);
                                myCats.randomCatTitle = myCats.randomNumber(myCats.catInfo['catTitle'])
                                myCats.randomCatName = myCats.randomNumber(myCats.catInfo['catName']);
                                myCats.catName = (myCats.randomCatTitle)+(' ')+(myCats.randomCatName);
                                myCats.catStory = myCats.randomNumber(myCats.catInfo['catPersonality'])
                                let catHTML= `
                                        <div class="catCard">
                                        <h2>${myCats.catName}</h2>
                                        <p class="catStory">${myCats.catStory}</p>
                                        <img src="${(cat.url)}" alt="">
                                        </div>`;
                                        console.log(catHTML);
                                        return(catHTML);
                                })).join('');
                                console.log(urlMap);
                                $('#catArray').append(urlMap);
                                const adoptText = (`PSSSSST! If these cats aren't enough for you, there's always a beautiful barrage of kitties awaiting adoption! Find a new furbaby in need of a good home courtesy of PetFinder!`)
                                console.log(adoptText)
                                $('.adoptText').append(`<h4>${adoptText}</h4>`);
                            }
                        });
                }
            else if (userTotem == "poopscoop") {
                let userStyle = `Your cat-collecting style is one of responsibility. Taking care of your furbabies is your number one mission. Your cats appreciate all your hard work and reward you with their affection. You're the best!`;
                console.log(userStyle);
                let userGreeting = (`Oh Boy! You are super lucky, ${userName}! All of these lovely cats have come to be part of your menagerie! ${userStyle}`)
                console.log(userGreeting);
                 $('.greeting').html(`<h4>${userGreeting}</h4>`);
                     $.ajax({ 
                        url:"https://api.thecatapi.com/v1/images/search",
                        method: 'GET',
                        dataType: 'json',
                        headers: {
                            'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
                        },
                        data: {
                            limit: 12,
                            image: { url: ""}
                            },
                        error: function() {
                            $('#catArray').html('<p>An error has occurred</p>');
                        },
                        success: function(pictures) {
                            console.log(pictures);
                            const urlMap = (pictures.map((cat)=>{
                                console.log(cat.url);
                                myCats.randomCatTitle = myCats.randomNumber(myCats.catInfo['catTitle'])
                                myCats.randomCatName = myCats.randomNumber(myCats.catInfo['catName']);
                                myCats.catName = (myCats.randomCatTitle)+(' ')+(myCats.randomCatName);
                                myCats.catStory = myCats.randomNumber(myCats.catInfo['catPersonality'])
                                let catHTML= `
                                        <div class="catCard">
                                        <h2>${myCats.catName}</h2>
                                        <p class="catStory">${myCats.catStory}</p>
                                        <img src="${(cat.url)}" alt="">
                                        </div>`;
                                        console.log(catHTML);
                                        return(catHTML);
                                })).join('');
                                console.log(urlMap);
                                $('#catArray').append(urlMap);
                                const adoptText = (`PSSSSST! If these cats aren't enough for you, there's always a beautiful barrage of kitties awaiting adoption! Find a new furbaby in need of a good home courtesy of PetFinder!`)
                                console.log(adoptText)
                                $('.adoptText').append(`<h4>${adoptText}</h4>`);
                            }
                        });
                }
            else if (userTotem == "cattree") {
                let userStyle = `Your cat-collecting style is one of adventure. You are fascinated with watching your cats every move: whether they're activly playing on asleep. Thanks to all your observations, we're pretty sure you speak cat.`;
                console.log(userStyle);
                                let userGreeting = (`Oh Boy! You are super lucky, ${userName}! All of these lovely cats have come to be part of your menagerie! ${userStyle}`)
                console.log(userGreeting);
                 $('.greeting').html(`<h4>${userGreeting}</h4>`);
                     $.ajax({ 
                        url:"https://api.thecatapi.com/v1/images/search",
                        method: 'GET',
                        dataType: 'json',
                        headers: {
                            'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
                        },
                        data: {
                            limit: 6,
                            image: { url: ""}
                            },
                        error: function() {
                            $('#catArray').html('<p>An error has occurred</p>');
                        },
                        success: function(pictures) {
                            console.log(pictures);
                            const urlMap = (pictures.map((cat)=>{
                                console.log(cat.url);
                                myCats.randomCatTitle = myCats.randomNumber(myCats.catInfo['catTitle']);
                                myCats.randomCatName = myCats.randomNumber(myCats.catInfo['catName']);
                                myCats.catName = (myCats.randomCatTitle)+(' ')+(myCats.randomCatName);
                                myCats.catStory = myCats.randomNumber(myCats.catInfo['catPersonality']);
                                let catHTML= `
                                        <div class="catCard">
                                        <h2>${myCats.catName}</h2>
                                        <p class="catStory">${myCats.catStory}</p>
                                        <img src="${(cat.url)}" alt="">
                                        </div>`;
                                        console.log(catHTML);
                                        return(catHTML);
                                })).join('');
                                console.log(urlMap);
                                $('#catArray').append(urlMap);
                                const adoptText = (`PSSSSST! If these cats aren't enough for you, there's always a beautiful barrage of kitties awaiting adoption! Find a new furbaby in need of a good home courtesy of PetFinder!`)
                                    console.log(adoptText)
                                $('.adoptText').append(`<h4>${adoptText}</h4>`);
                            }
                        });
                }
            else if (userTotem == "laserpointer") {
                let userStyle = `Your cat-collecting style is one of play! You love to watch your cat-kids run around like crazy and live to make their days as entertaining as they make yours.`;
                console.log(userStyle);
                                let userGreeting = (`Oh Boy! You are super lucky, ${userName}! All of these lovely cats have come to be part of your menagerie! ${userStyle}`)
                console.log(userGreeting);
                 $('.greeting').html(`<h4>${userGreeting}</h4>`);
                     $.ajax({ 
                        url:"https://api.thecatapi.com/v1/images/search",
                        method: 'GET',
                        dataType: 'json',
                        headers: {
                            'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
                        },
                        data: {
                            limit: 12,
                            image: { url: ""}
                            },
                        error: function() {
                            $('#catArray').html('<p>An error has occurred</p>');
                        },
                        success: function(pictures) {
                            console.log(pictures);
                            const urlMap = (pictures.map((cat)=>{
                                console.log(cat.url);
                                myCats.randomCatTitle = myCats.randomNumber(myCats.catInfo['catTitle'])
                                myCats.randomCatName = myCats.randomNumber(myCats.catInfo['catName']);
                                myCats.catName = (myCats.randomCatTitle)+(' ')+(myCats.randomCatName);
                                myCats.catStory = myCats.randomNumber(myCats.catInfo['catPersonality'])
                                let catHTML= `
                                        <div class="catCard">
                                        <h2>${myCats.catName}</h2>
                                        <p class="catStory">${myCats.catStory}</p>
                                        <img src="${(cat.url)}" alt="">
                                        </div>`;
                                        console.log(catHTML);
                                        return(catHTML);
                                })).join('');
                                console.log(urlMap);
                                $('#catArray').append(urlMap);
                                const adoptText = (`PSSSSST! If these cats aren't enough for you, there's always a beautiful barrage of kitties awaiting adoption! Find a new furbaby in need of a good home courtesy of PetFinder!`)
                                console.log(adoptText)
                                $('.adoptText').append(`<h4>${adoptText}</h4>`);
                            }
                        });
                }
            else {
                let userStyle = `Your cat-collecting style is one of reward. You know that the easiest way to a cat's heart is with treats and you are rewarded with love. Be careful not to over do it or you may be suffocated under the weight of all those fat-cat cuddles.`;
                console.log(userStyle);
                                let userGreeting = (`Oh Boy! You are super lucky, ${userName}! All of these lovely cats have come to be part of your menagerie! ${userStyle}`)
                console.log(userGreeting);
                 $('.greeting').html(`<h4>${userGreeting}</h4>`);
                     $.ajax({ 
                        url:"https://api.thecatapi.com/v1/images/search",
                        method: 'GET',
                        dataType: 'json',
                        headers: {
                            'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
                        },
                        data: {
                            limit: 6,
                            image: { url: ""}
                            },
                        error: function() {
                            $('#catArray').html('<p>An error has occurred</p>');
                        },
                        success: function(pictures) {
                            console.log(pictures);
                            const urlMap = (pictures.map((cat)=>{
                                console.log(cat.url);
                                myCats.randomCatTitle = myCats.randomNumber(myCats.catInfo['catTitle'])
                                myCats.randomCatName = myCats.randomNumber(myCats.catInfo['catName']);
                                myCats.catName = (myCats.randomCatTitle)+(' ')+(myCats.randomCatName);
                                myCats.catStory = myCats.randomNumber(myCats.catInfo['catPersonality'])
                                let catHTML= `
                                        <div class="catCard">
                                        <h2>${myCats.catName}</h2>
                                        <p class="catStory">${myCats.catStory}</p>
                                        <img src="${(cat.url)}" alt="">
                                        </div>`;
                                        console.log(catHTML);
                                        return(catHTML);
                                })).join('');
                                console.log(urlMap);
                                $('#catArray').append(urlMap);
                            const adoptText = (`PSSSSST! If these cats aren't enough for you, there's always a beautiful barrage of kitties awaiting adoption! Find a new furbaby in need of a good home courtesy of PetFinder!`)
                            console.log(adoptText)
                            $('.adoptText').append(`<h4>${adoptText}</h4>`);
                            
                                }
                            });
                 }
        });
    }

// show adoptable cat
//add button
$('#button2').on('click', function(event){
     event.preventDefault();
      $('.adoptContainer').show();
     const PetfinderUrl = `https://api.petfinder.com/pet.getRandom?key=cdac0ce07478207482827b8d466bc370&animal=cat&output=basic&format=json`;
     $.ajax({
        url: PetfinderUrl,
        dataType: 'jsonp',
        crossDomain: true,
        data: {
            //location:`${userLocation}`,
            count:1,
            }
        }).done(function(data) {
            console.log(data.petfinder.pet);})
        .success(function(response) {
            myCats.adoptCatName = (response.petfinder.pet.name.$t);
            myCats.adoptCatDescription = (response.petfinder.pet.description.$t);
            myCats.adoptCatPhoto = (response.petfinder.pet.media.photos.photo[1].$t);
            let catAdoptHTML= `
                    <div class="catAdoptCard">
                    <img src="${myCats.adoptCatPhoto}" alt="">
                    <h2>${myCats.adoptCatName}</h2>
                    <p class="catStory">${myCats.adoptCatDescription}</p>
                    </div>`;
            console.log(catAdoptHTML);
            $('#catAdopt').html(catAdoptHTML);
        });
    });


$(document).ready(function(){
    $('.container').hide();
    $('.adoptContainer').hide();
    myCats.init();
});