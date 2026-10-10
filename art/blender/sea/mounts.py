"""Mount slots (MPES §10.2): where each card's part sits on each vehicle.

Every card belongs to one slot. Parts in different slots never overlap on purpose; when a team installs
two parts in the same slot, the showcase draws the most recently recorded one and lists both. A vehicle
describes its slots with a `Mounts`; part builders read only these fields, so one builder fits all six
vehicles and the compact card mount used for card renders.

Axes: +X forward, -Y is the vehicle's left side (the side the build cameras favour), Z up, ground Z = 0.
"""
from dataclasses import dataclass, field

# Card -> slot. SE_PROCESS cards have no geometry (HUD badges only).
SLOTS = {
    **{f'CAP-{k}': 'module' for k in 'ABCDEFG'},
    'MOB-A': 'powerpack', 'MOB-F': 'powerpack', 'MOB-E': 'tanks',
    'MOB-B': 'running', 'MOB-C': 'running', 'MOB-D': 'running', 'MOB-G': 'running',
    'FP-A': 'weapon', 'FP-B': 'weapon', 'FP-C': 'weapon', 'FP-F': 'weapon', 'FP-G': 'weapon',
    'FP-D': 'aux-weapon', 'FP-E': 'aux-weapon',
    'PRO-A': 'side-armour', 'PRO-C': 'side-armour', 'PRO-E': 'side-armour',
    'PRO-B': 'front-armour', 'PRO-D': 'roof-armour', 'PRO-G': 'roof-armour', 'PRO-F': 'belly',
    'COM-A': 'antenna-left', 'COM-C': 'antenna-left', 'COM-F': 'antenna-left',
    'COM-B': 'antenna-right', 'COM-G': 'antenna-right', 'COM-D': 'radio-mast', 'COM-E': 'radio-mast',
    'SA-A': 'optics', 'SA-C': 'optics', 'SA-E': 'optics', 'SA-B': 'sensor-mast', 'SA-D': 'sensor-mast',
    'SA-F': 'sensor-pods', 'SA-G': 'sensor-pods',
    'ACC-C': 'front-kit', 'ACC-E': 'front-kit', 'ACC-F': 'front-kit',
    'ACC-A': 'rear-kit', 'ACC-B': 'rear-kit', 'ACC-D': 'rack', 'ACC-G': 'rack',
}


@dataclass
class Mounts:
    """Attachment geometry of one vehicle (metres)."""
    front: float                 # x of the front face (bumper)
    back: float                  # x of the rear face
    axles: tuple                 # x of each axle
    wheel_r: float
    track: float                 # y of the wheel centre plane on each side
    tyre_w: float
    deck: tuple                  # (x, z) centre of the module area and its surface height
    deck_size: tuple             # (length, width) available for a module
    roof: tuple                  # (x, y, z) main weapon station
    roof2: tuple                 # (x, y, z) auxiliary weapon mount
    side: tuple                  # (x0, x1, z0, z1, half_width) side armour area
    front_face: tuple            # (x, z0, z1, half_width) front armour face
    roof_span: tuple             # (x0, x1, z, half_width) roof armour area
    belly: tuple                 # (x0, x1, z, half_width) underside
    engine: tuple                # (x, y, z) top of the engine compartment
    tanks: tuple                 # (x0, x1, z, half_width) side stowage between axles
    antenna_left: tuple          # (x, y, z)
    antenna_right: tuple
    radio_mast: tuple
    optics: tuple                # (x, y, z) front roof edge
    sensor_mast: tuple
    corners: tuple               # four (x, y, z) roof corners for distributed sensors
    bumper: tuple                # (x, z) front bumper face
    hitch: tuple                 # (x, z) rear tow point
    rack: tuple                  # (x, y, z) roof rack centre
    extra: dict = field(default_factory=dict)


def card_mount():
    """A compact, centred set of mounts for card renders: one axle, a short deck."""
    return Mounts(
        front=1.2, back=-1.2, axles=(0.0,), wheel_r=0.6, track=1.0, tyre_w=0.42,
        deck=(0.0, 0.0), deck_size=(2.6, 2.2), roof=(0, 0, 0), roof2=(0, 0, 0),
        side=(-1.1, 1.1, 0.0, 1.0, 0.0), front_face=(0.0, 0.0, 1.0, 1.1), roof_span=(-1.0, 1.0, 0.0, 1.1),
        belly=(-1.5, 1.5, 0.6, 1.0), engine=(0, 0, 0), tanks=(-0.9, 0.9, 0.5, 0.0),
        antenna_left=(0, 0, 0), antenna_right=(0, 0, 0), radio_mast=(0, 0, 0), optics=(0, 0, 0), sensor_mast=(0, 0, 0),
        corners=((0.32, -0.32, 0), (0.32, 0.32, 0), (-0.32, -0.32, 0), (-0.32, 0.32, 0)),
        bumper=(0.0, 0.5), hitch=(0.0, 0.5), rack=(0, 0, 0), extra={'card': True},
    )
