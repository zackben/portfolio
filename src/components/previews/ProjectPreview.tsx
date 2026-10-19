import type { PreviewKind } from "../../data/profile";
import "../../styles/previews.css";

// Illustrations en HTML/CSS : les vraies applications sont internes, donc pas de captures.

function Onboarding() {
  return (
    <div className="pv-phone">
      <div className="pv-notch" />
      <p className="pv-small">Étape 2 sur 4</p>
      <p className="pv-h">Ouvrir un compte</p>
      <div className="pv-progress">
        <span style={{ width: "50%" }} />
      </div>
      <div className="pv-field">
        <span>Prénom</span>
        <b>Yasmine</b>
      </div>
      <div className="pv-field">
        <span>Téléphone</span>
        <b>06 •• •• •• 42</b>
      </div>
      <div className="pv-pack">
        <span className="pv-pack-dot" />
        <div>
          <b>Pack Essentiel</b>
          <span>Carte + appli incluses</span>
        </div>
      </div>
      <div className="pv-cta">Continuer</div>
    </div>
  );
}

function Transfer() {
  return (
    <div className="pv-window">
      <div className="pv-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="pv-body">
        <p className="pv-h">Nouveau virement</p>
        <div className="pv-row">
          <div className="pv-field dark">
            <span>Depuis</span>
            <b>Compte courant •••• 4417</b>
          </div>
          <div className="pv-field dark">
            <span>Vers</span>
            <b>Atlas Fournitures SARL</b>
          </div>
        </div>
        <div className="pv-amount">
          <span>Montant</span>
          <b>12 500,00 MAD</b>
        </div>
        <div className="pv-row pv-end">
          <div className="pv-toggle">
            <span />
            Virement multiple
          </div>
          <div className="pv-cta small">Valider</div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const bars = [42, 64, 38, 80, 56, 92, 70];
  return (
    <div className="pv-window">
      <div className="pv-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="pv-body pv-dash">
        <div className="pv-kpis">
          <div>
            <span>Demandes</span>
            <b>128</b>
          </div>
          <div>
            <span>Validées</span>
            <b className="ok">96</b>
          </div>
          <div>
            <span>En attente</span>
            <b className="wait">32</b>
          </div>
        </div>
        <div className="pv-chart">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="pv-lines">
          <p>
            <span>Virement groupé</span>
            <em className="ok">Signé</em>
          </p>
          <p>
            <span>Carte Visa Pro</span>
            <em className="wait">À valider</em>
          </p>
        </div>
      </div>
    </div>
  );
}

function Score() {
  return (
    <div className="pv-score">
      <svg viewBox="0 0 200 120" aria-hidden="true">
        <path d="M20 110 A80 80 0 0 1 180 110" className="pv-arc-bg" />
        <path d="M20 110 A80 80 0 0 1 180 110" className="pv-arc" pathLength="100" />
      </svg>
      <p className="pv-score-value">742</p>
      <p className="pv-small center">Score de crédit</p>
      <div className="pv-steps">
        <p className="done">Pièces reçues</p>
        <p className="done">Analyse automatique</p>
        <p>Offre envoyée</p>
      </div>
    </div>
  );
}

function Insurance() {
  return (
    <div className="pv-phone">
      <div className="pv-notch" />
      <p className="pv-small">Bonjour Karim</p>
      <p className="pv-h">Mes garanties</p>
      <div className="pv-list">
        <p>
          <span>Hospitalisation</span>
          <em className="ok">Couvert</em>
        </p>
        <p>
          <span>Optique</span>
          <em className="ok">Couvert</em>
        </p>
        <p>
          <span>Dentaire</span>
          <em className="wait">80 %</em>
        </p>
      </div>
      <div className="pv-refund">
        <span>Remboursement en cours</span>
        <div className="pv-progress">
          <span style={{ width: "70%" }} />
        </div>
      </div>
      <div className="pv-cta">Nouvelle demande</div>
    </div>
  );
}

function Agent() {
  return (
    <div className="pv-window">
      <div className="pv-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="pv-body">
        <div className="pv-row pv-end">
          <p className="pv-h">Dossier AUTO-2026-0418</p>
          <span className="pv-live">Calcul en direct</span>
        </div>
        <div className="pv-row">
          <div className="pv-field dark">
            <span>Assuré</span>
            <b>Sara El Idrissi</b>
          </div>
          <div className="pv-field dark">
            <span>Formule</span>
            <b>Tous risques</b>
          </div>
        </div>
        <div className="pv-amount">
          <span>Prime annuelle</span>
          <b>4 820,00 MAD</b>
        </div>
        <div className="pv-lines">
          <p>
            <span>Pièces justificatives</span>
            <em className="ok">Complètes</em>
          </p>
          <p>
            <span>Validation agence</span>
            <em className="wait">En cours</em>
          </p>
        </div>
      </div>
    </div>
  );
}

const MAP: Record<PreviewKind, () => JSX.Element> = {
  agent: Agent,
  onboarding: Onboarding,
  transfer: Transfer,
  dashboard: Dashboard,
  score: Score,
  insurance: Insurance,
};

export default function ProjectPreview({ kind }: { kind: PreviewKind }) {
  const C = MAP[kind];
  return (
    <div className={`pv pv-kind-${kind}`} aria-hidden="true">
      <C />
    </div>
  );
}
