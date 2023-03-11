const fetch = require('node-fetch');
const ttc = require('try-to-catch');
const { Color } = require('custom-console-colors');
const {API} = require('./options.json');

const $ = {_get, _e, _tags} = {
  _e: function(e) {
    e?console.log(Color.red('Error:')+Color.magenta(`${e}`)):''
  },
  _tags: function(key, opts) {
    return opts&&opts[key]?Array.isArray(opts[key])?opts[key].map(e=>e&&e.length>1?e.charAt(0)=='-'?`-${key}:"${e.substring(1)}" `:`${key}:"${e}" `:'').join(''):`${key}:"${opts[key]}"`:'';
  },
  _get: async function(pathname) {
    const [e, d] = await ttc(fetch, API + pathname);
    _e(e);
    return !e ? d.json() : e;
  },
  Homepage: async function(p) {
    const [e, d] = await ttc(_get, `home/${p?p:''}`);
    _e(e);
    return !e ? d : e;
  },
  SearchTags: async function(q) {
    const [e, d] = await ttc(_get, `tags/${q?q:''}`);
    _e(e);
    return !e ? d : e;
  },
  Popular: async function(t) {
    const [e, d] = await ttc(_get, `popular/${t?t:10}`);
    _e(e);
    return !e ? d : e;
  },
  Gallery: async function(id) {
    const [e, d] = await ttc(_get, `book/${id?id:''}`);
    _e(e);
    return !e ? d : e;
  },
  Related: async function(id) {
    const [e, d] = await ttc(_get, `book/${id?id:''}/related`);
    _e(e);
    return !e ? d : e;
  },
  Search: async function(query, opts, ...args) {
    const allTags = ['tags','category'].map(e => _tags(e, opts)).join('');
    const url = `search/${query?query+' ':''}${allTags}/${args[0]?args[0]:1}/${args[1]?args[1]:'popular'}`;
    const [e, d] = await ttc(_get, url);
    _e(e);
    return !e ? d : e;
  }
}

module.exports = $;