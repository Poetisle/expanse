export class TheExpanseMarsLight extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "d";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/mars/mars-1-light.webp" />',
            "2": '<img src="systems/expanse/ui/dice/mars/mars-2-light.webp" />',
            "3": '<img src="systems/expanse/ui/dice/mars/mars-3-light.webp" />',
            "4": '<img src="systems/expanse/ui/dice/mars/mars-4-light.webp" />',
            "5": '<img src="systems/expanse/ui/dice/mars/mars-5-light.webp" />',
            "6": '<img src="systems/expanse/ui/dice/mars/mars-6-light.webp" />'
        }[result.result];
    }
}