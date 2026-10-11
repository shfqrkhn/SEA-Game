"""The six mission vehicles (MPES §11 stems) and the loadout each hero still shows."""
from .vehicles import hull8

VEHICLES = {
    'combat': lambda mats: hull8.build(mats, 'COMBAT'),
    'recce': lambda mats: hull8.build(mats, 'RECCE'),
    'troop-carrier': lambda mats: hull8.build(mats, 'TROOP'),
    'command-post': lambda mats: hull8.build(mats, 'COMMAND'),
    'recovery': lambda mats: hull8.build(mats, 'RECOVERY'),
    'mine-clearing': lambda mats: hull8.build(mats, 'MINE'),
}

# One part per slot that suits the mission, so each hero still reads as that mission's vehicle.
HERO = {
    'combat': ('FP-C', 'PRO-A', 'SA-A', 'COM-A'),
    'recce': ('SA-D', 'COM-B', 'FP-D', 'MOB-C'),
    'troop-carrier': ('CAP-E', 'FP-A', 'PRO-E', 'COM-A'),
    'command-post': ('COM-D', 'SA-B', 'COM-B', 'ACC-G'),
    'recovery': ('CAP-B', 'COM-E', 'ACC-F'),
    'mine-clearing': ('ACC-C', 'PRO-F', 'SA-E', 'FP-D'),
}
