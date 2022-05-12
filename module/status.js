export const expanseStatus = {};

expanseStatus.statusEffects = [
    {
        icon: 'icons/svg/eye.svg',
        id: 'blinded',
        label: 'Blind',
        name: 'Blind',
        changes: [
            {
                key: 'data.conditions.blinded.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'icons/svg/fire.svg',
        id: 'burning',
        label: 'Burning',
        name: 'Burning'
    },
    {
        icon: 'icons/svg/deaf.svg',
        id: 'deafened',
        label: 'Deaf',
        name: 'Deaf',
        changes: [
            {
                key: 'data.conditions.deafened.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'icons/svg/skull.svg',
        id: 'dead',
        label: 'Dead',
        name: 'Dead'
    },
    // TODO: This should do Constitution damage per round. So it needs to use EffectDurationData and a custom stat change.
    {
        icon: 'icons/svg/blood.svg',
        id: 'dying',
        label: 'Dying',
        name: 'Dying',
        changes: [
            {
                key: 'data.conditions.dying.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'systems/expanse/ui/status-img/exhausted-man.svg',
        id: 'exhausted',
        label: 'Exhausted',
        name: 'Exhausted',
        changes: [     {
            key: 'data.conditions.exhausted.active',
            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
            value: 'true'
        },
            {
                key: 'data.attributes.speed.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
                value: '0.5'
            },
            {
                key: 'data.attributes.move.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
                value: '0.5'
            },
            {
                key: 'data.attributes.run.modified ',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            }
        ]
    },
    {
        icon: 'icons/svg/downgrade.svg',
        id: 'fatigued',
        label: 'Fatigued',
        name: 'Fatigued',
        changes: [
            {
                key: 'data.conditions.fatigued.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'systems/expanse/ui/status-img/astronaut.svg',
        id: 'freefall',
        label: 'FreeFalling',
        name: 'Free Falling',
        changes: [
            {
                key: 'data.conditions.freefall.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'icons/svg/frozen.svg',
        id: 'freezing',
        label: 'Freezing',
        name: 'Freezing'
    },
    {
        icon: 'icons/svg/paralysis.svg',
        id: 'helpless',
        label: 'Helpless',
        name: 'Helpless',
        changes: [
            {
                key: 'data.conditions.helpless.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.move.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            },
            {
                key: 'data.attributes.run.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            }
    ]
    },
{
    icon: 'systems/expanse/ui/status-img/weight.svg',
        id: 'hindered',
    label: 'Hindered',
    name: 'Hindered',
    changes: [     {
                key: 'data.conditions.hindered.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.speed.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
                value: '0.5'
            },
            {
                key: 'data.attributes.move.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
                value: '0.5'
            },
            {
                key: 'data.attributes.run.modified ',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            }
        ]
    },
    {
        icon: 'systems/expanse/ui/status-img/band-aid.svg',
        id: 'injured',
        label: 'Injured',
        name: 'Injured',
        changes: [
            {
                key: 'data.conditions.injured.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.woundpenalty',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '-1'
            }
        ]
    },
    {
        icon: 'icons/svg/radiation.svg',
        id: 'irradiated',
        label: 'Irradiated',
        name: 'irradiated'
    },
    {
        icon: 'icons/svg/falling.svg',
        id: 'prone',
        label: 'Prone',
        name: 'Prone',
        changes: [
            {
                key: 'data.conditions.prone.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            }
        ]
    },
    {
        icon: 'systems/expanse/ui/status-img/handcuffs.svg',
        id: 'restrained',
        label: 'Restrained',
        name: 'Restrained',
        changes: [
            {
                key: 'data.conditions.restrained.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.speed.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            },
            {
                key: 'data.attributes.move.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            },
            {
                key: 'data.attributes.run.modified ',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            }
        ]
    },
    {
        icon: 'icons/svg/daze.svg',
        id: 'unconscious',
        label: 'Unconscious',
        name: 'Unconscious',
        changes: [
            {
                key: 'data.conditions.unconscious.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.speed.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            },
            {
                key: 'data.attributes.move.modified',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '0'
            },
            {
                key: 'data.attributes.run.modified ',
                mode: CONST.ACTIVE_EFFECT_MODES.MODIFY,
                value: '0'
            }
        ]
    },
    {
        icon: 'systems/expanse/ui/status-img/broken-leg.svg',
        id: 'wounded',
        label: 'Wounded',
        name: 'Wounded',
        changes: [
            {
                key: 'data.conditions.wounded.active',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: 'true'
            },
            {
                key: 'data.attributes.woundpenalty',
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: '-2'
            }
        ]
    }
]




