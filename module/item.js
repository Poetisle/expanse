/**
 * Extend the base Item entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Item}
 */

export class ExpanseItem extends Item {

    _preCreate() {
        const data = this.data;
        const path = "systems/expanse/ui/item-img/"
        if (data.type === "armor") {
            data.update({ img: `${path}item-armor.webp` })
        } else if (data.type === "shield") {
            data.update({ img: `${path}item-shield.webp` })
        } else if (data.type === "talent") {
            data.update({ img: `${path}talent-tablet.webp` })
        } else if (data.type === "stunt") {
            data.update({ img: `${path}stunt.webp` })
        }
    }

    _onUpdate(changed, options, userId) {
        const data = this.data;
        const path = "systems/expanse/ui/item-img/"
        if (data.type === "weapon") {
            if (data.data.type === "pistol") {
                this.update({ img: `${path}item-pistol.webp` })
            } else if (data.data.type === "rifle") {
                this.update({ img: `${path}item-rifle1.webp` })
            } else if (data.data.type === "light_melee") {
                this.update({ img: `${path}item-light_melee.webp` })
            } else if (data.data.type === "heavy_melee") {
                this.update({ img: `${path}item-heavy_melee.webp` })
            } else if (data.data.type === "makeshift") {
                this.update({ img: `${path}item-makeshift1.webp` })
            } else if (data.data.type === "grenade") {
                this.update({ img: `${path}item-grenade.webp` })
            } else if (data.data.type === "unarmed") {
                this.update({ img: `${path}item-unarmed.webp` })
            }
        }

        if (data.type === "talent" && data.data.specialization === true) {
            this.update({ img: `${path}talent-book.webp` })
        }
        
        if (data.type === "talent" && data.data.specialization === false) {
            this.update({ img: `${path}talent-tablet.webp` })
        }

        if (data.type === "stunt") {
            this.update({ img: `${path}stunt.webp` })
        }
    }
}
