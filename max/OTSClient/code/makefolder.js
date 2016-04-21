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
	var new_folder = "u" + timestamp;
	outlet(0, "shell", "mkdir " + root_folder + "/" + new_folder);
	outlet(0, "new_folder", new_folder); 
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

function move_folder(src, dst) {
	if (root_folder === undefined) {
		post("Must set root folder first\n");
		return;
	}
	
	outlet("shell", "mv -r " + src + " " + dst);
}