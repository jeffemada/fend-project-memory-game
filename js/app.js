/*
 * List of card objects
 */
const cards = [
  { id: 1, image: "three_musketeers.png" },
  { id: 2, image: "chr_golem.png" },
  { id: 3, image: "pekka.png" },
  { id: 4, image: "lava_hound.png" },
  { id: 5, image: "mega_knight.png" },
  { id: 6, image: "royal_giant.png" },
  { id: 7, image: "angry_barbarian.png" },
  { id: 8, image: "royal_recruits.png" },
  { id: 9, image: "giant_skeleton.png" },
  { id: 10, image: "zapMachine.png" },
  { id: 11, image: "barbarians.png" },
  { id: 12, image: "minion_horde.png" },
  { id: 13, image: "rascals.png" },
  { id: 14, image: "chr_balloon.png" },
  { id: 15, image: "chr_witch.png" },
  { id: 16, image: "prince.png" },
  { id: 17, image: "bowler.png" },
  { id: 18, image: "executioner.png" },
  { id: 19, image: "cannon_cart.png" },
  { id: 20, image: "giant.png" },
  { id: 21, image: "wizard.png" },
  { id: 22, image: "royal_hog.png" },
  { id: 23, image: "baby_dragon.png" },
  { id: 24, image: "dark_prince.png" },
  { id: 25, image: "hunter.png" },
  { id: 26, image: "rage_barbarian.png" },
  { id: 27, image: "inferno_dragon.png" },
  { id: 28, image: "electro_wizard.png" },
  { id: 29, image: "dark_witch.png" },
  { id: 30, image: "magic_archer.png" },
  { id: 31, image: "valkyrie.png" },
  { id: 32, image: "musketeer.png" },
  { id: 33, image: "mini_pekka.png" },
  { id: 34, image: "hog_rider.png" },
  { id: 35, image: "battle_ram.png" },
  { id: 36, image: "flying_machine.png" },
  { id: 37, image: "zappies.png" },
  { id: 38, image: "knight.png" },
  { id: 39, image: "archers.png" },
  { id: 40, image: "minion.png" },
  { id: 41, image: "bomber.png" },
  { id: 42, image: "goblin_gang.png" },
  { id: 43, image: "skeleton_balloon.png" },
  { id: 44, image: "skeleton_horde.png" },
  { id: 45, image: "skeleton_warriors.png" },
  { id: 46, image: "ice_wizard.png" },
  { id: 47, image: "princess.png" },
  { id: 48, image: "miner.png" },
  { id: 49, image: "bandit.png" },
  { id: 50, image: "ghost.png" },
  { id: 51, image: "mega_minion.png" },
  { id: 52, image: "blowdart_goblin.png" },
  { id: 53, image: "goblins.png" },
  { id: 54, image: "goblin_archer.png" },
  { id: 55, image: "fire_spirits.png" },
  { id: 56, image: "bats.png" },
  { id: 57, image: "ice_golem.png" },
  { id: 58, image: "skeletons.png" },
  { id: 59, image: "snow_spirits.png" },
  { id: 60, image: "barbarian_hut.png" },
  { id: 61, image: "building_xbow.png" },
  { id: 62, image: "building_elixir_collector.png" },
  { id: 63, image: "fire_furnace.png" },
  { id: 64, image: "building_inferno.png" },
  { id: 65, image: "bomb_tower.png" },
  { id: 66, image: "building_mortar.png" },
  { id: 67, image: "building_tesla.png" },
  { id: 68, image: "firespirit_hut.png" },
  { id: 69, image: "chaos_cannon.png" },
  { id: 70, image: "tombstone.png" },
  { id: 71, image: "lightning.png" },
  { id: 72, image: "rocket.png" },
  { id: 73, image: "graveyard.png" },
  { id: 74, image: "freeze.png" },
  { id: 75, image: "poison.png" },
  { id: 76, image: "fire_fireball.png" },
  { id: 77, image: "order_volley.png" },
  { id: 78, image: "goblin_barrel.png" },
  { id: 79, image: "tornado.png" },
  { id: 80, image: "copy.png" },
  { id: 81, image: "barb_barrel.png" },
  { id: 82, image: "heal.png" },
  { id: 83, image: "zap.png" },
  { id: 84, image: "snowball.png" },
  { id: 85, image: "rage.png" },
  { id: 86, image: "the_log.png" },
  { id: 87, image: "mirror.png" }
];

/*
 * Deck size object
 */
const deckSize = { small: 16, large: 36 };

/*
 * Exception object
 */
function Exception(message) {
  this.message = message;
}

/*
 * Selects the number of cards requested at random.
 */
function selectRandomCards(numberOfCards) {
  const selectedCards = [];
  const maxCardsIndex = cards.length - 1;
  const small = deckSize.small / 2;
  const large = deckSize.large / 2;
  let card;

  if (!numberOfCards || (numberOfCards !== small && numberOfCards !== large)) {
    throw Exception(`Number of cards needs to be ${small} or ${large}.`);
  }

  while (selectedCards.length != numberOfCards) {
    card = cards[Math.round(Math.random() * cards.length)];

    if (!selectedCards.includes(card)) {
      selectedCards.push(card);
    }
  }

  return selectedCards;
}

/*
 * Shuffle the cards of the deck.
 */
function shuffleCards(cards) {
  const deckCards = [...cards];

  for (card of cards) {
    deckCards.splice(Math.round(Math.random() * deckCards.length), 0, card);
  }

  return deckCards;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
