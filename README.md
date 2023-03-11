# Nhentai API
nHentai unofficial API

## Install

```
npm install nhentai-modules
```

## Example

```js
const nh = require("nhentai-modules");

// Get homepage
(async () => {
  const a = await nh.Homepage();
  console.log(a);
})();
```
## Results
- **List Object**

``` json
{
  "status": 200,
  "data": {
    "popular": [
      {
        "id": "444687",
        "title": {
          "english": "",
          "pretty": "",
          "japanese": "[Satsuki Imonet] Sono Ko wa Takurandeiru | That Girl is Cooking Something (Comic G-Es 02) [English] [WataTL + head empty] [Digital]"
        },
        "lang": "text",
        "cover": "https://a.kontol.online/api/image/https%3A%2F%2Ft7.nhentai.net%2Fgalleries%2F2485007%2Fthumb.jpg"
      }
      More...
    ],
    "all": [
      {
        "title": {
          "english": "[Mimonel] P5 Joker no Stylish Night Matome (Persona 5)",
          "japanese": "[ミモネル] Ｐ５ ジョーカーのスタイリッシュナイトまとめ (ペルソナ5)",
          "pretty": "P5 Joker no Stylish Night Matome"
        },
        "lang": "japanese",
        "cover": {
          "t": "https://c.kontol.online/api/imageV2/t/2485349/thumb.jpg",
          "w": 350,
          "h": 212
        },
        "id": 444752,
        "num_pages": 5
      },
      More.....
    ]
  }
}
```

## API List

**nh.Gallery(ID)**  

- `ID` must be a `number`

Get book API from book ID

return a `Book Object`

- Example
```js
....
(async () => {
  try {
    const g = await nh.Gallery(444752);
    if(g.status === 200) {
      console.log(g);
      
      const {title} = g.data;
      console.log(title.english);
    }
  } catch(e) {
    console.log(e)
  }
})();
```
**nh.Related(ID)**

- `ID` must be `number`

Get realated book API from book ID

return a `List Object`

- Example
```js
....
const related = await nh.Related(444752);
....
```
**nh.Homepage(page)**

- `page` is `optional` and must be a `number`

Get book list from NHentai Homepage

return a `List Object`

- Example
```js
....
let home = await nh.Homepage(); //default
console.log(home);

home = await nh.Homepage(2); // next page
console.log(home)
....
```
**nh.Popular(total)**  
- `total` must be a `number`, default is `10`

Get Popular Book list

return a `List Object`

- Example
```js
....
let popular = await nh.Popular(); // default
console.log(popular);

popular = await nh.Popular(25); // custom total popular book list
console.log(popular);
....
```

**nh.Search(keyword, tags, page, popular)**

- `keyword` must be a `string`
You can search for multiple terms at the same time, and this will return only galleries that contain both terms. For example, `anal tanlines` finds all galleries that contain both `anal` and `tanlines`.

You can exclude terms by prefixing them with `-`, For example `anal tanlines -yaoi`.

You can search for galleries with a specific number of pages with `pages:20` or with a page range: `pages:>20 pages:<=30`.

You can search for galleries uploaded within some timeframe with `uploaded:20d`. Valid units are `h`, `d`, `w`, `m`, `y`. You can use ranges as well: `uploaded:>20d uploaded:<30d`.

- `page` must be a `number`, default `1`
- `tags` must be a `object`, object keys is: `tags`, `Artist`, `Parody`, `Category`, `Group`. 
You can exclude tags by prefixing them with `-`, For example `-milf`
- `popular` must be a `string`, default is `popular` list
available `string` parameter is: `popular-today`, `recent`, and `popular-week`

Get search list from keyword provided

return a `List Object`

- Example
```js
....
let search = await nh.Search('Kaa-san'); // Keyword Only

// With tags
search = await nh.Search('Kaa-san', {
  "tags":"milf",
  "Category":"doujinshi"
});

// With Multiple tags
search = await nh.Search('Kaa-san', {
  "tags":["milf", "mother"],
  "Category":"doujinshi"
});

// With page and popular
search = await nh.Search('Kaa-san', {
  "tags":"milf",
  "Category":"doujinshi"
}, 2, 'popular-week');

// add prefix `-` to Exclude tags
search = await nh.Search('Kaa-san', {
  "tags":["milf", "mother", "-netorare"],
  "Category":"doujinshi"
});
....
```

**nh.SearchTags(keyword)**  

- `keyword` must be a `string`

return a `List Object`

- Example
```js
....
const tags = await nh.SearchTags('mi');
console.log(tags);
....
```

- Result
``` json
{
  "status": 200,
  "data": [
    {
      "_id": 55852,
      "title": "akigami satoru",
      "url": "/tag/akigami-satoru/",
      "type": "tags"
    },
    {
      "_id": 133547,
      "title": "amamiya kokoro",
      "url": "/tag/amamiya-kokoro/",
      "type": "tags"
    },
    {
      "_id": 138146,
      "title": "aosaki hifumi",
      "url": "/tag/aosaki-hifumi/",
      "type": "tags"
    },
    more...
  ]
}
```