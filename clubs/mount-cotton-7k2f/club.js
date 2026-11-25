// Snap Fitness Mount Cotton — per-club data for the Centrefit Snap intro deck.
// Built 25 Nov 2026 from the owner's own files: Renée Dunn Architect CD set Rev 02 (24 Nov 2026, preliminary),
// FFE schedule Rev 02 (dark scheme), 3D Virtua render 267417 (16 views, 356 m²).
// The map below is Centrefit's own indicative zone sketch, not a reproduction of the architect's drawing.
window.CLUB = {
  name: "Snap Fitness Mount Cotton",
  owner: "Inder Singh",
  address: "Tenancy 14 & 16, 101 Valley Way, Mount Cotton QLD 4165",
  cover: "clubs/mount-cotton-7k2f/cover.jpg",
  coverCaption: "Your club. 356 m² over tenancies 14 and 16, plus the mezzanine. Render by 3D Virtua for Inder Singh, plans by Renée Dunn Architect, Rev 02.",
  mapTitle: "We've been through all 24 sheets.",
  mapLead: "Your floor plans, redrawn as zones, one level at a time. Tap a zone to see what Centrefit puts there. Indicative only, the design comes with the quote.",
  levels: [
    { name: 'Ground floor', aspect: '400/230',
    svg: `
    <defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,.12)" stroke-width="2"/></pattern></defs>
    <path d="M8 8 H392 V98 H222 V222 H8 Z" fill="#0a1c3a" stroke="rgba(255,255,255,.3)" stroke-width="2"/>
    <rect x="224" y="100" width="166" height="120" fill="url(#hatch)" stroke="rgba(255,255,255,.12)" stroke-dasharray="4 4"/>
    <text x="268" y="156" style="fill:#7f93b3;font-size:10px">TENANCY 15 / 17</text><text x="272" y="170" style="fill:#7f93b3;font-size:10px">NOT IN SCOPE</text>
    <g class="hot" data-k="floor"><path d="M10 10 H88 V98 H220 V220 H10 Z" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="62" y="202">GYM FLOOR · 355 m²</text></g>
    <g class="hot" data-k="stairs" data-go="1"><rect x="90" y="10" width="20" height="70" rx="4" fill="rgba(25,194,255,.12)" stroke="var(--cyan)"/><text x="93" y="52" transform="rotate(-90 93 52)">STAIRS ▲</text></g>
    <g class="hot" data-k="amen"><rect x="112" y="10" width="104" height="46" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="120" y="30">AMENITIES</text><text x="120" y="46">+ SAUNA</text></g>
    <g class="hot" data-k="cubbies"><rect x="112" y="58" width="88" height="20" rx="5" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="122" y="72">CUBBIES</text></g>
    <g class="hot" data-k="cardio"><rect x="230" y="54" width="140" height="42" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="268" y="79">CARDIO</text></g>
    <g class="hot" data-k="reception"><rect x="300" y="10" width="70" height="42" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="308" y="34" style="font-size:9.5px">RECEPTION</text></g>
    <g class="hot" data-k="entry"><rect x="372" y="10" width="18" height="86" rx="4" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><circle cx="381" cy="40" r="4" fill="var(--cyan)"/><circle cx="381" cy="40" r="4" fill="var(--cyan)" class="pulse"/><text x="385" y="60" transform="rotate(-90 385 60)" style="font-size:9px">ENTRY</text></g>
    <g class="hot" data-k="side"><rect x="10" y="100" width="12" height="22" rx="3" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><circle cx="16" cy="111" r="4" fill="var(--cyan)"/><circle cx="16" cy="111" r="4" fill="var(--cyan)" class="pulse"/><text x="26" y="115" style="font-size:9px">SIDE DOOR</text></g>
    <g class="hot" data-k="roller"><rect x="10" y="140" width="12" height="34" rx="3" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="26" y="160" style="font-size:9px">ROLLER DOOR</text></g>
    <text x="232" y="212" style="fill:#7f93b3;font-size:7px;font-weight:400">Indicative zones only · not a design</text><text x="232" y="220" style="fill:#7f93b3;font-size:7px;font-weight:400">Centrefit Group · plans Rev 02 preliminary</text>`,
    rooms: {
    entry: ['Front entry, Valley Way', 'Your shopfront doors on the Valley Way side. Snap member reader and strike, and the Veyla Protect camera just inside, looking back at the door. One camera covers the whole entry, 24/7 with real time notifications to your mobile device using the Veyla App available in both the Apple and Google Play stores.', 'clubs/mount-cotton-7k2f/reception.jpg'],
    reception: ['Reception', 'Your counter from sheet 22. Nothing of ours clutters it. Wi‑Fi coverage and CCTV over the counter and the entry.'],
    cardio: ['Cardio and the Snap wall', 'The treadmill and bike bays along the red wall. TV points for every screen in your render, ceiling speakers on their own zone, Wi‑Fi, and CCTV from the reception end through to the amenities.'],
    amen: ['Amenities and sauna', 'Cleaners, ambulant toilets, two showers, the DWC (your plans call it PWD) and the sauna behind door D01. Alarm detectors in the corridor. Duress button inside the DWC and another outside the sauna door. A camera covers the amenities corridor only, never inside a cubicle.'],
    cubbies: ['Cubbies and the drinking fountain', 'The cubby wall from sheet 23 sits inside CCTV view, because that is where bags go missing. Speaker overhead.'],
    stairs: ['Stairs to the mezzanine', 'Existing stairs, retained. A camera at the foot covers the stairs and the cubby wall in one view. Tap again to go up a level: the comms room is upstairs.'],
    floor: ['Gym floor, approx 355 m²', 'AI‑powered, NDAA‑compliant Dahua CCTV with full coverage of the strength floor, ceiling speakers and amplifiers, TV points, Wi‑Fi throughout, alarm detectors. Mounting heights taken from your reflected ceiling plan.'],
    side: ['Existing side door', 'The existing door on the long wall stays. Monitored exit with reader and strike, and the second Veyla Protect camera, so a door propped open for a mate is caught just like the front.'],
    roller: ['Roller door', 'Retained behind the new plasterboard wall. Alarm contact on the door and a camera over it, so the framing is not your only security.']
  }
    },
    { name: 'Mezzanine', aspect: '400/230',

    svg: `
    <defs><pattern id="hatch2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,.12)" stroke-width="2"/></pattern></defs>
    <rect x="8" y="8" width="384" height="214" fill="#0a1c3a" stroke="rgba(255,255,255,.18)" stroke-dasharray="5 5"/>
    <rect x="150" y="10" width="240" height="210" fill="url(#hatch2)"/>
    <text x="212" y="108" style="fill:#7f93b3;font-size:10px">CEILING BELOW · GYM FLOOR</text>
    <text x="212" y="122" style="fill:#7f93b3;font-size:9px;font-weight:400">no floor here, open ceiling space</text>
    <g class="hot" data-k="stairs" data-go="0"><rect x="10" y="10" width="40" height="130" rx="4" fill="rgba(25,194,255,.12)" stroke="var(--cyan)"/><text x="24" y="88" transform="rotate(-90 24 88)">STAIRS ▼</text></g>
    <g class="hot" data-k="comms"><rect x="54" y="10" width="92" height="130" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="62" y="60">STORE</text><text x="62" y="76">+ COMMS</text><text x="62" y="92" style="font-size:9px">32 m²</text></g>
    <g class="hot" data-k="db"><rect x="100" y="12" width="44" height="22" rx="4" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.35)"/><text x="106" y="27" style="font-size:9px">DB · RACK</text></g>
    <g class="hot" data-k="d08"><rect x="54" y="142" width="40" height="12" rx="3" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><circle cx="74" cy="148" r="4" fill="var(--cyan)"/><circle cx="74" cy="148" r="4" fill="var(--cyan)" class="pulse"/><text x="56" y="170" style="font-size:9px">DOOR D08</text></g>
    <text x="12" y="212" style="fill:#7f93b3;font-size:7px;font-weight:400">Indicative zones only · not a design · Centrefit Group · plans Rev 02 preliminary</text>`,
    rooms: {
      stairs: ['Stairs down to the gym floor', 'The landing at the top of the stairs gets an alarm detector and sits in the view of the stairs camera. Tap again to go back down.'],
      comms: ['Store and comms, 32 m²', 'Your architect has moved the DB up here, so this is where our rack goes: the NBN router and UniFi Wi‑Fi controller, Bosch Solution 6000 panel with 24/7 Back2Base monitoring, the CCTV recorder, network switch, Cat6A patching, the Nightlife Music player and the Veyla Protect box. Labelled, certified, out of the way. A Wi‑Fi point up here covers the mezzanine.'],
      db: ['Relocated DB and our rack', 'Your electrician lands the DB here, our comms rack goes beside it, one power circuit for everything we install. Short cable runs down to the ceiling below.'],
      d08: ['Store door D08', 'Existing door, new hardware per your schedule. Alarm contact on the door so the comms room is never left open unnoticed. A reader if you want it staff‑only.']
    }
    }
  ],
  inclusionsTitle: 'From your drawings',
  inclusions: [
    ['Sheet 05 · Floor plan, 355 m² + 32 m² mezzanine', 'Camera coverage and audio zones designed from this sheet, not guessed.'],
    ['Sheet 06 · Mezzanine', 'Comms rack beside the relocated DB: router, Wi‑Fi controller, alarm panel, recorder, Nightlife Music, Veyla Protect.'],
    ['Sheets 13–14 · Reflected ceiling plans', 'Speakers, detectors and cameras set out to your ceiling grid.'],
    ['Sheets 15–16 · Electrical plans', 'Our data and power points on one marked‑up plan for your electrician.'],
    ['Sheet 20 · Sauna', 'Duress button beside the sauna door.'],
    ['Sheets 17–19 · DWC (PWD), WC and showers', 'Duress inside the DWC, detectors in the corridor. No speakers, no cameras inside.'],
    ['Sheet 22 · Reception counter', 'CCTV over the counter and the entry, Wi‑Fi coverage, nothing of ours on the bench.'],
    ['Sheet 23 · Cubbies', 'In camera view.'],
    ['FFE schedule Rev 02 · Dark scheme', 'Black speakers, detectors and readers to suit.'],
    ['3D Virtua render · 16 views', 'Every screen in your render gets a TV point and an audio zone.']
  ],
  studios: [], // sheet 05 shows no group fitness, Pilates, recovery or yoga studio
  note: 'Plans are Rev 02, preliminary. We re‑check everything against the construction issue before a cable is pulled.'
};
