var root_folder = undefined;

function set_root_folder(root) {
	root_folder = root;
}

function make_new_folder() {
	if (root_folder === undefined) {
		post("Must set root folder first\n");
		return;
	}
	
	var timestamp = Date.now();
	outlet(0, "shell", "mkdir " + root_folder + "/u" + timestamp);
}

function random_folder() {
	if (root_folder === undefined) {
		post("Must set root folder first\n");
		return;
	}
	
	outlet(0, "random", "ls " + root_folder + " -tr");
}

function most_recent_folder() {
	if (root_folder === undefined) {
		post("Must set root folder first\n");
		return;
	}
	
	outlet(0, "most_recent", "ls " + root_folder + " -tr | tail -1");
}