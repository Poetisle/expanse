export class TheExpanseEarthDark extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "a";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/earth/earth-1-dark.webp" />',
            "2": '<img src="systems/expanse/ui/dice/earth/earth-2-dark.webp" />',
            "3": '<img src="systems/expanse/ui/dice/earth/earth-3-dark.webp" />',
            "4": '<img src="systems/expanse/ui/dice/earth/earth-4-dark.webp" />',
            "5": '<img src="systems/expanse/ui/dice/earth/earth-5-dark.webp" />',
            "6": '<img src="systems/expanse/ui/dice/earth/earth-6-dark.webp" />'
        }[result.result];
    }
}