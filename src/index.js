/**
 * @license MIT
 *
 * https://github.com/nikku/skaat-deck
 *
 * Embeds SVG vector cards, released to the public domain:
 * https://github.com/nikku/skaat-deck#credits
 *
 * Cards optimized for the web using svgo (https://github.com/svg/svgo).
 */

import Club_7 from '../resources/cards-optimized/club-7.svg';
import Club_8 from '../resources/cards-optimized/club-8.svg';
import Club_9 from '../resources/cards-optimized/club-9.svg';
import Club_10 from '../resources/cards-optimized/club-10.svg';
import Club_Jack from '../resources/cards-optimized/club-jack.svg';
import Club_Queen from '../resources/cards-optimized/club-queen.svg';
import Club_King from '../resources/cards-optimized/club-king.svg';
import Club_Ace from '../resources/cards-optimized/club-ace.svg';

import Spade_7 from '../resources/cards-optimized/spade-7.svg';
import Spade_8 from '../resources/cards-optimized/spade-8.svg';
import Spade_9 from '../resources/cards-optimized/spade-9.svg';
import Spade_10 from '../resources/cards-optimized/spade-10.svg';
import Spade_Jack from '../resources/cards-optimized/spade-jack.svg';
import Spade_Queen from '../resources/cards-optimized/spade-queen.svg';
import Spade_King from '../resources/cards-optimized/spade-king.svg';
import Spade_Ace from '../resources/cards-optimized/spade-ace.svg';

import Heart_7 from '../resources/cards-optimized/heart-7.svg';
import Heart_8 from '../resources/cards-optimized/heart-8.svg';
import Heart_9 from '../resources/cards-optimized/heart-9.svg';
import Heart_10 from '../resources/cards-optimized/heart-10.svg';
import Heart_Jack from '../resources/cards-optimized/heart-jack.svg';
import Heart_Queen from '../resources/cards-optimized/heart-queen.svg';
import Heart_King from '../resources/cards-optimized/heart-king.svg';
import Heart_Ace from '../resources/cards-optimized/heart-ace.svg';

import Diamond_7 from '../resources/cards-optimized/diamond-7.svg';
import Diamond_8 from '../resources/cards-optimized/diamond-8.svg';
import Diamond_9 from '../resources/cards-optimized/diamond-9.svg';
import Diamond_10 from '../resources/cards-optimized/diamond-10.svg';
import Diamond_Jack from '../resources/cards-optimized/diamond-jack.svg';
import Diamond_Queen from '../resources/cards-optimized/diamond-queen.svg';
import Diamond_King from '../resources/cards-optimized/diamond-king.svg';
import Diamond_Ace from '../resources/cards-optimized/diamond-ace.svg';

const bySymbol = {
  '♣7': Club_7,
  '♣8': Club_8,
  '♣9': Club_9,
  '♣10': Club_10,
  '♣J': Club_Jack,
  '♣Q': Club_Queen,
  '♣K': Club_King,
  '♣A': Club_Ace,

  '♠7': Spade_7,
  '♠8': Spade_8,
  '♠9': Spade_9,
  '♠10': Spade_10,
  '♠J': Spade_Jack,
  '♠Q': Spade_Queen,
  '♠K': Spade_King,
  '♠A': Spade_Ace,

  '♥7': Heart_7,
  '♥8': Heart_8,
  '♥9': Heart_9,
  '♥10': Heart_10,
  '♥J': Heart_Jack,
  '♥Q': Heart_Queen,
  '♥K': Heart_King,
  '♥A': Heart_Ace,

  '♦7': Diamond_7,
  '♦8': Diamond_8,
  '♦9': Diamond_9,
  '♦10': Diamond_10,
  '♦J': Diamond_Jack,
  '♦Q': Diamond_Queen,
  '♦K': Diamond_King,
  '♦A': Diamond_Ace
};

export {
  Club_7,
  Club_8,
  Club_9,
  Club_10,
  Club_Jack,
  Club_Queen,
  Club_King,
  Club_Ace,

  Spade_7,
  Spade_8,
  Spade_9,
  Spade_10,
  Spade_Jack,
  Spade_Queen,
  Spade_King,
  Spade_Ace,

  Heart_7,
  Heart_8,
  Heart_9,
  Heart_10,
  Heart_Jack,
  Heart_Queen,
  Heart_King,
  Heart_Ace,

  Diamond_7,
  Diamond_8,
  Diamond_9,
  Diamond_10,
  Diamond_Jack,
  Diamond_Queen,
  Diamond_King,
  Diamond_Ace,

  bySymbol
}