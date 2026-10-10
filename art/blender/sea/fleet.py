"""The six mission vehicles (MPES §11 stems) and the loadout each hero still shows."""
from .vehicles import armoured, boxbody, recovery

VEHICLES = {
    'combat': lambda mats: armoured.build(mats, 'COMBAT'),
    'recce': lambda mats: armoured.build(mats, 'RECCE'),
    'troop-carrier': boxbody.build_troop,
    'command-post': boxbody.build_command,
    'recovery': recovery.build,
    'mine-clearing': lambda mats: armoured.build(mats, 'MINE'),
}

# One part per slot that suits the mission, so each hero still reads as that mission's vehicle.
HERO = {
    'combat': ('FP-C', 'PRO-A', 'SA-A', 'COM-A'),
    'recce': ('SA-D', 'COM-B', 'FP-D', 'MOB-C'),
    'troop-carrier': ('CAP-E', 'FP-A', 'PRO-E', 'COM-A'),
    'command-post': ('COM-D', 'SA-B', 'COM-B', 'ACC-G'),
    'recovery': recovery.HERO,
    'mine-clearing': ('ACC-C', 'PRO-F', 'SA-E', 'FP-D'),
}
