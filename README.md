# skaat-deck

A [Skat](https://en.wikipedia.org/wiki/Skat_%28card_game%29) deck.


## Usage

```javascript
import {
  bySymbol
} from 'skaat-deck';

const svg = bySymbol['♣10'];

document.querySelector('img').src = `data:image/svg+xml;utf8,${svg}`;
```


## Credits

The card deck is based on [SVG vector cards, released to the public domain](https://commons.wikimedia.org/wiki/File:English_pattern_playing_cards_deck.svg).


## License

MIT

