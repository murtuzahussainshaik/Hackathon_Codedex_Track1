import React from 'react';
import '../styles/Games.css';

const Games = () => {
    // Sample list of games grouped alphabetically
    const gamesList = [
        "13 Days", "20 second showdown", "221B Baker Street", "5 Second Rule", "5 Second Rule: Jr.", 
        "5 Second Rule: Uncensored", "5-Minute Dungeon", "5-Minute MARVEL", "7 Wonders", "7 Wonders: Duel", 
        "8 Minute Empire: Legends", "8 Minute Empire: Lost Lands", "A Game of Thrones: The Board Game", 
        "Above and Below", "Acquire", "Agricola", "Apples to Apples", "Ascension Deck Building Game", 
        "Attack of the killer kittens", "Attack of the killer kittens (NSFW)", "Axis & Allies: Pacific", 
        "Azul: Stained glass of Sintra", "Badmoji", "Bananagrams", "Bang!", "Bang! Dice Expansion: Old Saloon", 
        "Bang! The Dice Game", "Barenpark", "Battle for the island", "Battleline", "Battleship", 
        "Betrayal at House on the Hill", "Big Boggle", "Blockbuster", "Blokus", "Blood Rage", "Boggle", 
        "Brain Games", "Broom Service", "CAH Expansions 1-4,6", "Camel Cup", "Captain Sonar", "Carcassonne", 
        "Cards Against Humanity", "Cash 'n Guns", "Castle Panic", "Catan Expansion: Seafarers", "Catan Junior", 
        "Chameleon", "Cheating Moth", "Checkers", "Cheer up!", "Chess", "Chicago Express", "Chinese Checkers", 
        "Chronoauts", "Chronology", "Chutes & Ladders", "Citadels", "City of London", "Clank! A Deck-building adventure", 
        "Classic Go", "Clue", "Clue: Bob's Burger", "Cockroach Poker", "Codenames Deep Undercover", "Codenames Duet", 
        "Codenames Pictures", "Codenames: Disney", "Codenames: Harry Potter", "Codenames: The Simpsons", "Codenmames", 
        "Color Brain: Disney Edition", "Colt Express", "Concept", "Connect 4", "Coup", "Coup Reformation", "Cranium", 
        "Crystal Clans", "Cube Quest", "Cyclades", "Dead of Winter", "Deadwood 1876", "Decrypto", "Descent: Journeys in the Dark", 
        "Dice Forge", "Dice Throne Season 2 - Cursed Pirate vs Artificer", "Dice Throne Season 2 - Gunslinger vs Samurai", 
        "Dominion", "Dominion 2nd Edition", "Dominion: Intrigue", "Dominoes", "Don't Break the Ice", "Down Force", 
        "Dungeon Run", "Echo of time (Entropy Expansion)", "Elder Sign", "Elysium", "Entropy", "Everdell", "Exoplanets", 
        "Exploding Kittens", "Exploding Kittens NSFW Pack", "Exploding Kittens Party Pack", "Five Tribes", "Flamme Rouge", 
        "Flash Point: Fire Rescue", "Forbidden Desert", "Forbidden Island", "Formula D", "Fort Sumter", "Founders of Gloomhaven", 
        "Gaia Project", "Get bit!", "Ghost Blitz", "Ghost Blitz 5 to 12", "Ghost Blitz Junior", "Gizmos", "Gobblet Gobblers", 
        "Gravwell", "Guess Who?", "Guillotine", "Haiclue", "Hail Hydra", "Hamsterrolle", "Hanabi", "Head Hackers", 
        "Hey, that's my fish!", "Hive", "Hive Carbon", "ICECOOL", "Illimat", "Imhotep: The Duel", "Incohearant", "Istanbul", 
        "Jaipur", "Jamaica", "Jaws", "Kahuna 2-Player Game", "Keyflower", "Killer Bunnies", "King of New York", 
        "King of Tokyo", "King of Tokyo: Dark Edition", "Lanterns", "Le Havre", "Legendary: A Marvel Deck-building game", 
        "Lewis & Clark", "LINKEE", "Lords of Vegas", "Lords of Waterdeep", "Love letter", "Machi Koro", "Mage Wars", 
        "Magic Maze", "Mancala", "Mansions of Madness", "Marvel Champions: The Card Game", "Mascarade", "Maskarades", 
        "Mastermind", "Memoir 44", "Mice and Mystics", "Mille Bornes", "Mint Delivery", "Mint Works", "Monikers", 
        "Monopoly", "Monopoly Deal", "Monopoly: California, Here we come!", "Monopoly: Doctor Who", "Monopoly: Frozen II", 
        "Monopoly: Gamer", "Monopoly: The America", "Monopoly: The Walking Dead", "Monopoly for Milennials", "Munchkin", 
        "Munchkin Fu", "Munchkin Fu", "Munchkin Quest", "Munchkin: Rick and Morty", "Mysterium", "Mythotopia", 
        "New York Slice", "No Thanks!", "OK", "One Deck Dungeon", "One Night Ultimate Werewolf", "Operation", 
        "Othello", "Out of the Woods", "Pagoda", "Pandemic", "Parcheesi: Royal edition", "Partners", "Patchwork", 
        "Pictionary", "Pirate Fluxx", "PIT", "Point Salad", "Power Grid", "Puerto Rico", "Quacks of Quedlinburg", 
        "Queendomino", "Quiddler", "Qwirkle", "Race for the Galaxy", "Ramen Fury", "Raptor", "Rhino Hero", 
        "Rick and Morty: Total Rickall", "Rising Sun", "Risk", "Risk", "Risk Godstorm", "Rock & Roll Party Game", 
        "Roll for the Galaxy", "Root", "Rummikub", "Sagrada", "Samurai Spirit", "San Juan", "Santorini", "Say Anything", 
        "Say Anything", "Scattergories", "Schmovie", "Scotland Yard", "Scrabble", "Seasons", "Secret Hitler", 
        "Sentinels of the Multiverse", "Sequence", "SET", "Settlers of Catan", "Sheriff of Nottingham", 
        "Sketchy Stories", "Skull", "Small World", "Smart Ass", "Smash Up", "Sorry!", "Spank the Yeti", 
        "Spank the Yeti: Geek Pack", "Spirit Island", "Splendor", "Spot it!", "Spot it!: Frozen II", "Spyfall", 
        "Spyfall 2", "Star Fluxx", "Star Traders", "Star Trek Panic", "Stone Age", "Stop Thief!", "Stratego", 
        "Super Hazard Quest", "Survive: Escape from Atlantis", "Sushi Go", "Taboo", "Takenoko", "Tara", 
        "Telestrations", "Telestrations: After Dark", "Terraforming Mars", "Thanos Rising", "The Fox in The Forest", 
        "The Game of Life", "The Great Heartland", "The Metagame", "The Mind", "The Mind: Extreme", "The Resistance", 
        "The Resistance: Avalon", "The Werewolves of Millers Hollow", "The Game of Wolf", "Through the Desert", 
        "Ticket to Ride", "Ticket to Ride Expansion: USA 1910", "Ticket to Ride: Europe", "Ticket to Ride: Nordic Countries", 
        "Ticket to Ride: The Dice Expansion", "Timeline", "Timeline Americana", "Tokyo Metro", "Trapwords", 
        "Treason in the Tower", "Trivial Pursuit", "Trouble", "Tsuro", "Twilight Struggle", "Unexploded cow", 
        "Unlock Adventures!", "Uno", "UNO Flip", "UNO Frozen 2", "Unstable Unicorns", "Vault of Dragons", 
        "Via Nebula", "Viceroy", "Villainous", "Villainous: Evil Comes Prepared", "Villainous: Wicked to the Core", 
        "Visitor", "Weird Things Humans Search For", "Welcome to the Dungeon", "What Came First", "Wildlands", 
        "Wits & Wagers", "Wu Wei: Journey of the Changing Path", "Yahtzee", "You Bet-Cha!", "Zombie Dice", "Zombicide"
    ];

    // Function to group games alphabetically
    const groupGamesAlphabetically = (games) => {
        let groups = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [], L: [], 
                       M: [], N: [], O: [], P: [], Q: [], R: [], S: [], T: [], U: [], V: [], W: [],  Y: [], Z: [] };

        games.forEach(game => {
            let firstLetter = game.charAt(0).toUpperCase();
            if (groups[firstLetter]) {
                groups[firstLetter].push(game);
            } else {
                groups[firstLetter] = [game];
            }
        });

        return groups;
    };

    // Get alphabetically grouped games
    const groupedGames = groupGamesAlphabetically(gamesList);

    return (
        <div className="games-grid" id="Games">
            {Object.keys(groupedGames).map((key, index) => (
                <div className="games-group" key={index}>
                    <h3>{key}</h3>
                    <ul>
                        {groupedGames[key].map((game, idx) => (
                            <li key={idx}>{game}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Games;
