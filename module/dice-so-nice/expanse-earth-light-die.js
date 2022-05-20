export class TheExpanseEarthLight extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "l";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/earth/earth-1-light.webp" />',
            "2": '<img src="systems/expanse/ui/dice/earth/earth-2-light.webp" />',
            "3": '<img src="systems/expanse/ui/dice/earth/earth-3-light.webp" />',
            "4": '<img src="systems/expanse/ui/dice/earth/earth-4-light.webp" />',
            "5": '<img src="systems/expanse/ui/dice/earth/earth-5-light.webp" />',
            "6": '<img src="systems/expanse/ui/dice/earth/earth-6-light.webp" />'
        }[result.result];
    }
}