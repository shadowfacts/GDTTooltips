var ShadowTooltips = {};

(function() {
	ShadowTooltips.path = GDT.getRelativePath();

	GameManager.addTickListener(function(a) {
		var company = GameManager.company;
		if (company != null) {
			var character = ShadowGDT.getCharacterUnderCursor();
			if (character != null) {
				var state = character.state;
				
				if (state === CharacterState.Researching) {

					var id = character.currentResearch.id;
					if (Training.isTraining(id)) {

						var name = Training[id].name;
						if (name === "postMortem") {
							VisualsManager.getCharacterOverlay(character).sayStatic("Generating Game Report", 34, -75);
						} else {
							VisualsManager.getCharacterOverlay(character).sayStatic("Training: " + name, 34, -75);
						}

					} else {

						var name = Research.getName(character.currentResearch.id);
						if (typeof name === "undefined") name = character.currentResearch.id;
						var tooltip = "Researching: " + name;
						VisualsManager.getCharacterOverlay(character).sayStatic(tooltip, 4, -65);

					}

				} else if (state === CharacterState.Vacation) {
					
					VisualsManager.getCharacterOverlay(character).sayStatic("On Vacation", -27, -35);

				} else if (state === CharacterState.WorkOnContract) {

					VisualsManager.getCharacterOverlay(character).sayStatic("Contract Work", -27, -35);

				} else if (state === CharacterState.Working) {

					VisualsManager.getCharacterOverlay(character).sayStatic("Working", -27, -35);

				}
			}
		}
	});

})();