"""Helpers every part module shares (see library.py)."""
import math

PI = math.pi


def _card(m):
    return bool(m.extra.get('card'))


def _sides(m):
    return (-1,) if _card(m) else (-1, 1)


def _armoured(m):
    return bool(m.extra.get('armoured'))
