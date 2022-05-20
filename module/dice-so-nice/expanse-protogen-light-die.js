export class TheExpanseProtogenLight extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "h";

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="systems/expanse/ui/dice/protogen/protogen-1-light.webp" />',
            "2": '<img src="systems/expanse/ui/dice/protogen/protogen-2-light.webp" />',
            "3": '<img src="systems/expanse/ui/dice/protogen/protogen-3-light.webp" />',
            "4": '<img src="systems/expanse/ui/dice/protogen/protogen-4-light.webp" />',
            "5": '<img src="systems/expanse/ui/dice/protogen/protogen-5-light.webp" />',
            "6": '<img src="systems/expanse/ui/dice/protogen/protogen-6-light.webp" />'
        }[result.result];
    }
}