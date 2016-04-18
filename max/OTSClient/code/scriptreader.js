inlets = 1;
outlets = 1;

var script;
setroot('script.json');

function setroot(path) {
	var scriptFile = new File(path, 'read');
	var s = scriptFile.readstring(20000);
	script = JSON.parse(s);
}

function get_text(idx) {
  outlet(0, 'line', script.lines[idx].text);
}

function get_speaker(idx) {
	if (idx >= script.lines.length) {
		outlet(0, 'done');
		return;
	}
    outlet(0, 'speaker', script.lines[idx].speaker);
}

function get_movie(idx) {
  outlet(0, 'movie', script.lines[idx].movie);
}
