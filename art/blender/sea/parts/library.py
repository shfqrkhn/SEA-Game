"""Every physical card's part (MPES §10.2, Appendix A): 49 builders, one per card.

A builder takes a `Builder` (its layer is the card ID) and the vehicle's `Mounts` and places the part in
vehicle coordinates. The same builder renders the card image on the compact card mount
(`mounts.card_mount()`), where `m.extra['card']` asks for one side only and a wheel for running gear.
Sizes follow the card's effects so stronger cards read as bigger kit.

Each category's builders live in their own module (cap, mob, fp, pro, com, sa, acc); `common` holds shared helpers.
"""
from . import acc, cap, com, fp, mob, pro, sa
from .common import _card

PARTS = {
    **{f'CAP-{k}': getattr(cap, f'cap_{k.lower()}') for k in 'ABCDEFG'},
    **{f'MOB-{k}': getattr(mob, f'mob_{k.lower()}') for k in 'ABCDEFG'},
    **{f'FP-{k}': getattr(fp, f'fp_{k.lower()}') for k in 'ABCDEFG'},
    **{f'PRO-{k}': getattr(pro, f'pro_{k.lower()}') for k in 'ABCDEFG'},
    **{f'COM-{k}': getattr(com, f'com_{k.lower()}') for k in 'ABCDEFG'},
    **{f'SA-{k}': getattr(sa, f'sa_{k.lower()}') for k in 'ABCDEFG'},
    **{f'ACC-{k}': getattr(acc, f'acc_{k.lower()}') for k in 'ABCDEFG'},
}


def build(card, b, m):
    """Build `card` into builder `b` on mounts `m` (the entry point the renderer uses)."""
    b.card = _card(m)
    PARTS[card](b, m)
