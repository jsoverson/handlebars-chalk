handlebars-chalk
----------------

Handlebars templates in the console + chalk colors.

## Installation

```
npm install handlebars-chalk
```

## Usage

```
var Handlebars = require('handlebars');

require('handlebars-chalk')(Handlebars)
```

## Usage in templates 

```
{{#chalk "green"}}
Hello {{#chalk "bold" "red" "underline"}}World{{/chalk}}
{{/chalk}}
```

## License

MIT