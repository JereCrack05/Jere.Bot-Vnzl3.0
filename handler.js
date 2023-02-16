const _0x7be2a9=_0x3740;(function(_0x4a0eaa,_0x1f0082){const _0x388d50=_0x3740,_0x3934f0=_0x4a0eaa();while(!![]){try{const _0x54b3d9=parseInt(_0x388d50(0x199))/0x1+-parseInt(_0x388d50(0x18f))/0x2*(parseInt(_0x388d50(0x134))/0x3)+parseInt(_0x388d50(0x1cd))/0x4+parseInt(_0x388d50(0x14b))/0x5*(-parseInt(_0x388d50(0x1a3))/0x6)+-parseInt(_0x388d50(0x1a6))/0x7*(parseInt(_0x388d50(0x138))/0x8)+parseInt(_0x388d50(0x184))/0x9*(-parseInt(_0x388d50(0x1e6))/0xa)+parseInt(_0x388d50(0x1b9))/0xb;if(_0x54b3d9===_0x1f0082)break;else _0x3934f0['push'](_0x3934f0['shift']());}catch(_0x5861a6){_0x3934f0['push'](_0x3934f0['shift']());}}}(_0x4399,0xb9cb9));import{smsg}from'./lib/simple.js';import{format}from'util';import{fileURLToPath}from'url';import _0x27a42c,{join}from'path';import{unwatchFile,watchFile}from'fs';import _0x3f7b9e from'chalk';const {proto}=(await import(_0x7be2a9(0x141)))[_0x7be2a9(0x1a0)],isNumber=_0x7c6f64=>typeof _0x7c6f64===_0x7be2a9(0x172)&&!isNaN(_0x7c6f64),delay=_0x165d2c=>isNumber(_0x165d2c)&&new Promise(_0xcfdb34=>setTimeout(function(){clearTimeout(this),_0xcfdb34();},_0x165d2c));export async function handler(_0xb612ee){const _0x50acbc=_0x7be2a9;this['msgqueque']=this[_0x50acbc(0x1ac)]||[];if(!_0xb612ee)return;this[_0x50acbc(0x1a8)](_0xb612ee[_0x50acbc(0x158)])[_0x50acbc(0x194)](console['error']);let _0x37f983=_0xb612ee[_0x50acbc(0x158)][_0xb612ee[_0x50acbc(0x158)][_0x50acbc(0x1de)]-0x1];if(!_0x37f983)return;if(global['db'][_0x50acbc(0x1d5)]==null)await global[_0x50acbc(0x175)]();try{_0x37f983=smsg(this,_0x37f983)||_0x37f983;if(!_0x37f983)return;_0x37f983[_0x50acbc(0x1d9)]=0x0,_0x37f983[_0x50acbc(0x145)]=![];try{let _0x562f75=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983[_0x50acbc(0x151)]];if(typeof _0x562f75!==_0x50acbc(0x1e8))global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983[_0x50acbc(0x151)]]={};if(_0x562f75){if(!isNumber(_0x562f75['exp']))_0x562f75[_0x50acbc(0x1d9)]=0x0;if(!isNumber(_0x562f75[_0x50acbc(0x145)]))_0x562f75[_0x50acbc(0x145)]=0xa;if(!isNumber(_0x562f75[_0x50acbc(0x179)]))_0x562f75['lastclaim']=0x0;if(!('registered'in _0x562f75))_0x562f75['registered']=![];if(!_0x562f75[_0x50acbc(0x178)]){if(!(_0x50acbc(0x19c)in _0x562f75))_0x562f75[_0x50acbc(0x19c)]=_0x37f983[_0x50acbc(0x19c)];if(!isNumber(_0x562f75[_0x50acbc(0x169)]))_0x562f75[_0x50acbc(0x169)]=-0x1;if(!isNumber(_0x562f75[_0x50acbc(0x13c)]))_0x562f75[_0x50acbc(0x13c)]=-0x1;}if(!isNumber(_0x562f75[_0x50acbc(0x1e4)]))_0x562f75[_0x50acbc(0x1e4)]=-0x1;if(!(_0x50acbc(0x1eb)in _0x562f75))_0x562f75[_0x50acbc(0x1eb)]='';if(!(_0x50acbc(0x1a2)in _0x562f75))_0x562f75['banned']=![];if(!isNumber(_0x562f75[_0x50acbc(0x1b8)]))_0x562f75[_0x50acbc(0x1b8)]=0x0;if(!isNumber(_0x562f75[_0x50acbc(0x1c2)]))_0x562f75[_0x50acbc(0x1c2)]=0x0;if(!(_0x50acbc(0x136)in _0x562f75))_0x562f75['role']=_0x50acbc(0x155);if(!(_0x50acbc(0x198)in _0x562f75))_0x562f75[_0x50acbc(0x198)]=![];if(!(_0x50acbc(0x13b)in _0x562f75))_0x562f75['chatbot']=![];}else global['db'][_0x50acbc(0x1d5)]['users'][_0x37f983['sender']]={'exp':0x0,'diamond':0xa,'lastclaim':0x0,'registered':![],'name':_0x37f983[_0x50acbc(0x19c)],'age':-0x1,'regTime':-0x1,'afk':-0x1,'afkReason':'','banned':![],'warn':0x0,'level':0x0,'role':_0x50acbc(0x155),'autolevelup':![],'chatbot':![]};let _0x1cf21c=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x1b1)][_0x37f983[_0x50acbc(0x1c6)]];if(typeof _0x1cf21c!==_0x50acbc(0x1e8))global['db']['data'][_0x50acbc(0x1b1)][_0x37f983[_0x50acbc(0x1c6)]]={};if(_0x1cf21c){if(!(_0x50acbc(0x1dc)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x1dc)]=![];if(!('welcome'in _0x1cf21c))_0x1cf21c['welcome']=![];if(!(_0x50acbc(0x1c1)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x1c1)]=![];if(!(_0x50acbc(0x1db)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x1db)]='';if(!(_0x50acbc(0x14e)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x14e)]='';if(!(_0x50acbc(0x135)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x135)]='';if(!(_0x50acbc(0x19e)in _0x1cf21c))_0x1cf21c['sDemote']='';if(!(_0x50acbc(0x1d4)in _0x1cf21c))_0x1cf21c['delete']=!![];if(!(_0x50acbc(0x195)in _0x1cf21c))_0x1cf21c['antiLink']=![];if(!(_0x50acbc(0x177)in _0x1cf21c))_0x1cf21c[_0x50acbc(0x177)]=![];if(!(_0x50acbc(0x147)in _0x1cf21c))_0x1cf21c['onlyLatinos']=![];if(!('nsfw'in _0x1cf21c))_0x1cf21c[_0x50acbc(0x1b2)]=![];if(!isNumber(_0x1cf21c[_0x50acbc(0x19a)]))_0x1cf21c[_0x50acbc(0x19a)]=0x0;}else global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x1b1)][_0x37f983[_0x50acbc(0x1c6)]]={'isBanned':![],'welcome':![],'detect':![],'sWelcome':'','sBye':'','sPromote':'','sDemote':'','delete':!![],'antiLink':![],'viewonce':![],'useDocument':!![],'onlyLatinos':![],'nsfw':![],'expired':0x0};let _0x21b333=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x15f)][this[_0x50acbc(0x1b4)][_0x50acbc(0x1e2)]];if(typeof _0x21b333!=='object')global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x15f)][this['user'][_0x50acbc(0x1e2)]]={};if(_0x21b333){if(!(_0x50acbc(0x166)in _0x21b333))_0x21b333['self']=![];if(!(_0x50acbc(0x1c4)in _0x21b333))_0x21b333[_0x50acbc(0x1c4)]=![];if(!(_0x50acbc(0x17f)in _0x21b333))_0x21b333[_0x50acbc(0x17f)]=![];if(!(_0x50acbc(0x159)in _0x21b333))_0x21b333[_0x50acbc(0x159)]=0x0;}else global['db']['data'][_0x50acbc(0x15f)][this[_0x50acbc(0x1b4)][_0x50acbc(0x1e2)]]={'self':![],'autoread':![],'restrict':![],'status':0x0};}catch(_0x5cb190){console[_0x50acbc(0x139)](_0x5cb190);}if(opts[_0x50acbc(0x16b)])return;if(!_0x37f983[_0x50acbc(0x1df)]&&opts[_0x50acbc(0x166)])return;if(opts[_0x50acbc(0x1bd)]&&_0x37f983[_0x50acbc(0x1c6)][_0x50acbc(0x18d)](_0x50acbc(0x1ba)))return;if(opts[_0x50acbc(0x1bf)]&&!_0x37f983[_0x50acbc(0x1c6)][_0x50acbc(0x18d)]('g.us'))return;if(opts['swonly']&&_0x37f983[_0x50acbc(0x1c6)]!==_0x50acbc(0x173))return;if(typeof _0x37f983[_0x50acbc(0x1e5)]!==_0x50acbc(0x1b5))_0x37f983['text']='';const _0x1f8236=[conn[_0x50acbc(0x19f)](global['conn'][_0x50acbc(0x1b4)]['id']),...global[_0x50acbc(0x1ad)][_0x50acbc(0x1c9)](([_0x4112e6])=>_0x4112e6)]['map'](_0x44975b=>_0x44975b[_0x50acbc(0x1da)](/[^0-9]/g,'')+_0x50acbc(0x13e))[_0x50acbc(0x19d)](_0x37f983['sender']),_0xf8999e=_0x1f8236||_0x37f983[_0x50acbc(0x1df)],_0x471b73=_0xf8999e||global['mods']['map'](_0x10c26d=>_0x10c26d['replace'](/[^0-9]/g,'')+_0x50acbc(0x13e))[_0x50acbc(0x19d)](_0x37f983[_0x50acbc(0x151)]),_0xbed22a=_0x1f8236||global[_0x50acbc(0x163)]['map'](_0x1def83=>_0x1def83[_0x50acbc(0x1da)](/[^0-9]/g,'')+_0x50acbc(0x13e))[_0x50acbc(0x19d)](_0x37f983[_0x50acbc(0x151)]);if(opts['queque']&&_0x37f983[_0x50acbc(0x1e5)]&&!(_0x471b73||_0xbed22a)){let _0x24d12f=this[_0x50acbc(0x1ac)],_0x37767e=0x3e8*0x5;const _0x1a8039=_0x24d12f[_0x24d12f[_0x50acbc(0x1de)]-0x1];_0x24d12f[_0x50acbc(0x150)](_0x37f983['id']||_0x37f983['key']['id']),setInterval(async function(){const _0x338e64=_0x50acbc;if(_0x24d12f[_0x338e64(0x1cc)](_0x1a8039)===-0x1)clearInterval(this);await delay(_0x37767e);},_0x37767e);}if(_0x37f983['isBaileys'])return;_0x37f983['exp']+=Math[_0x50acbc(0x1ef)](Math[_0x50acbc(0x1d2)]()*0xa);let _0x2b64bf,_0x5cf368=global['db']['data']&&global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)]&&global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983[_0x50acbc(0x151)]];const _0x562def=(_0x37f983[_0x50acbc(0x1d6)]?(conn[_0x50acbc(0x1b1)][_0x37f983['chat']]||{})['metadata']||await this[_0x50acbc(0x171)](_0x37f983[_0x50acbc(0x1c6)])[_0x50acbc(0x194)](_0x1144a2=>null):{})||{},_0x10b615=(_0x37f983[_0x50acbc(0x1d6)]?_0x562def['participants']:[])||[],_0x2dcb36=(_0x37f983[_0x50acbc(0x1d6)]?_0x10b615['find'](_0x383a18=>conn[_0x50acbc(0x19f)](_0x383a18['id'])===_0x37f983[_0x50acbc(0x151)]):{})||{},_0x5c2f28=(_0x37f983[_0x50acbc(0x1d6)]?_0x10b615[_0x50acbc(0x16c)](_0x336dd9=>conn['decodeJid'](_0x336dd9['id'])==this['user'][_0x50acbc(0x1e2)]):{})||{},_0x37f109=_0x2dcb36?.[_0x50acbc(0x13f)]==_0x50acbc(0x162)||![],_0x29efec=_0x37f109||_0x2dcb36?.[_0x50acbc(0x13f)]==_0x50acbc(0x13f)||![],_0x3b2c60=_0x5c2f28?.[_0x50acbc(0x13f)]||![],_0x1c891d=_0x27a42c[_0x50acbc(0x15d)](_0x27a42c[_0x50acbc(0x16e)](fileURLToPath(import.meta[_0x50acbc(0x15a)])),_0x50acbc(0x15b));for(let _0x29c39e in global[_0x50acbc(0x180)]){let _0x56a993=global['plugins'][_0x29c39e];if(!_0x56a993)continue;if(_0x56a993[_0x50acbc(0x1dd)])continue;const _0x5671fa=join(_0x1c891d,_0x29c39e);if(typeof _0x56a993[_0x50acbc(0x1ce)]===_0x50acbc(0x167))try{await _0x56a993[_0x50acbc(0x1ce)]['call'](this,_0x37f983,{'chatUpdate':_0xb612ee,'__dirname':_0x1c891d,'__filename':_0x5671fa});}catch(_0x3ca1ad){console[_0x50acbc(0x139)](_0x3ca1ad);}if(!opts[_0x50acbc(0x17f)]){if(_0x56a993[_0x50acbc(0x1f6)]&&_0x56a993['tags'][_0x50acbc(0x19d)](_0x50acbc(0x13f)))continue;}const _0x156fe3=_0x7d4640=>_0x7d4640[_0x50acbc(0x1da)](/[|\\{}()[\]^$+*?.]/g,_0x50acbc(0x157));let _0x2f3893=_0x56a993['customPrefix']?_0x56a993[_0x50acbc(0x1c7)]:conn['prefix']?conn['prefix']:global['prefix'],_0x2211a8=(_0x2f3893 instanceof RegExp?[[_0x2f3893[_0x50acbc(0x15c)](_0x37f983[_0x50acbc(0x1e5)]),_0x2f3893]]:Array[_0x50acbc(0x1b7)](_0x2f3893)?_0x2f3893['map'](_0xc0e464=>{const _0x1b8646=_0x50acbc;let _0x1ecd71=_0xc0e464 instanceof RegExp?_0xc0e464:new RegExp(_0x156fe3(_0xc0e464));return[_0x1ecd71[_0x1b8646(0x15c)](_0x37f983['text']),_0x1ecd71];}):typeof _0x2f3893===_0x50acbc(0x1b5)?[[new RegExp(_0x156fe3(_0x2f3893))['exec'](_0x37f983[_0x50acbc(0x1e5)]),new RegExp(_0x156fe3(_0x2f3893))]]:[[[],new RegExp()]])[_0x50acbc(0x16c)](_0x43891a=>_0x43891a[0x1]);if(typeof _0x56a993[_0x50acbc(0x144)]===_0x50acbc(0x167)){if(await _0x56a993[_0x50acbc(0x144)]['call'](this,_0x37f983,{'match':_0x2211a8,'conn':this,'participants':_0x10b615,'groupMetadata':_0x562def,'user':_0x2dcb36,'bot':_0x5c2f28,'isROwner':_0x1f8236,'isOwner':_0xf8999e,'isRAdmin':_0x37f109,'isAdmin':_0x29efec,'isBotAdmin':_0x3b2c60,'isPrems':_0xbed22a,'chatUpdate':_0xb612ee,'__dirname':_0x1c891d,'__filename':_0x5671fa}))continue;}if(typeof _0x56a993!==_0x50acbc(0x167))continue;if(_0x2b64bf=(_0x2211a8[0x0]||'')[0x0]){let _0x47ec85=_0x37f983[_0x50acbc(0x1e5)][_0x50acbc(0x1da)](_0x2b64bf,''),[_0x3859b2,..._0x4ffa2b]=_0x47ec85[_0x50acbc(0x152)]()[_0x50acbc(0x1bc)]` `['filter'](_0x31b959=>_0x31b959);_0x4ffa2b=_0x4ffa2b||[];let _0x13c1a3=_0x47ec85[_0x50acbc(0x152)]()[_0x50acbc(0x1bc)]` `['slice'](0x1),_0x416902=_0x13c1a3[_0x50acbc(0x15d)]` `;_0x3859b2=(_0x3859b2||'')['toLowerCase']();let _0x255b4f=_0x56a993['fail']||global[_0x50acbc(0x1ed)],_0x4ad6cf=_0x56a993[_0x50acbc(0x17d)]instanceof RegExp?_0x56a993[_0x50acbc(0x17d)][_0x50acbc(0x18b)](_0x3859b2):Array['isArray'](_0x56a993[_0x50acbc(0x17d)])?_0x56a993['command'][_0x50acbc(0x189)](_0x1f2aea=>_0x1f2aea instanceof RegExp?_0x1f2aea[_0x50acbc(0x18b)](_0x3859b2):_0x1f2aea===_0x3859b2):typeof _0x56a993[_0x50acbc(0x17d)]===_0x50acbc(0x1b5)?_0x56a993[_0x50acbc(0x17d)]===_0x3859b2:![];if(!_0x4ad6cf)continue;_0x37f983[_0x50acbc(0x1bb)]=_0x29c39e;if(_0x37f983[_0x50acbc(0x1c6)]in global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x1b1)]||_0x37f983[_0x50acbc(0x151)]in global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)]){let _0x3f70ff=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x1b1)][_0x37f983[_0x50acbc(0x1c6)]],_0x2f2ab1=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983['sender']];if(_0x29c39e!=_0x50acbc(0x1c5)&&_0x3f70ff?.[_0x50acbc(0x1dc)])return;if(_0x29c39e!='owner-unbanuser.js'&&_0x2f2ab1?.['banned'])return;}if(_0x56a993[_0x50acbc(0x161)]&&_0x56a993[_0x50acbc(0x1ad)]&&!(_0x1f8236||_0xf8999e)){_0x255b4f('owner',_0x37f983,this);continue;}if(_0x56a993['rowner']&&!_0x1f8236){_0x255b4f(_0x50acbc(0x161),_0x37f983,this);continue;}if(_0x56a993[_0x50acbc(0x1ad)]&&!_0xf8999e){_0x255b4f(_0x50acbc(0x1ad),_0x37f983,this);continue;}if(_0x56a993['mods']&&!_0x471b73){_0x255b4f(_0x50acbc(0x140),_0x37f983,this);continue;}if(_0x56a993[_0x50acbc(0x191)]&&!_0xbed22a){_0x255b4f(_0x50acbc(0x191),_0x37f983,this);continue;}if(_0x56a993['group']&&!_0x37f983['isGroup']){_0x255b4f('group',_0x37f983,this);continue;}else{if(_0x56a993['botAdmin']&&!_0x3b2c60){_0x255b4f(_0x50acbc(0x1d3),_0x37f983,this);continue;}else{if(_0x56a993[_0x50acbc(0x13f)]&&!_0x29efec){_0x255b4f(_0x50acbc(0x13f),_0x37f983,this);continue;}}}if(_0x56a993['private']&&_0x37f983[_0x50acbc(0x1d6)]){_0x255b4f(_0x50acbc(0x1f7),_0x37f983,this);continue;}if(_0x56a993['register']==!![]&&_0x5cf368[_0x50acbc(0x178)]==![]){_0x255b4f(_0x50acbc(0x15e),_0x37f983,this);continue;}_0x37f983[_0x50acbc(0x17e)]=!![];let _0x1eb623=_0x50acbc(0x1d9)in _0x56a993?parseInt(_0x56a993[_0x50acbc(0x1d9)]):0x11;if(_0x1eb623>0xc8)_0x37f983[_0x50acbc(0x1c8)](_0x50acbc(0x1b0));else _0x37f983[_0x50acbc(0x1d9)]+=_0x1eb623;if(!_0xbed22a&&_0x56a993['diamond']&&global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983['sender']][_0x50acbc(0x145)]<_0x56a993[_0x50acbc(0x145)]*0x1){this[_0x50acbc(0x1ec)](_0x37f983[_0x50acbc(0x1c6)],_0x50acbc(0x190)+_0x2b64bf+_0x50acbc(0x1a7)+_0x2b64bf+_0x50acbc(0x146),igfg,null,[[_0x50acbc(0x197),_0x2b64bf+'buy'],['Buy\x20All',_0x2b64bf+'buyall']],_0x37f983);continue;}if(_0x56a993[_0x50acbc(0x1c2)]>_0x5cf368[_0x50acbc(0x1c2)]){this[_0x50acbc(0x1c8)](_0x37f983['chat'],_0x50acbc(0x1aa)+_0x56a993[_0x50acbc(0x1c2)]+_0x50acbc(0x185)+_0x5cf368['level'],_0x37f983);continue;}let _0x3cca87={'match':_0x2211a8,'usedPrefix':_0x2b64bf,'noPrefix':_0x47ec85,'_args':_0x13c1a3,'args':_0x4ffa2b,'command':_0x3859b2,'text':_0x416902,'conn':this,'participants':_0x10b615,'groupMetadata':_0x562def,'user':_0x2dcb36,'bot':_0x5c2f28,'isROwner':_0x1f8236,'isOwner':_0xf8999e,'isRAdmin':_0x37f109,'isAdmin':_0x29efec,'isBotAdmin':_0x3b2c60,'isPrems':_0xbed22a,'chatUpdate':_0xb612ee,'__dirname':_0x1c891d,'__filename':_0x5671fa};try{await _0x56a993[_0x50acbc(0x1b3)](this,_0x37f983,_0x3cca87);if(!_0xbed22a)_0x37f983[_0x50acbc(0x145)]=_0x37f983[_0x50acbc(0x145)]||_0x56a993['diamond']||![];}catch(_0x45be16){_0x37f983['error']=_0x45be16,console[_0x50acbc(0x139)](_0x45be16);if(_0x45be16){let _0x3f737f=format(_0x45be16);for(let _0x64ff3 of Object[_0x50acbc(0x1f0)](global[_0x50acbc(0x181)]))_0x3f737f=_0x3f737f['replace'](new RegExp(_0x64ff3,'g'),'#HIDDEN#');_0x37f983[_0x50acbc(0x1c8)](_0x3f737f);}}finally{if(typeof _0x56a993[_0x50acbc(0x16a)]===_0x50acbc(0x167))try{await _0x56a993['after'][_0x50acbc(0x1b3)](this,_0x37f983,_0x3cca87);}catch(_0xa1a318){console[_0x50acbc(0x139)](_0xa1a318);}if(_0x37f983['diamond'])_0x37f983[_0x50acbc(0x1c8)](_0x50acbc(0x1f3)+ +_0x37f983[_0x50acbc(0x145)]+'\x20💠️');}break;}}}catch(_0x29ac59){console[_0x50acbc(0x139)](_0x29ac59);}finally{if(opts[_0x50acbc(0x1f5)]&&_0x37f983[_0x50acbc(0x1e5)]){const _0x1d938a=this[_0x50acbc(0x1ac)][_0x50acbc(0x1cc)](_0x37f983['id']||_0x37f983['key']['id']);if(_0x1d938a!==-0x1)this[_0x50acbc(0x1ac)][_0x50acbc(0x1f8)](_0x1d938a,0x1);}let _0x480f67,_0x54b1d3=global['db']['data'][_0x50acbc(0x16d)];if(_0x37f983){_0x37f983[_0x50acbc(0x151)]&&(_0x480f67=global['db'][_0x50acbc(0x1d5)][_0x50acbc(0x17b)][_0x37f983[_0x50acbc(0x151)]])&&(_0x480f67[_0x50acbc(0x1d9)]+=_0x37f983['exp'],_0x480f67[_0x50acbc(0x145)]-=_0x37f983['diamond']*0x1);let _0x26f674;if(_0x37f983[_0x50acbc(0x1bb)]){let _0x436041=+new Date();if(_0x37f983[_0x50acbc(0x1bb)]in _0x54b1d3){_0x26f674=_0x54b1d3[_0x37f983[_0x50acbc(0x1bb)]];if(!isNumber(_0x26f674[_0x50acbc(0x142)]))_0x26f674['total']=0x1;if(!isNumber(_0x26f674['success']))_0x26f674['success']=_0x37f983[_0x50acbc(0x139)]!=null?0x0:0x1;if(!isNumber(_0x26f674[_0x50acbc(0x1c0)]))_0x26f674[_0x50acbc(0x1c0)]=_0x436041;if(!isNumber(_0x26f674[_0x50acbc(0x160)]))_0x26f674['lastSuccess']=_0x37f983[_0x50acbc(0x139)]!=null?0x0:_0x436041;}else _0x26f674=_0x54b1d3[_0x37f983[_0x50acbc(0x1bb)]]={'total':0x1,'success':_0x37f983[_0x50acbc(0x139)]!=null?0x0:0x1,'last':_0x436041,'lastSuccess':_0x37f983['error']!=null?0x0:_0x436041};_0x26f674['total']+=0x1,_0x26f674['last']=_0x436041,_0x37f983[_0x50acbc(0x139)]==null&&(_0x26f674[_0x50acbc(0x1ab)]+=0x1,_0x26f674['lastSuccess']=_0x436041);}}try{if(!opts[_0x50acbc(0x1a1)])await(await import('./lib/print.js'))[_0x50acbc(0x1a0)](_0x37f983,this);}catch(_0x43b662){console[_0x50acbc(0x174)](_0x37f983,_0x37f983['quoted'],_0x43b662);}if(opts['autoread'])await this['chatRead'](_0x37f983[_0x50acbc(0x1c6)],_0x37f983[_0x50acbc(0x1d6)]?_0x37f983[_0x50acbc(0x151)]:undefined,_0x37f983['id']||_0x37f983[_0x50acbc(0x183)]['id'])[_0x50acbc(0x194)](()=>{});}}function _0x3740(_0x509d43,_0x476599){const _0x4399d5=_0x4399();return _0x3740=function(_0x3740eb,_0x4a331d){_0x3740eb=_0x3740eb-0x134;let _0xbac231=_0x4399d5[_0x3740eb];return _0xbac231;},_0x3740(_0x509d43,_0x476599);}export async function participantsUpdate({id:_0x3323f5,participants:_0x1ce3d9,action:_0x525670}){const _0x17c92d=_0x7be2a9;if(opts['self'])return;if(this[_0x17c92d(0x137)])return;if(global['db'][_0x17c92d(0x1d5)]==null)await loadDatabase();let _0x17a9c9=global['db'][_0x17c92d(0x1d5)]['chats'][_0x3323f5]||{},_0x5a057d='';switch(_0x525670){case _0x17c92d(0x14a):case _0x17c92d(0x176):if(_0x17a9c9[_0x17c92d(0x143)]){let _0x4ba5d0=await this[_0x17c92d(0x171)](_0x3323f5)||(conn[_0x17c92d(0x1b1)][_0x3323f5]||{})[_0x17c92d(0x1ea)];for(let _0x583d08 of _0x1ce3d9){let _0x47209e=_0x17c92d(0x14f);try{_0x47209e=await this[_0x17c92d(0x1ca)](_0x583d08,_0x17c92d(0x154));}catch(_0x51fb5d){}finally{_0x5a057d=(_0x525670==='add'?(_0x17a9c9['sWelcome']||this[_0x17c92d(0x143)]||conn[_0x17c92d(0x143)]||'Bienvenido,\x20@user')[_0x17c92d(0x1da)]('@group',await this['getName'](_0x3323f5))['replace'](_0x17c92d(0x193),_0x4ba5d0[_0x17c92d(0x149)]?.[_0x17c92d(0x1ae)]()||_0x17c92d(0x192)):_0x17a9c9[_0x17c92d(0x14e)]||this[_0x17c92d(0x1c3)]||conn['bye']||'Adiós,\x20@user')[_0x17c92d(0x1da)](_0x17c92d(0x182),'@'+_0x583d08['split']('@')[0x0]),this[_0x17c92d(0x1ec)](_0x3323f5,_0x5a057d,igfg,_0x47209e,[[_0x525670==_0x17c92d(0x14a)?_0x17c92d(0x1af):_0x17c92d(0x1a9),_0x525670==_0x17c92d(0x14a)?_0x17c92d(0x1ee):'\x20'],[_0x525670==_0x17c92d(0x14a)?'⏍\x20INFO':_0x17c92d(0x153),_0x525670==_0x17c92d(0x14a)?_0x17c92d(0x17c):'\x20']],null,{'mentions':[_0x583d08]});}}}break;case _0x17c92d(0x1b6):case _0x17c92d(0x156):_0x5a057d=_0x17a9c9[_0x17c92d(0x135)]||this[_0x17c92d(0x1d7)]||conn[_0x17c92d(0x1d7)]||_0x17c92d(0x1a4);case'demote':case _0x17c92d(0x13d):if(!_0x5a057d)_0x5a057d=_0x17a9c9[_0x17c92d(0x19e)]||this['sdemote']||conn[_0x17c92d(0x1a5)]||_0x17c92d(0x18e);_0x5a057d=_0x5a057d[_0x17c92d(0x1da)](_0x17c92d(0x182),'@'+_0x1ce3d9[0x0][_0x17c92d(0x1bc)]('@')[0x0]);if(_0x17a9c9[_0x17c92d(0x1c1)])this[_0x17c92d(0x16f)](_0x3323f5,{'text':_0x5a057d,'mentions':this['parseMention'](_0x5a057d)});break;}}function _0x4399(){const _0x4ba889=['toString','⦙☰\x20MENU','chirrido\x20-_-','chats','nsfw','call','user','string','promote','isArray','warn','7487920hFmzDU','g.us','plugin','split','pconly','sSubject','gconly','last','detect','level','bye','autoread','owner-unbanchat.js','chat','customPrefix','reply','map','profilePictureUrl','🤖\x20\x20Esta\x20función\x20es\x20solo\x20para\x20Para\x20moderadores\x20del\x20Bot','indexOf','4106272YHjOaw','all','🔐\x20Esta\x20característica\x20está\x20deshabilitada','parseMention','magenta','random','botAdmin','delete','data','isGroup','spromote','🧑🏻‍💻\x20Este\x20comando\x20solo\x20puede\x20ser\x20utilizado\x20por\x20el\x20Creador\x20del\x20bot','exp','replace','sWelcome','isBanned','disabled','length','fromMe','sRevoke','El\x20icono\x20del\x20grupo\x20cambió\x20a','jid','☣️\x20Este\x20comando\x20solo\x20puede\x20ser\x20utilizado\x20por\x20el\x20Dueño\x20del\x20Bot','afk','text','670TKSYav','@icon','object','icon','metadata','afkReason','sendButton','dfail','/help','ceil','values','\x0a╭•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ\x20ᵇᵒᵗ❂◄⋆҈͜͡•╮\x0a╽❮❮\x20𝘼𝙉𝙏𝙄\x20𝘿𝙀𝙇𝙀𝙏𝙀\x20❯❯\x0a├⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆\x0a┃❮❮\x20TURBO\x20NITRO\x20❯❯\x0a├⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆\x0a╽\x20Eliminó\x20un\x20mensaje\x20🤖\x0a┃\x0a┃\x20Nombre\x20:\x20@','Descripción\x20cambiada\x20a\x20\x0a@desc','Utilizaste\x20','copyNForward','queque','tags','private','splice','75desZUx','sPromote','role','isInit','22416HjXicn','error','serializeM','chatbot','regTime','degradar','@s.whatsapp.net','admin','mods','@adiwajshing/baileys','total','welcome','before','diamond','buyall','onlyLatinos','El\x20nombre\x20del\x20grupo\x20cambió\x20a\x20\x0a@group','desc','add','515VILvxZ','__filename','/menu','sBye','./src/avatar_contact.png','push','sender','trim','👋🏻','image','Novato','promover','\x5c$&','messages','status','url','./plugins','exec','join','unreg','settings','lastSuccess','rowner','superadmin','prems','🧑🏻‍💻\x20Este\x20comando\x20solo\x20se\x20puede\x20usar\x20en\x20el\x20chat\x20privado\x20del\x20Bot','revoke','self','function','sDesc','age','after','nyimak','find','stats','dirname','sendMessage','subject','groupMetadata','number','status@broadcast','log','loadDatabase','remove','viewonce','registered','lastclaim','sIcon','users','/info','command','isCommand','restrict','plugins','APIKeys','@user','key','92286UBetCv','\x20para\x20usar\x20este\x20comando.\x20\x0aTu\x20nivel\x20','reloadHandler','loadMessage','📃\x20Regístrese\x20para\x20usar\x20esta\x20función\x20\x20Escribiendo:\x0a\x0a\x20/reg\x20nombre.edad\x0a\x0a🧑🏻‍💻Ejemplo\x20\x20:\x20/reg\x20turbo.23','some','\x20\x0a├⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆\x0a╽Desactiva\x20esta\x20opción\x20\x0a┃\x20/off\x20antidelete\x0a┃\x20.enable\x20delete\x0a╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯\x0a','test','El\x20enlace\x20del\x20grupo\x20cambia\x20a\x0a@revoke','endsWith','@user\x20ya\x20no\x20es\x20administrador','26600GJeYqq','🧑🏻‍💻️\x20Tus\x20diamantes\x20se\x20agotaron\x20\x0a\x20use\x20el\x20siguiente\x20comando\x20para\x20comprar\x20más\x20diamantes\x20\x0a','premium','Desconocido','@desc','catch','antiLink','khajs','Buy','autolevelup','519872SGWnKm','expired','💥\x20¡Para\x20usar\x20este\x20comando\x20debo\x20ser\x20Administrador!','name','includes','sDemote','decodeJid','default','noprint','banned','10674FLiEYB','@user\x20ahora\x20es\x20administrador','sdemote','658UGoChH','buy\x20<cantidad>\x20\x0a','pushMessage','BYE','🧑🏻‍💻️\x20nivel\x20requerido\x20','success','msgqueque','owner'];_0x4399=function(){return _0x4ba889;};return _0x4399();}export async function groupsUpdate(_0x161f66){const _0x213153=_0x7be2a9;if(opts[_0x213153(0x166)])return;for(const _0x11976e of _0x161f66){const _0x54f9ab=_0x11976e['id'];if(!_0x54f9ab)continue;let _0x483128=global['db'][_0x213153(0x1d5)]['chats'][_0x54f9ab],_0x5319d1='';if(!_0x483128?.[_0x213153(0x1c1)])continue;if(_0x11976e[_0x213153(0x149)])_0x5319d1=(_0x483128['sDesc']||this[_0x213153(0x168)]||conn['sDesc']||_0x213153(0x1f2))[_0x213153(0x1da)](_0x213153(0x193),_0x11976e['desc']);if(_0x11976e[_0x213153(0x170)])_0x5319d1=(_0x483128['sSubject']||this[_0x213153(0x1be)]||conn[_0x213153(0x1be)]||_0x213153(0x148))[_0x213153(0x1da)]('@subject',_0x11976e[_0x213153(0x170)]);if(_0x11976e[_0x213153(0x1e9)])_0x5319d1=(_0x483128[_0x213153(0x17a)]||this[_0x213153(0x17a)]||conn[_0x213153(0x17a)]||_0x213153(0x1e1))['replace'](_0x213153(0x1e7),_0x11976e[_0x213153(0x1e9)]);if(_0x11976e[_0x213153(0x165)])_0x5319d1=(_0x483128[_0x213153(0x1e0)]||this[_0x213153(0x1e0)]||conn[_0x213153(0x1e0)]||_0x213153(0x18c))[_0x213153(0x1da)]('@revoke',_0x11976e[_0x213153(0x165)]);if(!_0x5319d1)continue;await this['sendMessage'](_0x54f9ab,{'text':_0x5319d1,'mentions':this[_0x213153(0x1d0)](_0x5319d1)});}}export async function deleteUpdate(_0x27a72f){const _0xd32ba3=_0x7be2a9;try{const {fromMe:_0x4f41cb,id:_0x31546a,participant:_0x3e6ad8}=_0x27a72f;if(_0x4f41cb)return;let _0x177927=this[_0xd32ba3(0x13a)](this[_0xd32ba3(0x187)](_0x31546a));if(!_0x177927)return;let _0x14bedf=global['db'][_0xd32ba3(0x1d5)]['chats'][_0x177927[_0xd32ba3(0x1c6)]]||{};if(_0x14bedf[_0xd32ba3(0x1d4)])return;await this[_0xd32ba3(0x1c8)](_0x177927[_0xd32ba3(0x1c6)],(_0xd32ba3(0x1f1)+_0x3e6ad8['split']`@`[0x0]+_0xd32ba3(0x18a))[_0xd32ba3(0x152)](),_0x177927,{'mentions':[_0x3e6ad8]}),this[_0xd32ba3(0x1f4)](_0x177927[_0xd32ba3(0x1c6)],_0x177927)[_0xd32ba3(0x194)](_0x84d68=>console[_0xd32ba3(0x174)](_0x84d68,_0x177927));}catch(_0x1d010c){console[_0xd32ba3(0x139)](_0x1d010c);}}global['dfail']=(_0x53e16a,_0x56f058,_0x2db797)=>{const _0xe08dc5=_0x7be2a9;let _0x595e14={'rowner':_0xe08dc5(0x1d8),'owner':_0xe08dc5(0x1e3),'mods':_0xe08dc5(0x1cb),'premium':'💠\x20Este\x20comando\x20es\x20solo\x20para\x20miembros\x20Premium\x0a\x0aEscribe\x20/premium\x20para\x20más\x20info','group':'🧑🏻‍💻️\x20¡Este\x20comando\x20solo\x20se\x20puede\x20usar\x20en\x20grupos!','private':_0xe08dc5(0x164),'admin':'😎️\x20Este\x20comando\x20es\x20solo\x20para\x20Admins\x20del\x20grupo','botAdmin':_0xe08dc5(0x19b),'unreg':_0xe08dc5(0x188),'restrict':_0xe08dc5(0x1cf)}[_0x53e16a];if(_0x595e14)return _0x2db797[_0xe08dc5(0x1ec)](_0x56f058[_0xe08dc5(0x1c6)],_0x595e14,igfg,null,[['☣️\x20OK',_0xe08dc5(0x196)],['⦙☰\x20Menu',_0xe08dc5(0x14d)]],_0x56f058);};let file=global[_0x7be2a9(0x14c)](import.meta[_0x7be2a9(0x15a)],!![]);watchFile(file,async()=>{const _0x1e8684=_0x7be2a9;unwatchFile(file),console[_0x1e8684(0x174)](_0x3f7b9e[_0x1e8684(0x1d1)]('✔️\x20\x20Se\x20actualizo\x20\x27handler.js\x27'));if(global[_0x1e8684(0x186)])console[_0x1e8684(0x174)](await global[_0x1e8684(0x186)]());});

