import { type Effects } from './capabilities';
import { type Cents, cents } from './money';
import { DomainError } from './validation';

export const RULESET = 'STANDARD';
export const DECK_VERSION = 'synthetic-v1';
export const ROUNDS = 7;
export const LOTS_PER_ROUND = 10;
export const MAX_WINS_PER_ROUND = 2;
export const MAX_PURCHASES = 14;
export const ROUND_SLOTS = Object.freeze(["CAPACITY","MOBILITY","FIREPOWER","PROTECTION","COMMS","SA","ACCESSORIES","SE_PROCESS","SE_PROCESS","SE_PROCESS"] as const);
export type CardCategory = typeof ROUND_SLOTS[number];
export interface CardDefinition { readonly id: string; readonly category: CardCategory; readonly title: Readonly<{ en: string; fr: string }>; readonly startCents: Cents; readonly effects: Effects }
export interface SlottedCard extends CardDefinition { readonly round: number; readonly lot: number; readonly instance: string }
// Frozen successor data transcribed from the independent rules baseline. Artwork never drives rules.
const canonical: readonly {id:string;category:CardCategory;title:{en:string;fr:string};startCents:number;effects:Effects}[] = [
  {
    "id": "CAP-A",
    "category": "CAPACITY",
    "title": {
      "en": "Modular Crew Hull",
      "fr": "Coque modulaire pour équipage"
    },
    "startCents": 30000000,
    "effects": {
      "CAP": 6,
      "MOB": -10
    }
  },
  {
    "id": "CAP-B",
    "category": "CAPACITY",
    "title": {
      "en": "Extended Carrier Module",
      "fr": "Module de transport agrandi"
    },
    "startCents": 45000000,
    "effects": {
      "CAP": 6
    }
  },
  {
    "id": "CAP-C",
    "category": "CAPACITY",
    "title": {
      "en": "Compact Passenger Bay",
      "fr": "Compartiment compact pour passagers"
    },
    "startCents": 25000000,
    "effects": {
      "CAP": 4,
      "PRO": -1
    }
  },
  {
    "id": "CAP-D",
    "category": "CAPACITY",
    "title": {
      "en": "High-Capacity Hull",
      "fr": "Coque à grande capacité"
    },
    "startCents": 55000000,
    "effects": {
      "CAP": 8,
      "MOB": -20
    }
  },
  {
    "id": "CAP-E",
    "category": "CAPACITY",
    "title": {
      "en": "Crew Compartment Insert",
      "fr": "Insert de compartiment équipage"
    },
    "startCents": 35000000,
    "effects": {
      "CAP": 5
    }
  },
  {
    "id": "CAP-F",
    "category": "CAPACITY",
    "title": {
      "en": "Protected Personnel Module",
      "fr": "Module protégé pour personnel"
    },
    "startCents": 65000000,
    "effects": {
      "CAP": 5,
      "PRO": 2
    }
  },
  {
    "id": "CAP-G",
    "category": "CAPACITY",
    "title": {
      "en": "Light Utility Hull",
      "fr": "Coque utilitaire légère"
    },
    "startCents": 40000000,
    "effects": {
      "CAP": 4,
      "MOB": 10
    }
  },
  {
    "id": "MOB-A",
    "category": "MOBILITY",
    "title": {
      "en": "Efficient Power Pack",
      "fr": "Groupe motopropulseur efficace"
    },
    "startCents": 40000000,
    "effects": {
      "MOB": 70
    }
  },
  {
    "id": "MOB-B",
    "category": "MOBILITY",
    "title": {
      "en": "High-Torque Drivetrain",
      "fr": "Groupe de transmission à couple élevé"
    },
    "startCents": 55000000,
    "effects": {
      "MOB": 80
    }
  },
  {
    "id": "MOB-C",
    "category": "MOBILITY",
    "title": {
      "en": "Lightweight Running Gear",
      "fr": "Train de roulement léger"
    },
    "startCents": 35000000,
    "effects": {
      "MOB": 60
    }
  },
  {
    "id": "MOB-D",
    "category": "MOBILITY",
    "title": {
      "en": "Heavy-Duty Suspension",
      "fr": "Suspension renforcée"
    },
    "startCents": 50000000,
    "effects": {
      "MOB": 50,
      "PRO": 1
    }
  },
  {
    "id": "MOB-E",
    "category": "MOBILITY",
    "title": {
      "en": "Long-Range Propulsion",
      "fr": "Propulsion à longue portée"
    },
    "startCents": 60000000,
    "effects": {
      "MOB": 90
    }
  },
  {
    "id": "MOB-F",
    "category": "MOBILITY",
    "title": {
      "en": "Compact Engine Set",
      "fr": "Groupe moteur compact"
    },
    "startCents": 30000000,
    "effects": {
      "MOB": 50
    }
  },
  {
    "id": "MOB-G",
    "category": "MOBILITY",
    "title": {
      "en": "Adaptive Traction Package",
      "fr": "Ensemble de traction adaptative"
    },
    "startCents": 45000000,
    "effects": {
      "MOB": 65
    }
  },
  {
    "id": "FP-A",
    "category": "FIREPOWER",
    "title": {
      "en": "Defensive Weapon Station",
      "fr": "Poste d’arme défensif"
    },
    "startCents": 35000000,
    "effects": {
      "FP": 2
    }
  },
  {
    "id": "FP-B",
    "category": "FIREPOWER",
    "title": {
      "en": "Medium Weapon Station",
      "fr": "Poste d’arme moyen"
    },
    "startCents": 50000000,
    "effects": {
      "FP": 4
    }
  },
  {
    "id": "FP-C",
    "category": "FIREPOWER",
    "title": {
      "en": "Heavy Weapon Station",
      "fr": "Poste d’arme lourd"
    },
    "startCents": 70000000,
    "effects": {
      "FP": 6,
      "MOB": -10
    }
  },
  {
    "id": "FP-D",
    "category": "FIREPOWER",
    "title": {
      "en": "Remote Defensive Mount",
      "fr": "Affût défensif téléopéré"
    },
    "startCents": 60000000,
    "effects": {
      "FP": 3,
      "SA": 1
    }
  },
  {
    "id": "FP-E",
    "category": "FIREPOWER",
    "title": {
      "en": "Light Weapon Mount",
      "fr": "Affût léger"
    },
    "startCents": 25000000,
    "effects": {
      "FP": 2
    }
  },
  {
    "id": "FP-F",
    "category": "FIREPOWER",
    "title": {
      "en": "Stabilized Weapon Suite",
      "fr": "Ensemble d’arme stabilisée"
    },
    "startCents": 65000000,
    "effects": {
      "FP": 5
    }
  },
  {
    "id": "FP-G",
    "category": "FIREPOWER",
    "title": {
      "en": "Dual-Purpose Mount",
      "fr": "Affût polyvalent"
    },
    "startCents": 55000000,
    "effects": {
      "FP": 4,
      "PRO": -1
    }
  },
  {
    "id": "PRO-A",
    "category": "PROTECTION",
    "title": {
      "en": "Layered Protection Kit",
      "fr": "Ensemble de protection multicouche"
    },
    "startCents": 50000000,
    "effects": {
      "PRO": 4,
      "MOB": -10
    }
  },
  {
    "id": "PRO-B",
    "category": "PROTECTION",
    "title": {
      "en": "Composite Armour Set",
      "fr": "Ensemble de blindage composite"
    },
    "startCents": 65000000,
    "effects": {
      "PRO": 5
    }
  },
  {
    "id": "PRO-C",
    "category": "PROTECTION",
    "title": {
      "en": "Light Armour Panels",
      "fr": "Panneaux de blindage léger"
    },
    "startCents": 35000000,
    "effects": {
      "PRO": 3
    }
  },
  {
    "id": "PRO-D",
    "category": "PROTECTION",
    "title": {
      "en": "Reinforced Crew Cell",
      "fr": "Cellule équipage renforcée"
    },
    "startCents": 70000000,
    "effects": {
      "PRO": 4,
      "CAP": 2
    }
  },
  {
    "id": "PRO-E",
    "category": "PROTECTION",
    "title": {
      "en": "Modular Side Protection",
      "fr": "Protection latérale modulaire"
    },
    "startCents": 45000000,
    "effects": {
      "PRO": 3,
      "MOB": -5
    }
  },
  {
    "id": "PRO-F",
    "category": "PROTECTION",
    "title": {
      "en": "Blast Protection Kit",
      "fr": "Ensemble de protection contre le souffle"
    },
    "startCents": 60000000,
    "effects": {
      "PRO": 5,
      "MOB": -10
    }
  },
  {
    "id": "PRO-G",
    "category": "PROTECTION",
    "title": {
      "en": "Lightweight Protective Shell",
      "fr": "Coque protectrice légère"
    },
    "startCents": 55000000,
    "effects": {
      "PRO": 4
    }
  },
  {
    "id": "COM-A",
    "category": "COMMS",
    "title": {
      "en": "Convoy Radio Suite",
      "fr": "Ensemble radio de convoi"
    },
    "startCents": 25000000,
    "effects": {
      "COM": 50
    }
  },
  {
    "id": "COM-B",
    "category": "COMMS",
    "title": {
      "en": "Extended Radio Network",
      "fr": "Réseau radio étendu"
    },
    "startCents": 45000000,
    "effects": {
      "COM": 100
    }
  },
  {
    "id": "COM-C",
    "category": "COMMS",
    "title": {
      "en": "Compact Communications Set",
      "fr": "Ensemble de communications compact"
    },
    "startCents": 15000000,
    "effects": {
      "COM": 25
    }
  },
  {
    "id": "COM-D",
    "category": "COMMS",
    "title": {
      "en": "Relay Communications Suite",
      "fr": "Ensemble de communications relais"
    },
    "startCents": 50000000,
    "effects": {
      "COM": 75,
      "SA": 1
    }
  },
  {
    "id": "COM-E",
    "category": "COMMS",
    "title": {
      "en": "Long-Range Radio Set",
      "fr": "Ensemble radio longue portée"
    },
    "startCents": 60000000,
    "effects": {
      "COM": 125
    }
  },
  {
    "id": "COM-F",
    "category": "COMMS",
    "title": {
      "en": "Secure Tactical Radio",
      "fr": "Radio tactique sécurisée"
    },
    "startCents": 35000000,
    "effects": {
      "COM": 50
    }
  },
  {
    "id": "COM-G",
    "category": "COMMS",
    "title": {
      "en": "Dual-Channel Radio Package",
      "fr": "Ensemble radio double canal"
    },
    "startCents": 40000000,
    "effects": {
      "COM": 75
    }
  },
  {
    "id": "SA-A",
    "category": "SA",
    "title": {
      "en": "Crew Observation Suite",
      "fr": "Ensemble d’observation équipage"
    },
    "startCents": 30000000,
    "effects": {
      "SA": 2
    }
  },
  {
    "id": "SA-B",
    "category": "SA",
    "title": {
      "en": "Multi-Sensor Awareness Suite",
      "fr": "Ensemble multisenseur"
    },
    "startCents": 60000000,
    "effects": {
      "SA": 4
    }
  },
  {
    "id": "SA-C",
    "category": "SA",
    "title": {
      "en": "Basic Observation Set",
      "fr": "Ensemble d’observation de base"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  },
  {
    "id": "SA-D",
    "category": "SA",
    "title": {
      "en": "Panoramic Sensor Mast",
      "fr": "Mât de capteurs panoramiques"
    },
    "startCents": 55000000,
    "effects": {
      "SA": 3,
      "MOB": -5
    }
  },
  {
    "id": "SA-E",
    "category": "SA",
    "title": {
      "en": "Crew Vision Enhancement",
      "fr": "Amélioration de vision équipage"
    },
    "startCents": 35000000,
    "effects": {
      "SA": 2
    }
  },
  {
    "id": "SA-F",
    "category": "SA",
    "title": {
      "en": "Integrated Detection Suite",
      "fr": "Ensemble intégré de détection"
    },
    "startCents": 65000000,
    "effects": {
      "SA": 4
    }
  },
  {
    "id": "SA-G",
    "category": "SA",
    "title": {
      "en": "Distributed Observation Kit",
      "fr": "Ensemble d’observation distribué"
    },
    "startCents": 50000000,
    "effects": {
      "SA": 3,
      "COM": 25
    }
  },
  {
    "id": "ACC-A",
    "category": "ACCESSORIES",
    "title": {
      "en": "Recovery Accessory Pack",
      "fr": "Ensemble d’accessoires de dépannage"
    },
    "startCents": 40000000,
    "effects": {
      "REC": 2
    }
  },
  {
    "id": "ACC-B",
    "category": "ACCESSORIES",
    "title": {
      "en": "Utility Trailer Module",
      "fr": "Module de remorque utilitaire"
    },
    "startCents": 45000000,
    "effects": {
      "CAP": 3,
      "MOB": -10
    }
  },
  {
    "id": "ACC-C",
    "category": "ACCESSORIES",
    "title": {
      "en": "Mine-Route Accessory Kit",
      "fr": "Ensemble d’accessoires pour route minée"
    },
    "startCents": 50000000,
    "effects": {
      "MC": 2
    }
  },
  {
    "id": "ACC-D",
    "category": "ACCESSORIES",
    "title": {
      "en": "Field Support Pack",
      "fr": "Ensemble de soutien de campagne"
    },
    "startCents": 55000000,
    "effects": {
      "REC": 1,
      "CAP": 2
    }
  },
  {
    "id": "ACC-E",
    "category": "ACCESSORIES",
    "title": {
      "en": "Engineer Support Module",
      "fr": "Module de soutien du génie"
    },
    "startCents": 60000000,
    "effects": {
      "MC": 2,
      "PRO": 1
    }
  },
  {
    "id": "ACC-F",
    "category": "ACCESSORIES",
    "title": {
      "en": "Recovery Winch Package",
      "fr": "Ensemble de treuil de dépannage"
    },
    "startCents": 35000000,
    "effects": {
      "REC": 2
    }
  },
  {
    "id": "ACC-G",
    "category": "ACCESSORIES",
    "title": {
      "en": "Mission Equipment Rack",
      "fr": "Support d’équipement de mission"
    },
    "startCents": 40000000,
    "effects": {
      "CAP": 2,
      "SA": 1
    }
  },
  {
    "id": "SE-A",
    "category": "SE_PROCESS",
    "title": {
      "en": "Requirements Review",
      "fr": "Revue des exigences"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  },
  {
    "id": "SE-B",
    "category": "SE_PROCESS",
    "title": {
      "en": "Risk Review",
      "fr": "Revue des risques"
    },
    "startCents": 20000000,
    "effects": {
      "PRO": 1
    }
  },
  {
    "id": "SE-C",
    "category": "SE_PROCESS",
    "title": {
      "en": "Interface Review",
      "fr": "Revue des interfaces"
    },
    "startCents": 20000000,
    "effects": {
      "COM": 25
    }
  },
  {
    "id": "SE-D",
    "category": "SE_PROCESS",
    "title": {
      "en": "Verification Planning",
      "fr": "Planification de la vérification"
    },
    "startCents": 20000000,
    "effects": {
      "CAP": 1
    }
  },
  {
    "id": "SE-E",
    "category": "SE_PROCESS",
    "title": {
      "en": "Configuration Review",
      "fr": "Revue de configuration"
    },
    "startCents": 20000000,
    "effects": {
      "MOB": 10
    }
  },
  {
    "id": "SE-F",
    "category": "SE_PROCESS",
    "title": {
      "en": "Trade Study",
      "fr": "Étude de compromis"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  },
  {
    "id": "SE-G",
    "category": "SE_PROCESS",
    "title": {
      "en": "Validation Planning",
      "fr": "Planification de la validation"
    },
    "startCents": 20000000,
    "effects": {
      "PRO": 1
    }
  },
  {
    "id": "SE-H",
    "category": "SE_PROCESS",
    "title": {
      "en": "Architecture Review",
      "fr": "Revue d’architecture"
    },
    "startCents": 20000000,
    "effects": {
      "COM": 25
    }
  },
  {
    "id": "SE-I",
    "category": "SE_PROCESS",
    "title": {
      "en": "Risk Reduction Study",
      "fr": "Étude de réduction des risques"
    },
    "startCents": 20000000,
    "effects": {
      "CAP": 1
    }
  },
  {
    "id": "SE-J",
    "category": "SE_PROCESS",
    "title": {
      "en": "Requirements Trace",
      "fr": "Traçabilité des exigences"
    },
    "startCents": 20000000,
    "effects": {
      "MOB": 10
    }
  },
  {
    "id": "SE-K",
    "category": "SE_PROCESS",
    "title": {
      "en": "Integration Planning",
      "fr": "Planification de l’intégration"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  },
  {
    "id": "SE-L",
    "category": "SE_PROCESS",
    "title": {
      "en": "Test Readiness Review",
      "fr": "Revue de préparation aux essais"
    },
    "startCents": 20000000,
    "effects": {
      "PRO": 1
    }
  },
  {
    "id": "SE-M",
    "category": "SE_PROCESS",
    "title": {
      "en": "Design Review",
      "fr": "Revue de conception"
    },
    "startCents": 20000000,
    "effects": {
      "COM": 25
    }
  },
  {
    "id": "SE-N",
    "category": "SE_PROCESS",
    "title": {
      "en": "Supplier Risk Review",
      "fr": "Revue des risques fournisseurs"
    },
    "startCents": 20000000,
    "effects": {
      "CAP": 1
    }
  },
  {
    "id": "SE-O",
    "category": "SE_PROCESS",
    "title": {
      "en": "Baseline Audit",
      "fr": "Audit de référence"
    },
    "startCents": 20000000,
    "effects": {
      "MOB": 10
    }
  },
  {
    "id": "SE-P",
    "category": "SE_PROCESS",
    "title": {
      "en": "Change Control Review",
      "fr": "Revue de contrôle des changements"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  },
  {
    "id": "SE-Q",
    "category": "SE_PROCESS",
    "title": {
      "en": "Human Factors Review",
      "fr": "Revue des facteurs humains"
    },
    "startCents": 20000000,
    "effects": {
      "PRO": 1
    }
  },
  {
    "id": "SE-R",
    "category": "SE_PROCESS",
    "title": {
      "en": "Supportability Review",
      "fr": "Revue de soutenabilité"
    },
    "startCents": 20000000,
    "effects": {
      "COM": 25
    }
  },
  {
    "id": "SE-S",
    "category": "SE_PROCESS",
    "title": {
      "en": "Mission Analysis",
      "fr": "Analyse de mission"
    },
    "startCents": 20000000,
    "effects": {
      "CAP": 1
    }
  },
  {
    "id": "SE-T",
    "category": "SE_PROCESS",
    "title": {
      "en": "Lessons Review",
      "fr": "Revue des leçons"
    },
    "startCents": 20000000,
    "effects": {
      "MOB": 10
    }
  },
  {
    "id": "SE-U",
    "category": "SE_PROCESS",
    "title": {
      "en": "Acceptance Review",
      "fr": "Revue d’acceptation"
    },
    "startCents": 20000000,
    "effects": {
      "SA": 1
    }
  }
];
export const CARDS: readonly CardDefinition[] = Object.freeze(canonical.map(card => Object.freeze({ ...card, title: Object.freeze(card.title), startCents: cents(card.startCents), effects: Object.freeze(card.effects) })));
const byId = new Map(CARDS.map(card => [card.id,card]));
export function cardDefinition(id: string): CardDefinition {
  const card = byId.get(id);
  if (!card) throw new DomainError('card');
  return card;
}
export function cardForSlot(id: string, round: number, lot: number): SlottedCard {
  const card = cardDefinition(id);
  if (!Number.isInteger(round) || round < 1 || round > ROUNDS || !Number.isInteger(lot) || lot < 1 || lot > LOTS_PER_ROUND || card.category !== ROUND_SLOTS[lot - 1]) throw new DomainError('card');
  return Object.freeze({ ...card, round, lot, instance: 'R'+round+'-L'+lot+'-'+card.id });
}
