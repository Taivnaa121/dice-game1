var _0x13bc=['getElementById','.btn-new','toggle','current-','.player-1-panel','score-','click','active','remove','.btn-roll','score-1','current-0','style','floor','WINNER\x20!!!','src','name-','name-1','none','Player\x202','addEventListener','winner','classList','.btn-hold','textContent','add','.dice','display','-р\x20тоглогч\x20хожсон\x20NewGame-ийг\x20дарна\x20уу','-panel','.player-0-panel','querySelector','current-1','.player-','Тоглоом\x20дууссан\x20','dice-','block'];(function(_0x51d588,_0x56395e){var _0x13bcc3=function(_0x2d8a6a){while(--_0x2d8a6a){_0x51d588['push'](_0x51d588['shift']());}};_0x13bcc3(++_0x56395e);}(_0x13bc,0xe1));var _0x2d8a=function(_0x51d588,_0x56395e){_0x51d588=_0x51d588-0xdc;var _0x13bcc3=_0x13bc[_0x51d588];return _0x13bcc3;};var _0x2e814e=_0x2d8a,diceDom=document[_0x2e814e(0xf8)](_0x2e814e(0xf3)),activePlayer,isGameOver,scores,roundScore;initGame();function initGame(){var _0x18426d=_0x2e814e;isGameOver=![],activePlayer=0x0,scores=[0x0,0x0],roundScore=0x0,document[_0x18426d(0xfe)]('score-0')['textContent']=0x0,document[_0x18426d(0xfe)](_0x18426d(0xe3))[_0x18426d(0xf1)]=0x0,document[_0x18426d(0xfe)](_0x18426d(0xe4))[_0x18426d(0xf1)]=0x0,document[_0x18426d(0xfe)](_0x18426d(0xf9))[_0x18426d(0xf1)]=0x0,diceDom['style']['display']=_0x18426d(0xeb),document[_0x18426d(0xfe)]('name-0')['textContent']='Player\x201',document[_0x18426d(0xfe)](_0x18426d(0xea))[_0x18426d(0xf1)]=_0x18426d(0xec),document[_0x18426d(0xf8)](_0x18426d(0xf7))[_0x18426d(0xef)][_0x18426d(0xe1)](_0x18426d(0xee)),document['querySelector']('.player-1-panel')[_0x18426d(0xef)][_0x18426d(0xe1)](_0x18426d(0xee)),document[_0x18426d(0xf8)](_0x18426d(0xf7))[_0x18426d(0xef)][_0x18426d(0xe1)](_0x18426d(0xe0)),document[_0x18426d(0xf8)](_0x18426d(0xdd))[_0x18426d(0xef)][_0x18426d(0xe1)](_0x18426d(0xe0)),document[_0x18426d(0xf8)](_0x18426d(0xf7))['classList'][_0x18426d(0xf2)](_0x18426d(0xe0));}solih=function(){var _0x3f536e=_0x2e814e;roundScore=0x0,document[_0x3f536e(0xfe)](_0x3f536e(0xdc)+activePlayer)[_0x3f536e(0xf1)]=0x0,activePlayer==0x0?activePlayer=0x1:activePlayer=0x0,document[_0x3f536e(0xf8)]('.player-0-panel')[_0x3f536e(0xef)]['toggle'](_0x3f536e(0xe0)),document[_0x3f536e(0xf8)](_0x3f536e(0xdd))[_0x3f536e(0xef)][_0x3f536e(0x100)](_0x3f536e(0xe0)),diceDom[_0x3f536e(0xe5)][_0x3f536e(0xf4)]=_0x3f536e(0xeb);},document[_0x2e814e(0xf8)](_0x2e814e(0xe2))[_0x2e814e(0xed)](_0x2e814e(0xdf),function(){var _0x11c3e2=_0x2e814e;if(isGameOver==![]){var _0x450acc=Math[_0x11c3e2(0xe6)](Math['random']()*0x6)+0x1;diceDom[_0x11c3e2(0xe5)][_0x11c3e2(0xf4)]=_0x11c3e2(0xfd),diceDom[_0x11c3e2(0xe8)]=_0x11c3e2(0xfc)+_0x450acc+'.png',_0x450acc!=0x1?(roundScore=roundScore+_0x450acc,document[_0x11c3e2(0xfe)](_0x11c3e2(0xdc)+activePlayer)['textContent']=roundScore):solih();}else alert(_0x11c3e2(0xfb)+(activePlayer+0x1)+_0x11c3e2(0xf5));}),document[_0x2e814e(0xf8)](_0x2e814e(0xf0))[_0x2e814e(0xed)](_0x2e814e(0xdf),function(){var _0x2602b6=_0x2e814e;isGameOver==![]?(scores[activePlayer]+=roundScore,document[_0x2602b6(0xfe)](_0x2602b6(0xde)+activePlayer)[_0x2602b6(0xf1)]=scores[activePlayer],scores[activePlayer]>=0x64?(isGameOver=!![],document[_0x2602b6(0xfe)](_0x2602b6(0xe9)+activePlayer)['textContent']=_0x2602b6(0xe7),document[_0x2602b6(0xf8)]('.player-'+activePlayer+_0x2602b6(0xf6))[_0x2602b6(0xef)][_0x2602b6(0xf2)](_0x2602b6(0xee)),document['querySelector'](_0x2602b6(0xfa)+activePlayer+_0x2602b6(0xf6))[_0x2602b6(0xef)]['remove'](_0x2602b6(0xe0))):solih()):alert(_0x2602b6(0xfb)+(activePlayer+0x1)+_0x2602b6(0xf5));}),document['querySelector'](_0x2e814e(0xff))[_0x2e814e(0xed)](_0x2e814e(0xdf),initGame);