import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch' 

/**
 * @type {import('@adiwajshing/baileys')}  
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        m.money = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
		
            if (user) {
                if (!isNumber(user.exp)) user.exp = 0
		if (!('premium' in user)) user.premium = false
		if (!isNumber(user.joincount)) user.joincount = 1
                if (!isNumber(user.money)) user.money = 150
                if (!isNumber(user.limit)) user.limit = 15 	       
                if (!('registered' in user)) user.registered = false
		if (!('registroR' in user)) user.registroR = false
		if (!('registroC' in user)) user.registroC = false  
		if (!isNumber(user.IDregister)) user.IDregister = 0   
                    
            if (!user.registered) {
		                    	 
		    if (!('name' in user)) user.name = m.name
		    if (!isNumber(user.age)) user.age = 0
                    if (!isNumber(user.descripcion)) user.descripcion = 0
		    if (!isNumber(user.genero)) user.genero = 0
		    if (!isNumber(user.identidad)) user.identidad = 0
		    if (!isNumber(user.pasatiempo)) user.pasatiempo = 0
		    if (!isNumber(user.pasatiempo1)) user.pasatiempo1 = 0
		    if (!isNumber(user.pasatiempo2)) user.pasatiempo2 = 0
		    if (!isNumber(user.pasatiempo3)) user.pasatiempo3 = 0
		    if (!isNumber(user.pasatiempo4)) user.pasatiempo4 = 0
		    if (!isNumber(user.pasatiempo5)) user.pasatiempo5 = 0
		    if (!isNumber(user.tiempo)) user.tiempo = 0
		    if (!isNumber(user.premLimit)) user.premLimit = 0
		    
		    
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                        
	        }
		                    		    
          if (!isNumber(user.afk)) user.afk = -1
	      //if (!('autolevelup' in user))  user.autolevelup = true
	      if (!('role' in user)) user.role = '*NOVATO(A)* 🪤'
              if (!isNumber(user.agility)) user.agility = 0
              if (!isNumber(user.anakanjing)) user.anakanjing = 0
              if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
              if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
              if (!isNumber(user.anakkucing)) user.anakkucing = 0
              if (!isNumber(user.anakkuda)) user.anakkuda = 0
              if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
              if (!isNumber(user.anaknaga)) user.anaknaga = 0
              if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
              if (!isNumber(user.anakphonix)) user.anakphonix = 0
              if (!isNumber(user.anakrubah)) user.anakrubah = 0
              if (!isNumber(user.anakserigala)) user.anakserigala = 0
              if (!isNumber(user.anggur)) user.anggur = 0
              if (!isNumber(user.anjing)) user.anjing = 0
              if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
              if (!isNumber(user.antispam)) user.antispam = 0
              if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
              if (!isNumber(user.apel)) user.apel = 0
              if (!isNumber(user.aqua)) user.aqua = 0
              if (!isNumber(user.arc)) user.arc = 0
              if (!isNumber(user.arcdurability)) user.arcdurability = 0
              if (!isNumber(user.arlok)) user.arlok = 0
              if (!isNumber(user.armor)) user.armor = 0
              if (!isNumber(user.armordurability)) user.armordurability = 0
              if (!isNumber(user.armormonster)) user.armormonster = 0
              if (!isNumber(user.as)) user.as = 0
              if (!isNumber(user.atm)) user.atm = 0
              if (!isNumber(user.axe)) user.axe = 0
              if (!isNumber(user.axedurability)) user.axedurability = 0
              if (!isNumber(user.ayam)) user.ayam = 0
              if (!isNumber(user.ayamb)) user.ayamb = 0
              if (!isNumber(user.ayambakar)) user.ayambakar = 0
              if (!isNumber(user.ayamg)) user.ayamg = 0
              if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
              if (!isNumber(user.babi)) user.babi = 0
              if (!isNumber(user.babihutan)) user.babihutan = 0
              if (!isNumber(user.babipanggang)) user.babipanggang = 0
              if (!isNumber(user.bandage)) user.bandage = 0
              if (!isNumber(user.bank)) user.bank = 0
              if (!isNumber(user.banteng)) user.banteng = 0
              if (!isNumber(user.batu)) user.batu = 0
              if (!isNumber(user.bawal)) user.bawal = 0
              if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
              if (!isNumber(user.bayam)) user.bayam = 0
              if (!isNumber(user.berlian)) user.berlian = 10
              if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
              if (!isNumber(user.bibitapel)) user.bibitapel = 0
              if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
              if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
              if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
              if (!isNumber(user.botol)) user.botol = 0
              if (!isNumber(user.bow)) user.bow = 0
              if (!isNumber(user.bowdurability)) user.bowdurability = 0
              if (!isNumber(user.boxs)) user.boxs = 0
              if (!isNumber(user.brick)) user.brick = 0
              if (!isNumber(user.brokoli)) user.brokoli = 0
              if (!isNumber(user.buaya)) user.buaya = 0
              if (!isNumber(user.buntal)) user.buntal = 0
              if (!isNumber(user.cat)) user.cat = 0
              if (!isNumber(user.catexp)) user.catexp = 0
              if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
              if (!isNumber(user.centaur)) user.centaur = 0
              if (!isNumber(user.centaurexp)) user.centaurexp = 0
              if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
              if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
              if (!isNumber(user.clay)) user.clay = 0
              if (!isNumber(user.coal)) user.coal = 0
              if (!isNumber(user.coin)) user.coin = 0
              if (!isNumber(user.common)) user.common = 0
              if (!isNumber(user.crystal)) user.crystal = 0
              if (!isNumber(user.cumi)) user.cumi = 0
              if (!isNumber(user.cupon)) user.cupon = 0
              if (!isNumber(user.diamond)) user.diamond = 3
              if (!isNumber(user.dog)) user.dog = 0
              if (!isNumber(user.dogexp)) user.dogexp = 0
              if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
              if (!isNumber(user.dory)) user.dory = 0
              if (!isNumber(user.dragon)) user.dragon = 0
              if (!isNumber(user.dragonexp)) user.dragonexp = 0
              if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
              if (!isNumber(user.emas)) user.emas = 0
              if (!isNumber(user.emerald)) user.emerald = 0
              if (!isNumber(user.enchant)) user.enchant = 0
              if (!isNumber(user.esteh)) user.esteh = 0
              if (!isNumber(user.exp)) user.exp = 0
              if (!isNumber(user.expg)) user.expg = 0
              if (!isNumber(user.exphero)) user.exphero = 0
	      if (!isNumber(user.eleksirb)) user.eleksirb = 0
	      if (!isNumber(user.emasbatang)) user.emasbatang = 0
	      if (!isNumber(user.emasbiasa)) user.emasbiasa = 0
	      if (!isNumber(user.fideos)) user.fideos = 0    
              if (!isNumber(user.fishingrod)) user.fishingrod = 0
              if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
              if (!isNumber(user.fortress)) user.fortress = 0
              if (!isNumber(user.fox)) user.fox = 0
              if (!isNumber(user.foxexp)) user.foxexp = 0
              if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
              if (!isNumber(user.fullatm)) user.fullatm = 0
              if (!isNumber(user.gadodado)) user.gadodado = 0
              if (!isNumber(user.gajah)) user.gajah = 0
              if (!isNumber(user.gamemines)) user.gamemines = false
              if (!isNumber(user.ganja)) user.ganja = 0
              if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
              if (!isNumber(user.gems)) user.gems = 0
              if (!isNumber(user.glass)) user.glass = 0
              if (!isNumber(user.glimit)) user.glimit = 15
              if (!isNumber(user.glory)) user.glory = 0
              if (!isNumber(user.gold)) user.gold = 0
              if (!isNumber(user.griffin)) user.griffin = 0
              if (!isNumber(user.griffinexp)) user.griffinexp = 0
              if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
              if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
              if (!isNumber(user.gulai)) user.gulai = 0
              if (!isNumber(user.gurita)) user.gurita = 0
              if (!isNumber(user.harimau)) user.harimau = 0
              if (!isNumber(user.haus)) user.haus = 100
              if (!isNumber(user.healt)) user.healt = 100
              if (!isNumber(user.health)) user.health = 100
              if (!isNumber(user.healthmonster)) user.healthmonster = 0
              if (!isNumber(user.healtmonster)) user.healtmonster = 0
              if (!isNumber(user.hero)) user.hero = 1
              if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
              if (!isNumber(user.hiu)) user.hiu = 0
              if (!isNumber(user.horse)) user.horse = 0
              if (!isNumber(user.horseexp)) user.horseexp = 0
              if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
              if (!isNumber(user.ikan)) user.ikan = 0
              if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
              if (!isNumber(user.intelligence)) user.intelligence = 0
              if (!isNumber(user.iron)) user.iron = 0
              if (!isNumber(user.jagung)) user.jagung = 0
              if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
              if (!isNumber(user.jeruk)) user.jeruk = 0
              if (!isNumber(user.joinlimit)) user.joinlimit = 1
              if (!isNumber(user.judilast)) user.judilast = 0
              if (!isNumber(user.kaleng)) user.kaleng = 0
              if (!isNumber(user.kambing)) user.kambing = 0
              if (!isNumber(user.kangkung)) user.kangkung = 0
              if (!isNumber(user.kapak)) user.kapak = 0
              if (!isNumber(user.kardus)) user.kardus = 0
              if (!isNumber(user.katana)) user.katana = 0
              if (!isNumber(user.katanadurability)) user.katanadurability = 0
              if (!isNumber(user.kayu)) user.kayu = 0
              if (!isNumber(user.kentang)) user.kentang = 0
              if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
              if (!isNumber(user.kepiting)) user.kepiting = 0
              if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
              if (!isNumber(user.kerbau)) user.kerbau = 0
              if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
              if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
              if (!isNumber(user.kerjadua)) user.kerjadua = 0
              if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
              if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
              if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
              if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
              if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
              if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
              if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
              if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
              if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
              if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
              if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
              if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
              if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
              if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
              if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
              if (!isNumber(user.kerjalima)) user.kerjalima = 0
              if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
              if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
              if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
              if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
              if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
              if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
              if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
              if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
              if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
              if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
              if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
              if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
              if (!isNumber(user.kubis)) user.kubis = 0
              if (!isNumber(user.kucing)) user.kucing = 0
              if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
              if (!isNumber(user.kuda)) user.kuda = 0
              if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
              if (!isNumber(user.kyubi)) user.kyubi = 0
              if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
              if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
              if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
              if (!isNumber(user.labu)) user.labu = 0
              if (!isNumber(user.laper)) user.laper = 100
              if (!isNumber(user.lastadventure)) user.lastadventure = 0
              if (!isNumber(user.lastbansos)) user.lastbansos = 0
              if (!isNumber(user.lastberbru)) user.lastberbru = 0
              if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
              if (!isNumber(user.lastbunga)) user.lastbunga = 0
              if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
	      if (!isNumber(user.lastcoins)) user.lastcoins = 0    
              if (!isNumber(user.lastclaim)) user.lastclaim = 0
              if (!isNumber(user.lastcode)) user.lastcode = 0
	      if (!isNumber(user.lastcofre)) user.lastcofre = 0
              if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
              if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
              if (!isNumber(user.lastdagang)) user.lastdagang = 0
	      if (!isNumber(user.lastdiamantes)) user.lastdiamantes = 0    
              if (!isNumber(user.lastduel)) user.lastduel = 0
              if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
              if (!isNumber(user.lasteasy)) user.lasteasy = 0
              if (!isNumber(user.lastfight)) user.lastfight = 0
              if (!isNumber(user.lastfishing)) user.lastfishing = 0
              if (!isNumber(user.lastgift)) user.lastgift = 0
              if (!isNumber(user.lastgojek)) user.lastgojek = 0
              if (!isNumber(user.lastgrab)) user.lastgrab = 0
              if (!isNumber(user.lasthourly)) user.lasthourly = 0
	      if (!isNumber(user.halloween)) user.halloween = 0
              if (!isNumber(user.lasthunt)) user.lasthunt = 0
              if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
              if (!isNumber(user.lastjb)) user.lastjb = 0
              if (!isNumber(user.lastkill)) user.lastkill = 0
              if (!isNumber(user.lastlink)) user.lastlink = 0
              if (!isNumber(user.lastlumber)) user.lastlumber = 0
              if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
              if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
              if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
              if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
              if (!isNumber(user.lastmining)) user.lastmining = 0
              if (!isNumber(user.lastmisi)) user.lastmisi = 0
              if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
              if (!isNumber(user.lastmulung)) user.lastmulung = 0
              if (!isNumber(user.lastnambang)) user.lastnambang = 0
              if (!isNumber(user.lastnebang)) user.lastnebang = 0
              if (!isNumber(user.lastngocok)) user.lastngocok = 0
              if (!isNumber(user.lastngojek)) user.lastngojek = 0
              if (!isNumber(user.lastopen)) user.lastopen = 0
              if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
	      if (!isNumber(user.lastpago)) user.lastpago = 0 
              if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
              if (!isNumber(user.lastrampok)) user.lastrampok = 0
              if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
              if (!isNumber(user.lastrob)) user.lastrob = 0
              if (!isNumber(user.lastroket)) user.lastroket = 0
              if (!isNumber(user.lastsda)) user.lastsda = 0
              if (!isNumber(user.lastseen)) user.lastseen = 0
              if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
              if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
              if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
              if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
              if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
              if (!isNumber(user.lastturu)) user.lastturu = 0
              if (!isNumber(user.lastwar)) user.lastwar = 0
              if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
              if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
              if (!isNumber(user.lastweekly)) user.lastweekly = 0
              if (!isNumber(user.lastwork)) user.lastwork = 0
              if (!isNumber(user.legendary)) user.legendary = 0
              if (!isNumber(user.lele)) user.lele = 0
              if (!isNumber(user.leleb)) user.leleb = 0
              if (!isNumber(user.lelebakar)) user.lelebakar = 0
              if (!isNumber(user.leleg)) user.leleg = 0
              if (!isNumber(user.level)) user.level = 0
              if (!isNumber(user.limit)) user.limit = 15
              if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
              if (!isNumber(user.lion)) user.lion = 0
              if (!isNumber(user.lionexp)) user.lionexp = 0
              if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
              if (!isNumber(user.lobster)) user.lobster = 0
              if (!isNumber(user.lumba)) user.lumba = 0
              if (!isNumber(user.magicwand)) user.magicwand = 0
              if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
              if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
              if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
              if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
              if (!isNumber(user.makanannaga)) user.makanannaga = 0
              if (!isNumber(user.makananpet)) user.makananpet = 0
              if (!isNumber(user.makananphonix)) user.makananphonix = 0
              if (!isNumber(user.makananserigala)) user.makananserigala = 0
              if (!isNumber(user.mana)) user.mana = 0
              if (!isNumber(user.mangga)) user.mangga = 0
              if (!isNumber(user.money)) user.money = 150
              if (!isNumber(user.monyet)) user.monyet = 0
              if (!isNumber(user.mythic)) user.mythic = 0
              if (!isNumber(user.naga)) user.naga = 0
              if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
              if (!isNumber(user.net)) user.net = 0
              if (!isNumber(user.nila)) user.nila = 0
              if (!isNumber(user.nilabakar)) user.nilabakar = 0
              if (!isNumber(user.note)) user.note = 0
              if (!isNumber(user.ojekk)) user.ojekk = 0
              if (!isNumber(user.oporayam)) user.oporayam = 0
              if (!isNumber(user.orca)) user.orca = 0
              if (!isNumber(user.pancing)) user.pancing = 0
              if (!isNumber(user.pancingan)) user.pancingan = 1
              if (!isNumber(user.panda)) user.panda = 0
              if (!isNumber(user.paus)) user.paus = 0
              if (!isNumber(user.pausbakar)) user.pausbakar = 0
              if (!isNumber(user.pc)) user.pc = 0
              if (!isNumber(user.pepesikan)) user.pepesikan = 0
              if (!isNumber(user.pertambangan)) user.pertambangan = 0
              if (!isNumber(user.pertanian)) user.pertanian = 0
              if (!isNumber(user.pet)) user.pet = 0
              if (!isNumber(user.petFood)) user.petFood = 0
              if (!isNumber(user.phonix)) user.phonix = 0
              if (!isNumber(user.phonixexp)) user.phonixexp = 0
              if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
              if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
              if (!isNumber(user.pickaxe)) user.pickaxe = 0
              if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
              if (!isNumber(user.pillhero)) user.pillhero= 0
              if (!isNumber(user.pisang)) user.pisang = 0
              if (!isNumber(user.pointxp)) user.pointxp = 0
              if (!isNumber(user.potion)) user.potion = 0
              if (!isNumber(user.psenjata)) user.psenjata = 0
              if (!isNumber(user.psepick)) user.psepick = 0
              if (!isNumber(user.ramuan)) user.ramuan = 0
              if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
              if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
              if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
              if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
              if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
              if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
              if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
              if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
              if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
              if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
              if (!isNumber(user.reglast)) user.reglast = 0
              if (!isNumber(user.rendang)) user.rendang = 0
              if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
              if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
              if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
              if (!isNumber(user.robo)) user.robo = 0
              if (!isNumber(user.roboxp)) user.roboxp = 0
              if (!isNumber(user.rock)) user.rock = 0
              if (!isNumber(user.roket)) user.roket = 0
              if (!isNumber(user.roti)) user.roti = 0
              if (!isNumber(user.rubah)) user.rubah = 0
              if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
              if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
              if (!isNumber(user.sampah)) user.sampah = 0
              if (!isNumber(user.sand)) user.sand = 0
              if (!isNumber(user.sapi)) user.sapi = 0
              if (!isNumber(user.sapir)) user.sapir = 0
              if (!isNumber(user.seedbayam)) user.seedbayam = 0
              if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
              if (!isNumber(user.seedjagung)) user.seedjagung = 0
              if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
              if (!isNumber(user.seedkentang)) user.seedkentang = 0
              if (!isNumber(user.seedkubis)) user.seedkubis = 0
              if (!isNumber(user.seedlabu)) user.seedlabu = 0
              if (!isNumber(user.seedtomat)) user.seedtomat = 0
              if (!isNumber(user.seedwortel)) user.seedwortel = 0
              if (!isNumber(user.serigala)) user.serigala = 0
              if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
              if (!isNumber(user.shield)) user.shield = false
              if (!isNumber(user.skillexp)) user.skillexp = 0
              if (!isNumber(user.snlast)) user.snlast = 0
              if (!isNumber(user.soda)) user.soda = 0
              if (!isNumber(user.sop)) user.sop = 0
              if (!isNumber(user.spammer)) user.spammer = 0
              if (!isNumber(user.spinlast)) user.spinlast = 0
              if (!isNumber(user.ssapi)) user.ssapi = 0
              if (!isNumber(user.stamina)) user.stamina = 100
              if (!isNumber(user.steak)) user.steak = 0
              if (!isNumber(user.stick)) user.stick = 0
              if (!isNumber(user.strength)) user.strength = 0
              if (!isNumber(user.string)) user.string = 0
              if (!isNumber(user.superior)) user.superior = 0
              if (!isNumber(user.suplabu)) user.suplabu = 0
              if (!isNumber(user.sushi)) user.sushi = 0
              if (!isNumber(user.sword)) user.sword = 0
              if (!isNumber(user.sworddurability)) user.sworddurability = 0
              if (!isNumber(user.tigame)) user.tigame = 50
              if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
              if (!isNumber(user.title)) user.title = 0
              if (!isNumber(user.tomat)) user.tomat = 0
              if (!isNumber(user.tprem)) user.tprem = 0
              if (!isNumber(user.trash)) user.trash = 0
              if (!isNumber(user.trofi)) user.trofi = 0
              if (!isNumber(user.troopcamp)) user.troopcamp = 0
              if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
              if (!isNumber(user.udang)) user.udang = 0
              if (!isNumber(user.udangbakar)) user.udangbakar = 0
              if (!isNumber(user.umpan)) user.umpan = 0
              if (!isNumber(user.uncoommon)) user.uncoommon = 0
              if (!isNumber(user.unreglast)) user.unreglast = 0
              if (!isNumber(user.upgrader)) user.upgrader = 0
              if (!isNumber(user.vodka)) user.vodka = 0
              if (!isNumber(user.wallet)) user.wallet = 0
              if (!isNumber(user.warn)) user.warn = 0
              if (!isNumber(user.weapon)) user.weapon = 0
              if (!isNumber(user.weapondurability)) user.weapondurability = 0
              if (!isNumber(user.wolf)) user.wolf = 0
              if (!isNumber(user.wolfexp)) user.wolfexp = 0
              if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
              if (!isNumber(user.wood)) user.wood = 0
              if (!isNumber(user.wortel)) user.wortel = 0
		    
              if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
              if (!user.job) user.job = 'Desempleo'
              if (!user.premium) user.premium = false
              if (!user.premium) user.premiumTime = 0
              if (!user.rtrofi) user.rtrofi = 'Bronce'
                                                   		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            } else
                global.db.data.users[m.sender] = {
		    
		    afk: -1,
                    afkReason: '',
                    age: 0,
		    genero: 0,
		    identidad: 0,
		    pasatiempo: 0,
		    pasatiempo1: 0,
		    pasatiempo2: 0,
		    pasatiempo3: 0,
		    pasatiempo4: 0,
	            pasatiempo5: 0,
		    tiempo: 0,
		    premLimit: 0,
                    agility: 16,
                    anakanjing: 0,
                    anakcentaur: 0,
                    anakgriffin: 0,
                    anakkucing: 0,
                    anakkuda: 0,
                    anakkyubi: 0,
                    anaknaga: 0,
                    anakpancingan: 0,
                    anakphonix: 0,
                    anakrubah: 0,
                    anakserigala: 0,
                    anggur: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    apel: 0,
                    aqua: 0,
                    arc: 0,
                    arcdurability: 0,
                    arlok: 0,
                    armor: 0,
                    armordurability: 0,
                    armormonster: 0,
                    as: 0,
                    atm: 0,
                    //autolevelup: true,
                    axe: 0,
                    axedurability: 0,
                    ayam: 0,
                    ayamb: 0,
                    ayambakar: 0,
                    ayamg: 0,
                    ayamgoreng: 0,
                    babi: 0,
                    babihutan: 0,
                    babipanggang: 0,
                    bandage: 0,
                    bank: 0,
                    banned: false,
                    BannedReason: '',
                    Banneduser: false,
                    banteng: 0,
                    batu: 0,
                    bawal: 0,
                    bawalbakar: 0,
                    bayam: 0,
                    berlian: 10,
                    bibitanggur: 0,
                    bibitapel: 0,
                    bibitjeruk: 0,
                    bibitmangga: 0,
                    bibitpisang: 0,
                    botol: 0,
                    bow: 0,
                    bowdurability: 0,
                    boxs: 0,
                    brick: 0,
                    brokoli: 0,
                    buaya: 0,
                    buntal: 0,
                    cat: 0,
                    catlastfeed: 0,
                    catngexp: 0,
                    centaur: 0,
                    centaurexp: 0,
                    centaurlastclaim: 0,
                    centaurlastfeed: 0,
                    clay: 0,
                    coal: 0,
                    coin: 0,
                    common: 0,
                    crystal: 0,
                    cumi: 0,
                    cupon: 0,
                    diamond: 3,
                    dog: 0,
                    dogexp: 0,
                    doglastfeed: 0,
                    dory: 0,
                    dragon: 0,
                    dragonexp: 0,
                    dragonlastfeed: 0,
                    emas: 0,
                    emerald: 0,
                    esteh: 0,
                    exp: 0,
                    expg: 0,
                    exphero: 0,
                    expired: 0,
		    eleksirb: 0,
		    emasbatang: 0,
		    emasbiasa: 0,
		    fideos: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    fortress: 0,
                    fox: 0,
                    foxexp: 0,
                    foxlastfeed: 0,
                    fullatm: 0,
                    gadodado: 0,
                    gajah: 0,
                    gamemines: false,
                    ganja: 0,
                    gardenboxs: 0,
                    gems: 0,
                    glass: 0,
                    gold: 0,
                    griffin: 0,
                    griffinexp: 0,
                    griffinlastclaim: 0,
                    griffinlastfeed: 0,
                    gulai: 0,
                    gurita: 0,
		    halloween: 0,
                    harimau: 0,
                    haus: 100,
                    healt: 100,
                    health: 100,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 0,
                    hiu: 0,
                    horse: 0,
                    horseexp: 0,
                    horselastfeed: 0,
                    ikan: 0,
                    ikanbakar: 0,
                    intelligence: 10,
                    iron: 0,
                    jagung: 0,
                    jagungbakar: 0,
                    jeruk: 0,
                    job: 'Pengangguran',
		    joincount: 1,
                    joinlimit: 1,
                    judilast: 0,
                    kaleng: 0,
                    kambing: 0,
                    kangkung: 0,
                    kapak: 0,
                    kardus: 0,
                    katana: 0,
                    katanadurability: 0,
                    kayu: 0,
                    kentang: 0,
                    kentanggoreng: 0,
                    kepiting: 0,
                    kepitingbakar: 0,
                    kerbau: 0,
                    kerjadelapan: 0,
                    kerjadelapanbelas: 0,
                    kerjadua: 0,
                    kerjaduabelas: 0,
                    kerjaduadelapan: 0,
                    kerjaduadua: 0,
                    kerjaduaempat: 0,
                    kerjaduaenam: 0,
                    kerjadualima: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduasembilan: 0,
                    kerjaduatiga: 0,
                    kerjaduatujuh: 0,
                    kerjaempat: 0,
                    kerjaempatbelas: 0,
                    kerjaenam: 0,
                    kerjaenambelas: 0,
                    kerjalima: 0,
                    kerjalimabelas: 0,
                    kerjasatu: 0,
                    kerjasebelas: 0,
                    kerjasembilan: 0,
                    kerjasembilanbelas: 0,
                    kerjasepuluh: 0,
                    kerjatiga: 0,
                    kerjatigabelas: 0,
                    kerjatigapuluh: 0,
                    kerjatujuh: 0,
                    kerjatujuhbelas: 0,
                    korbanngocok: 0,
                    kubis: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    kumba: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    labu: 0,
                    laper: 100,
                    lastadventure: 0,
                    lastberbru: 0,
                    lastberkebon: 0,
                    lastbunga: 0,
                    lastbunuhi: 0,
		    lastcoins: 0,
                    lastclaim: 0,
                    lastcode: 0,
		    lastcofre: 0,
                    lastcrusade: 0,
                    lastdaang: 0,
                    lastdagang: 0,
		    lastdiamantes: 0,
                    lastduel: 0,
                    lastdungeon: 0,
                    lasteasy: 0,
                    lastfight: 0,
                    lastfishing: 0,
                    lastgojek: 0,
                    lastgrab: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastjb: 0,
                    lastkill: 0,
                    lastlink: 0,
                    lastlumber: 0,
                    lastmancingeasy: 0,
                    lastmancingextreme: 0,
                    lastmancinghard: 0,
                    lastmancingnormal: 0,
                    lastmining: 0,
                    lastmisi: 0,
                    lastmonthly: 0,
                    lastmulung: 0,
                    lastnambang: 0,
                    lastnebang: 0,
                    lastngocok: 0,
                    lastngojek: 0,
                    lastopen: 0,
                    lastpekerjaan: 0,
		    lastpago: 0,
                    lastpotionclaim: 0,
                    lastramuanclaim: 0,
                    lastrob: 0,
                    lastroket: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastturu: 0,
                    lastwarpet: 0,
                    lastweaponclaim: 0,
                    lastweekly: 0,
                    lastwork: 0,
                    lbars: '[▒▒▒▒▒▒▒▒▒]',
                    legendary: 0,
                    lele: 0,
                    leleb: 0,
                    lelebakar: 0,
                    leleg: 0,
                    level: 0,
                    limit: 15,
                    limitjoinfree: 1,
                    lion: 0,
                    lionexp: 0,
                    lionlastfeed: 0,
                    lobster: 0,
                    lumba: 0,
                    magicwand: 0,
                    magicwanddurability: 0,
                    makanan: 0,
                    makanancentaur: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanannaga: 0,
                    makananpet: 0,
                    makananphonix: 0,
                    makananserigala: 0,
                    mana: 0,
                    mangga: 0,
                    misi: '',
                    money: 150,
                    monyet: 0,
                    mythic: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    name: m.name,
                    net: 0,
                    nila: 0,
                    nilabakar: 0,
                    note: 0,
                    ojekk: 0,
                    oporayam: 0,
                    orca: 0,
                    pancingan: 1,
                    panda: 0,
                    pasangan: '',
                    paus: 0,
                    pausbakar: 0,
                    pc: 0,
                    pepesikan: 0,
                    pet: 0,
                    phonix: 0,
                    phonixexp: 0,
                    phonixlastclaim: 0,
                    phonixlastfeed: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    pillhero: 0,
                    pisang: 0,
                    pointxp: 0,
                    potion: 10,
                    premium: false,
                    premiumTime: 0,
                    ramuan: 0,
                    ramuancentaurlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,
                    ramuankucinglast: 0,
                    ramuankudalast: 0,
                    ramuankyubilast: 0,
                    ramuannagalast: 0,
                    ramuanphonixlast: 0,
                    ramuanrubahlast: 0,
                    ramuanserigalalast: 0,
                    registered: false,
		    registroR: false,
		    registroC: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 0,
                    rhinoceros: 0,
                    rhinocerosexp: 0,
                    rhinoceroslastfeed: 0,
                    rock: 0,
                    roket: 0,
                    role: 'Novato',
                    roti: 0,
                    rtrofi: 'bronce',
                    rubah: 0,
                    rubahlastclaim: 0,
                    rumahsakit: 0,
                    sampah: 0,
                    sand: 0,
                    sapi: 0,
                    sapir: 0,
                    seedbayam: 0,
                    seedbrokoli: 0,
                    seedjagung: 0,
                    seedkangkung: 0,
                    seedkentang: 0,
                    seedkubis: 0,
                    seedlabu: 0,
                    seedtomat: 0,
                    seedwortel: 0,
                    semangka: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    sewa: false,
                    shield: 0,
                    skill: '',
                    skillexp: 0,
                    snlast: 0,
                    soda: 0,
                    sop: 0,
                    spammer: 0,
                    spinlast: 0,
                    ssapi: 0,
                    stamina: 100,
                    steak: 0,
                    stick: 0,
                    strength: 30,
                    string: 0,
                    stroberi: 0,
                    superior: 0,
                    suplabu: 0,
                    sushi: 0,
                    sword: 0,
                    sworddurability: 0,
                    tigame: 50,
                    tiketcoin: 0,
                    title: '',
                    tomat: 0,
                    tprem: 0,
                    trash: 0,
                    trofi: 0,
                    troopcamp: 0,
                    tumiskangkung: 0,
                    udang: 0,
                    udangbakar: 0,
                    umpan: 0,
                    uncoommon: 0,
                    unreglast: 0,
                    upgrader: 0,
                    vodka: 0,
                    wallet: 0,
                    warn: 0,
                    weapon: 0,
                    weapondurability: 0,
                    wolf: 0,
                    wolfexp: 0,
                    wolflastfeed: 0,
                    wood: 0,
                    wortel: 0,	
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
		
            if (chat) {
                if (!('isBanned' in chat)) chat.isBanned = false                    
                if (!('welcome' in chat)) chat.welcome = true                    
                if (!('detect' in chat)) chat.detect = true                    
                if (!('sWelcome' in chat)) chat.sWelcome = ''                    
                if (!('sBye' in chat)) chat.sBye = ''                    
                if (!('sPromote' in chat)) chat.sPromote = ''                    
                if (!('sDemote' in chat)) chat.sDemote = ''                    
                if (!('delete' in chat))
                    chat.delete = true                    
                if (!('modohorny' in chat)) chat.modohorny = false                    
                if (!('stickers' in chat)) chat.stickers = false                    
                if (!('autosticker' in chat)) chat.autosticker = false                      
                if (!('audios' in chat)) chat.audios = false                     
		if (!('antiver' in chat)) chat.antiver = true                    
                if (!('antiLink' in chat)) chat.antiLink = false                    
                if (!('antiLink2' in chat)) chat.antiLink2 = false
		if (!('antiTiktok' in chat)) chat.antiTiktok = false
		if (!('antiYoutube' in chat)) chat.antiYoutube = false
		if (!('antiTelegram' in chat)) chat.antiTelegram = false
		if (!('antiFacebook' in chat)) chat.antiFacebook = false
		if (!('antiInstagram' in chat)) chat.antiInstagram = false
		if (!('antiTwitter' in chat)) chat.antiInstagram = false
		if (!('antifake' in chat)) chat.antifake = false
		if (!('reaction' in chat)) chat.reaction = true    
                if (!('viewonce' in chat)) chat.viewonce = true         
                if (!('modoadmin' in chat)) chat.modoadmin = false           
                if (!('antitoxic' in chat)) chat.antitoxic = true 
                if (!('simi' in chat)) chat.simi = false
                if (!('antiTraba' in chat)) chat.antiTraba = true
		if (!('autolevelup' in chat))  chat.autolevelup = false
                if (!isNumber(chat.expired)) chat.expired = 0
                    
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '', 
                    delete: true,
                    modohorny: true,
                    stickers: false,
                    autosticker: false,
                    audios: false,
		    antiver: true,
                    antiLink: false,
                    antiLink2: false,
		    antiTiktok: false,
		    antiYoutube: false,
		    antiTelegram: false,
		    antiFacebook: false,
		    antiInstagram: false,
		    antiTwitter: false,
		    antifake: false,
		    reaction: true,
                    viewonce: true,
                    modoadmin: false,
                    antitoxic: true,
                    simi: false,
                    antiTraba: true,
	            autolevelup: false,
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('restrict' in settings)) settings.restrict = false
		if (!('temporal' in settings)) settings.temporal = true
                if (!('antiPrivate' in settings)) settings.antiPrivate = false
		if (!('antiCall' in settings)) settings.antiCall = true
		if (!('antiSpam' in settings)) settings.antiSpam = true
		if (!('jadibotmd' in settings)) settings.jadibotmd = true  
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                restrict: false,
		temporal: true,
		antiPrivate: false,
		antiCall: true,
		antiSpam: true,
		jadibotmd: true,
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        //const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0

       /* if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        } */
        
        if (opts['queque'] && m.text && !m.fromMe && !(isMods || isPrems)) {
            const id = m.id
            this.msgqueque.add(id)
            await this.msgqueque.waitQueue(id)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false
		
		//if (text) {
		//m.reply('*ERROR DE COMANDO*')}

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }

               let hl = _prefix 
                let adminMode = global.db.data.chats[m.chat].modoadmin
                let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
                if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) return   

               if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }

                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10 // Ganancia de XP por comando
                if (xp > 2000)
                    m.reply('Exp limit') // Hehehe
                else               
                if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {
                    this.reply(m.chat, `🐈 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎`, m)
                    continue     
		}
			
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `${lenguajeGB['smsCont7']()} *${usedPrefix}buy*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `${lenguajeGB['smsCont9']()} *${plugin.level}* ${lenguajeGB['smsCont10']()} *${_user.level}* ${lenguajeGB['smsCont11']()} *${usedPrefix}nivel*`, m)
		    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                        m.money = m.money || plugin.money || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + lenguajeGB.smsCont8())
                }
                 if (m.money)
                        m.reply(+m.money + ' 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🐱 𝙐𝙎𝘼𝘿𝙊(𝙎)')
              
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
                user.money -= m.money * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            //await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
		
	await this.readMessages([m.key])
	    
        if (!db.data.chats[m.chat].reaction && m.isGroup) throw 0
        if (!m.fromMem && m.text.match(/(ata|des|able|izo|ido|.-.|._.|:)|:(|:v|v:|o.o|;v|v;|v':|:'v)/gi)) {
        let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "🤝", "💪", "👑", "😚", "🐱", "🐈", "🐆", "🐅", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🎈", "🪄", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "💘", "💝", "💟", "🌝", "😎", "🔥", "🖕", "🐦"])
        this.sendMessage(m.chat, { react: { text: emot, key: m.key }})}
        function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
		
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
	case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = './src/sinfoto.jpg'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || lenguajeGB.smsCont12()) :
                            (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', await this.getName(user)) //.replace('@user', '@' + user.split('@')[0])
                            let apii = await this.getFile(pp)
//this.sendButton(id, wm, text, apii.data, [[(action == 'add' ? lenguajeGB.smsCont13() : lenguajeGB.smsCont14()), (action == 'add' ? '.welgc' : '.welgc')], ['💖 Ser Verificado(a)', `.verify`]], null, {mentions: this.parseMention(text)})
//}}}
			    
//CÓDIGO OFUSCADO - MOTIVOS RESERVADOS >> (DIEGO-OFC)			
var _0x27174a=_0x245b;function _0x245b(_0x5ba6cf,_0x116611){var _0x129eef=_0x129e();return _0x245b=function(_0x245bb0,_0x7a0c7f){_0x245bb0=_0x245bb0-0x17d;var _0x5a3d9e=_0x129eef[_0x245bb0];return _0x5a3d9e;},_0x245b(_0x5ba6cf,_0x116611);}function _0x129e(){var _0xd79927=['add','33fxBeyP','🌟\x20𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔\x20𝗗𝗘𝗟\x20𝗚𝗥𝗨𝗣𝗢!!\x20🌟','https://wa.me/18059196237','*:･ﾟ★,｡:｡:･ﾟ☆｡･:｡:･ﾟ★･ﾟ｡:｡:･ﾟ☆:･ﾟ*','16bioDUd','90560wOKftO','data','610896zNDtNW','.menu','2064neToif','5507784aMSEdW','getRandom','10KnWKrq','parseMention','smsCont13','2181762fhNpQI','.verify','smsCont14','10qOOcOK','9751PpKawr','3069783wBkFZj','214452ZfbkVq'];_0x129e=function(){return _0xd79927;};return _0x129e();}(function(_0x2dc98e,_0x5b154a){var _0x402f07=_0x245b,_0x315e18=_0x2dc98e();while(!![]){try{var _0x197cb1=parseInt(_0x402f07(0x191))/0x1*(parseInt(_0x402f07(0x192))/0x2)+-parseInt(_0x402f07(0x17d))/0x3+parseInt(_0x402f07(0x18b))/0x4+-parseInt(_0x402f07(0x188))/0x5*(parseInt(_0x402f07(0x185))/0x6)+-parseInt(_0x402f07(0x189))/0x7*(parseInt(_0x402f07(0x17f))/0x8)+-parseInt(_0x402f07(0x18a))/0x9*(parseInt(_0x402f07(0x182))/0xa)+-parseInt(_0x402f07(0x18d))/0xb*(-parseInt(_0x402f07(0x180))/0xc);if(_0x197cb1===_0x5b154a)break;else _0x315e18['push'](_0x315e18['shift']());}catch(_0x5e2717){_0x315e18['push'](_0x315e18['shift']());}}}(_0x129e,0x7fd98),this['sendButton'](id,_0x27174a(0x190),text,apii[_0x27174a(0x193)],[[action==_0x27174a(0x18c)?lenguajeGB[_0x27174a(0x184)]():lenguajeGB[_0x27174a(0x187)](),action==_0x27174a(0x18c)?_0x27174a(0x17e):_0x27174a(0x17e)],['💖\x20SER\x20VERIFICADO(A)',_0x27174a(0x186)]],null,{'mentions':this[_0x27174a(0x183)](text),'document':{'url':_0x27174a(0x18f)},'mimetype':global['dpdf'],'fileName':'😻\x20𝗦𝘂𝗽𝗲𝗿\x20𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗\x20😻','fileLength':0x38d7ea4c67fff,'pageCount':0x3e7,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':welgata[_0x27174a(0x181)](),'title':action=='add'?_0x27174a(0x18e):'🙀\x20𝗦𝗘\x20𝗥𝗘𝗧𝗜𝗥𝗔\x20𝗗𝗘𝗟\x20𝗚𝗥𝗨𝗣𝗢!!\x20🙀','body':welgata['getRandom'](),'sourceUrl':md,'thumbnail':apii[_0x27174a(0x193)]}}})) }}};
			    
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function callUpdate(callUpdate) {
    let isAnticall = global.db.data.settings[this.user.jid].antiCall  
    if (!isAnticall) return
    for (let nk of callUpdate) { 
    if (nk.isGroup == false) {
    if (nk.status == "offer") {
    let callmsg = await this.reply(nk.from, `${lenguajeGB['smsCont15']()} *@${nk.from.split('@')[0]}*, ${nk.isVideo ? lenguajeGB.smsCont16() : lenguajeGB.smsCont17()} ${lenguajeGB['smsCont18']()}`, false, { mentions: [nk.from] })
    //let data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
    await this.updateBlockStatus(nk.from, 'block')
    }}}}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
╭━─━─━─≪🔴≫─━─━─━╮
│ 🤨 ʙᴏʀʀᴏ ᴜɴ ᴍᴇɴsᴀᴊᴇ 🤨
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│ 🔴 ᴀɴᴛɪ ᴅᴇʟᴇᴛᴇ 🔴
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│🔸️ *ɴᴏᴍʙʀᴇ :* @${participant.split`@`[0]} 
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│🔸ᴘᴀʀᴀ ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ, 
│🔸️ᴇsᴄʀɪʙɪ 
│/off antidelete
│#enable delete
╰━─━─━─≪🔴≫─━─━─━╯
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
let msg = {
        rowner: lenguajeGB['smsRowner'](),
        owner: lenguajeGB['smsOwner'](),
        mods: lenguajeGB['smsMods'](),
        premium: lenguajeGB['smsPremium'](),
	group: lenguajeGB['smsGroup'](),
        private: lenguajeGB['smsPrivate'](),
        admin: lenguajeGB['smsAdmin'](),
	botAdmin: lenguajeGB['smsBotAdmin'](),
        unreg: lenguajeGB['smsUnreg'](),
        restrict: lenguajeGB['smsRestrict'](),
}[type]
//if (msg) return m.reply(msg)
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: msg, contextInfo: { externalAdReply: { title: lenguajeGB.smsAvisoAG().slice(0,-2), body: [wm, '😻 𝗦𝘂𝗽𝗲𝗿 ' + gt + ' 😻', '🌟 centergatabot.gmail.com'].getRandom(), thumbnail: gataImg.getRandom(), sourceUrl: [md, yt, ig, paypal, fb].getRandom() }}}}, tg)
if (msg) return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
