export class TheExpanseBeltDark extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "e";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/belt/belt-1-dark.webp" />',
            "2": '<img src="systems/expanse/ui/dice/belt/belt-2-dark.webp" />',
            "3": '<img src="systems/expanse/ui/dice/belt/belt-3-dark.webp" />',
            "4": '<img src="systems/expanse/ui/dice/belt/belt-4-dark.webp" />',
            "5": '<img src="systems/expanse/ui/dice/belt/belt-5-dark.webp" />',
            "6": '<img src="systems/expanse/ui/dice/belt/belt-6-dark.webp" />'
        }[result.result];
    }
}