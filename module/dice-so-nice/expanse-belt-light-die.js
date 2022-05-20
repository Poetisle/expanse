export class TheExpanseBeltLight extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "r";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/belt/belt-1-light.webp" />',
            "2": '<img src="systems/expanse/ui/dice/belt/belt-2-light.webp" />',
            "3": '<img src="systems/expanse/ui/dice/belt/belt-3-light.webp" />',
            "4": '<img src="systems/expanse/ui/dice/belt/belt-4-light.webp" />',
            "5": '<img src="systems/expanse/ui/dice/belt/belt-5-light.webp" />',
            "6": '<img src="systems/expanse/ui/dice/belt/belt-6-light.webp" />'
        }[result.result];
    }
}