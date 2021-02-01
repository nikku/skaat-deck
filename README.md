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


## License

MIT

