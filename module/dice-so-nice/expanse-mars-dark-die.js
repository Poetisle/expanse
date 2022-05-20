export class TheExpanseMarsDark extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "c";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/mars/mars-1-dark.webp" />',
            "2": '<img src="systems/expanse/ui/dice/mars/mars-2-dark.webp" />',
            "3": '<img src="systems/expanse/ui/dice/mars/mars-3-dark.webp" />',
            "4": '<img src="systems/expanse/ui/dice/mars/mars-4-dark.webp" />',
            "5": '<img src="systems/expanse/ui/dice/mars/mars-5-dark.webp" />',
            "6": '<img src="systems/expanse/ui/dice/mars/mars-6-dark.webp" />'
        }[result.result];
    }
}