# DiscoLounge

DiscoLounge is an online platform that lists bots and servers for discord

DiscoLounge Api manages to replace clientd from discord.js and add new events that are connected to the website
## Usage

```javascript
var dlapi = require("discolounge") 
var client = new dlapi("token",Client) 

obs: if client is not provided, the package will create a new discord client
```

## Getting Started

`Client` -  [discord.js](https://discord.js.org)/[Eris](https://www.npmjs.com/package/eris) Client 

### Votes event:
```javascript
client.on('vote',data=>{

})
```
### Response:
```javascript
data {
    id:<Int> (user id),
    name:<String> (username),
    votes:<Int> (Total User Votes)
}
```


### Bump event:
```javascript
client.on('bump',data=>{

})
```
### Response:
```javascript
data {
    id:<Int> (user id),
    name:<String> (username),
}
```

### Others Events:
```javascript
client.on('connect',socket=>{
    
})
```
```javascript
client.on('error',socket=>{
    
})
```
```javascript
client.on('reconnect',socket=>{
    
})
```

## Dependencies
* [node-fetch] (https://www.npmjs.com/package/node-fetch) - Used for Https requests

* [discord.js] (https://www.npmjs.com/package/discord.js) - Used for Events

## Terms and service

 [TOS](https://discolounge.net/TOS) for details on our services

## Privacy Policy

 [PP](https://discolounge.net/PP) for details on our services

## Website

[DiscoLounge](https://discolounge.net/) 

## Authors

* **BruBrunin** - *Library Developer* 