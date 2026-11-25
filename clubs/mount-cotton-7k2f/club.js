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
  mapLead: "This is your floor plan, redrawn as zones. Tap a zone to see what Centrefit puts there. Indicative only, the design comes with the quote.",
  svg: `
    <defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,.12)" stroke-width="2"/></pattern></defs>
    <path d="M8 8 H392 V98 H222 V222 H8 Z" fill="#0a1c3a" stroke="rgba(255,255,255,.3)" stroke-width="2"/>
    <rect x="224" y="100" width="166" height="120" fill="url(#hatch)" stroke="rgba(255,255,255,.12)" stroke-dasharray="4 4"/>
    <text x="268" y="156" style="fill:#7f93b3;font-size:10px">TENANCY 15 / 17</text><text x="272" y="170" style="fill:#7f93b3;font-size:10px">NOT IN SCOPE</text>
    <g class="hot" data-k="floor"><path d="M10 10 H88 V98 H220 V220 H10 Z" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="62" y="202">GYM FLOOR · 355 m²</text></g>
    <g class="hot" data-k="comms"><rect x="90" y="10" width="20" height="70" rx="4" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="93" y="48" transform="rotate(-90 93 48)">UP · MEZZ</text></g>
    <g class="hot" data-k="amen"><rect x="112" y="10" width="104" height="46" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="120" y="30">AMENITIES</text><text x="120" y="46">+ SAUNA</text></g>
    <g class="hot" data-k="cubbies"><rect x="112" y="58" width="88" height="20" rx="5" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="122" y="72">CUBBIES</text></g>
    <g class="hot" data-k="cardio"><rect x="230" y="54" width="140" height="42" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="268" y="79">CARDIO</text></g>
    <g class="hot" data-k="reception"><rect x="300" y="10" width="70" height="42" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="308" y="34" style="font-size:9.5px">RECEPTION</text></g>
    <g class="hot" data-k="entry"><rect x="372" y="10" width="18" height="86" rx="4" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><circle cx="381" cy="40" r="4" fill="var(--cyan)"/><circle cx="381" cy="40" r="4" fill="var(--cyan)" class="pulse"/><text x="385" y="60" transform="rotate(-90 385 60)" style="font-size:9px">ENTRY</text></g>
    <g class="hot" data-k="side"><rect x="10" y="100" width="12" height="22" rx="3" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><circle cx="16" cy="111" r="4" fill="var(--cyan)"/><circle cx="16" cy="111" r="4" fill="var(--cyan)" class="pulse"/><text x="26" y="115" style="font-size:9px">SIDE DOOR</text></g>
    <g class="hot" data-k="roller"><rect x="10" y="140" width="12" height="34" rx="3" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.25)"/><text x="26" y="160" style="font-size:9px">ROLLER DOOR</text></g>
    <text x="232" y="212" style="fill:#7f93b3;font-size:7px;font-weight:400">Indicative zones only · not a design</text><text x="232" y="220" style="fill:#7f93b3;font-size:7px;font-weight:400">Centrefit Group · plans Rev 02 preliminary</text>`,
  rooms: {
    entry: ['Front entry, Valley Way', 'Your shopfront doors on the Valley Way side. Snap member reader and strike, intercom back to reception, and the Veyla Protect camera just inside, looking back at the door. One camera covers the whole entry, 24/7.', 'clubs/mount-cotton-7k2f/reception.jpg'],
    reception: ['Reception', 'Your counter from sheet 22. Centrefit NBN internet and the club router, Ubiquiti UniFi Wi‑Fi, the Fanvil phone, music source and the TV wall controller. Alarm keypad within reach of the counter.'],
    cardio: ['Cardio and the Snap wall', 'The treadmill and bike bays along the red wall. TV points for every screen in your render, ceiling speakers on their own zone, Wi‑Fi, and CCTV from the reception end through to the amenities.'],
    amen: ['Amenities and sauna', 'Cleaners, ambulant toilets, two showers, PWD and the sauna behind door D01. Alarm detectors and speakers for background music. Duress button outside the sauna door. No cameras, ever.'],
    cubbies: ['Cubbies and the drinking fountain', 'The cubby wall from sheet 23 sits inside CCTV view, because that is where bags go missing. Speaker overhead.'],
    comms: ['Mezzanine store and comms, 32 m²', 'Your architect has moved the DB up to the mezzanine store, so that is where our rack goes: Bosch Solution 6000 panel with 24/7 Back2Base monitoring, the CCTV recorder, network switch, Cat6A patching and the Veyla Protect box. Labelled, certified, out of the way.'],
    floor: ['Gym floor, approx 355 m²', 'AI‑powered, NDAA‑compliant Dahua CCTV with full coverage of the strength floor, ceiling speakers and amplifiers, TV points, Wi‑Fi throughout, alarm detectors. Mounting heights taken from your reflected ceiling plan.'],
    side: ['Existing side door', 'The existing door on the long wall stays. Monitored exit with reader and strike, and the second Veyla Protect camera, so a door propped open for a mate is caught just like the front.'],
    roller: ['Roller door', 'Retained behind the new plasterboard wall. Alarm contact on the door and a camera over it, so the framing is not your only security.']
  },
  inclusionsTitle: 'From your drawings',
  inclusions: [
    ['Sheet 05 · Floor plan, 355 m² + 32 m² mezzanine', 'Camera coverage and audio zones designed from this sheet, not guessed.'],
    ['Sheet 06 · Mezzanine', 'Comms rack and alarm panel beside the relocated DB.'],
    ['Sheets 13–14 · Reflected ceiling plans', 'Speakers, detectors and cameras set out to your ceiling grid.'],
    ['Sheets 15–16 · Electrical plans', 'Our data and power points on one marked‑up plan for your electrician.'],
    ['Sheet 20 · Sauna', 'Duress button beside the sauna door.'],
    ['Sheets 17–19 · PWD, WC and showers', 'Detectors and music only. No cameras.'],
    ['Sheet 22 · Reception counter', 'Phone, keypad, Wi‑Fi and the TV controller at the counter.'],
    ['Sheet 23 · Cubbies', 'In camera view.'],
    ['FFE schedule Rev 02 · Dark scheme', 'Black speakers, detectors and readers to suit.'],
    ['3D Virtua render · 16 views', 'Every screen in your render gets a TV point and an audio zone.']
  ],
  note: 'Plans are Rev 02, preliminary. We re‑check everything against the construction issue before a cable is pulled.'
};
