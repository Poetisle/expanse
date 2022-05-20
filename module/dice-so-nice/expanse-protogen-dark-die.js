export class TheExpanseProtogenDark extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "g";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/protogen/protogen-1-dark.webp" />',
            "2": '<img src="systems/expanse/ui/dice/protogen/protogen-2-dark.webp" />',
            "3": '<img src="systems/expanse/ui/dice/protogen/protogen-3-dark.webp" />',
            "4": '<img src="systems/expanse/ui/dice/protogen/protogen-4-dark.webp" />',
            "5": '<img src="systems/expanse/ui/dice/protogen/protogen-5-dark.webp" />',
            "6": '<img src="systems/expanse/ui/dice/protogen/protogen-6-dark.webp" />'
        }[result.result];
    }
}