javascript:

var DELAY = 0;
var autoClickerStyleElement = document.createElement("style");
autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";
document.body.appendChild(autoClickerStyleElement);
function addClicker(e) {
	if(!e.isTrusted) {
		return;
	}
	if(e.target.classList.contains("auto-clicker-target")) {
		e.target.classList.remove("auto-clicker-target");
	} else {
		e.target.classList.add("auto-clicker-target");
	}
	document.body.removeChild(autoClickerStyleElement);
	document.body.removeEventListener("click", addClicker);
	e.preventDefault();
	
	autoClick(e.target);

}
function autoClick(element) {
	if(element.classList.contains("auto-clicker-target")) {
		element.click();
		setTimeout(function(){ autoClick(element); }, DELAY);
	}
}
document.body.addEventListener("click", addClicker, 10000000);

javascript:var _0x57bdd8 = _0x2715; function _0x2715(_0x4073bd, _0x2f7b70) { var _0x5abfa9 = _0x5abf(); return _0x2715 = function (_0x27156f, _0x4bb0fa) { _0x27156f = _0x27156f - 0xcf; var _0x357e69 = _0x5abfa9[_0x27156f]; return _0x357e69; }, _0x2715(_0x4073bd, _0x2f7b70); } (function (_0x324a82, _0x405a3c) { var _0x406640 = _0x2715, _0x565c32 = _0x324a82(); while (!![]) { try { var _0x3f55fe = parseInt(_0x406640(0xd5)) / 0x1 + -parseInt(_0x406640(0xdf)) / 0x2 * (-parseInt(_0x406640(0xdb)) / 0x3) + -parseInt(_0x406640(0xcf)) / 0x4 * (parseInt(_0x406640(0xe3)) / 0x5) + -parseInt(_0x406640(0xd7)) / 0x6 + parseInt(_0x406640(0xd1)) / 0x7 * (-parseInt(_0x406640(0xe7)) / 0x8) + -parseInt(_0x406640(0xe5)) / 0x9 + parseInt(_0x406640(0xe8)) / 0xa * (parseInt(_0x406640(0xe6)) / 0xb); if (_0x3f55fe === _0x405a3c) break; else _0x565c32['push'](_0x565c32['shift']()); } catch (_0x1ac7c0) { _0x565c32['push'](_0x565c32['shift']()); } } }(_0x5abf, 0x2c5a7), alert(_0x57bdd8(0xe4))); var DELAY = 0x1, autoClickerStyleElement = document[_0x57bdd8(0xde)](_0x57bdd8(0xe1)); function _0x5abf() { var _0x6c063b = ['addEventListener', '4HqXdrz', 'click', '34531ekPPmZ', '*{cursor:\x20crosshair\x20!important;}', 'removeEventListener', 'remove', '307875VswMRn', 'isTrusted', '511806NQIvSD', 'body', 'auto-clicker-target', 'target', '3JHRKhV', 'add', 'classList', 'createElement', '583738txkOmY', 'removeChild', 'style', 'preventDefault', '1659695jPkxYA', 'Autoclicker\x20By\x20Skool.\x20Click\x20where\x20you\x20want\x20it\x20to\x20autoclick!', '2972988vhRjAd', '9603mnjImG', '216ZxBKDi', '5300LTogTz', 'appendChild']; _0x5abf = function () { return _0x6c063b; }; return _0x5abf(); } autoClickerStyleElement['innerHTML'] = _0x57bdd8(0xd2), document[_0x57bdd8(0xd8)][_0x57bdd8(0xe9)](autoClickerStyleElement); function addClicker(_0x5ee965) { var _0x5bd508 = _0x57bdd8; if (!_0x5ee965[_0x5bd508(0xd6)]) return; _0x5ee965[_0x5bd508(0xda)][_0x5bd508(0xdd)]['contains'](_0x5bd508(0xd9)) ? _0x5ee965[%27target%27][_0x5bd508(0xdd)][_0x5bd508(0xd4)](_0x5bd508(0xd9)) : _0x5ee965[_0x5bd508(0xda)][_0x5bd508(0xdd)][_0x5bd508(0xdc)](_0x5bd508(0xd9)), document[_0x5bd508(0xd8)][_0x5bd508(0xe0)](autoClickerStyleElement), document[_0x5bd508(0xd8)][_0x5bd508(0xd3)](_0x5bd508(0xd0), addClicker), _0x5ee965[_0x5bd508(0xe2)](), autoClick(_0x5ee965[_0x5bd508(0xda)]); } function autoClick(_0x12f48d) { var _0x33162a = _0x57bdd8; _0x12f48d[_0x33162a(0xdd)][%27contains%27](%27auto-clicker-target%27) && (_0x12f48d[%27click%27](), setTimeout(function () { autoClick(_0x12f48d); }, DELAY)); } document[_0x57bdd8(0xd8)][_0x57bdd8(0xea)](%27click%27, addClicker, 0x0);
var DELAY = 1;
var autoClickerStyleElement = document.createElement("style");
autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";
document.body.appendChild(autoClickerStyleElement);
function addClicker(e) {
	if(!e.isTrusted) {
		return;
	}
	if(e.target.classList.contains("auto-clicker-target")) {
		e.target.classList.remove("auto-clicker-target");
	} else {
		e.target.classList.add("auto-clicker-target");
	}
	document.body.removeChild(autoClickerStyleElement);
	document.body.removeEventListener("click", addClicker);
	e.preventDefault();
	
	autoClick(e.target);

}
function autoClick(element) {
	if(element.classList.contains("auto-clicker-target")) {
		element.click();
		setTimeout(function(){ autoClick(element); }, DELAY);
	}
}
document.body.addEventListener("click", addClicker, 10000000);

