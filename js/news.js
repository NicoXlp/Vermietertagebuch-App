// „Neues“: Ankündigungen auf der Startseite – eigene Datei, damit auch der Push-Versand
// (scripts/send-reminders.mjs) neue Meldungen erkennt und alle per Mitteilung informiert.
// Neuen Eintrag oben einfügen → die Kachel zeigt immer den neuesten. Jede Meldung braucht eine
// neue, eindeutige id – nur neue ids lösen eine Push-Mitteilung aus.
// Bitte keine Browser-APIs hier verwenden.
export const NEWS = [
  {
    id: '2026-11-23-neu',
    date: '2026-11-23',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '🎄', title: 'Farbschema „Weihnachten“', text: 'Festliches Farbschema in Weihnachtsrot, Tannengrün und warmem Gold – nur bis zum 26. Dezember.', act: 'tab', v: 'house', btn: 'Farbschema wählen' },
      { icon: '❄️', title: 'Es schneit', text: 'Auf der Startseite rieselt jetzt leise Schnee – bis zum 26. Dezember.' },
      { icon: '🎅', title: 'Weihnachtsmützen', text: 'Passend zum Winter trägt jedes Profilbild eine kleine Weihnachtsmütze – bis zum 26. Dezember.', act: 'tab', v: 'house', btn: 'Mitbewohner:innen ansehen' },
      { icon: '🌴', title: 'Farbschema „GTA VI“', text: 'Zum Release von GTA VI gibt es exklusiv ein GTA-VI-Farbschema in Pink und Lila mit einem dezenten Hauch Orange – nur bis zum 12. Dezember, danach verschwindet es wieder.', act: 'tab', v: 'house', btn: 'Farbschema wählen' },
    ],
  },
  {
    id: '2026-11-23-fixes',
    date: '2026-11-23',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '👤', title: 'Profil öffnen', text: 'Das Fenster „Mein Profil“ verschiebt sich beim ersten Öffnen nicht mehr.' },
      { icon: '👆', title: 'Scrollen in „Mein Profil“', text: 'In den Profileinstellungen kann man jetzt überall scrollen – auch wenn der Finger auf der Emoji- oder Farbauswahl aufsetzt.' },
      { icon: '🧭', title: 'Fenster & Navigationsleiste', text: 'Fenster überlappen die Navigationsleiste nicht mehr – sie bleibt darunter immer frei sichtbar.' },
      { icon: '⌨️', title: 'Fenster beim Tippen', text: 'Beim Kommentieren rutscht das Fenster auf dem iPhone nicht mehr ganz nach oben – es bleibt direkt über der Tastatur.' },
      { icon: '💬', title: 'Kommentare linksbündig', text: 'Der neueste Kommentar unter einem Beitrag steht wieder links statt mittig.' },
    ],
  },
  {
    id: '2026-11-15-fixes-5',
    date: '2026-11-15',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '↩️', title: 'Zurück-Taste', text: 'Auf Android schließen Zurück-Taste und Zurück-Geste jetzt nur das offene Fenster statt die ganze App.' },
      { icon: '🔁', title: 'Monatliche Aufgaben', text: 'Aufgaben am 29., 30. oder 31. springen nicht mehr in den Folgemonat – im Februar ist dann einfach der letzte Tag dran.' },
      { icon: '🧭', title: 'Navigationsleiste', text: 'Bleibt beim Scrollen bis ans Seitenende fest an ihrem Platz – auf allen Geräten.' },
      { icon: '✂️', title: 'Nichts mehr abgeschnitten', text: '„Alle / wer Zeit hat“ bei neuen Aufgaben und „überfällig“ bei „Wer hat was zu tun?“ sind wieder ganz lesbar.' },
      { icon: '💬', title: 'Kommentare stabiler', text: 'Ältere Einträge ohne Uhrzeit bringen das Kommentarfenster nicht mehr zum Absturz.' },
    ],
  },
  {
    id: '2026-11-13-fixes-4',
    date: '2026-11-13',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '🫧', title: 'Fenster als Blase', text: 'Beiträge, Aufgaben, Kommentare & Co. öffnen sich jetzt als schwebende Blase.' },
      { icon: '📱', title: 'Kein schwarzer Balken', text: 'Nach dem Tippen oder Markieren bleibt unten am iPhone kein schwarzer Streifen mehr stehen.' },
      { icon: '🖥️', title: 'Auf allen Geräten', text: 'Gleiches Aussehen auf Handy, Tablet, PC und Faltbildschirmen – mit sanftem Ein- und Ausblenden.' },
    ],
  },
  {
    id: '2026-11-13-everyone',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '📣', title: '@everyone', text: 'Markiere in Beiträgen und Kommentaren mit @everyone alle auf einmal – so weiß jede:r, dass alle gemeint sind.', act: 'compose', v: 'post', btn: 'Beitrag schreiben' },
      { icon: '✍️', title: 'Schnell gefunden', text: 'Einfach „@“ tippen – @everyone steht ganz oben in den Vorschlägen (auch bei „@alle“).' },
      { icon: '🔔', title: 'Alle bekommen Bescheid', text: 'Bei @everyone geht an alle im Haus eine Mitteilung mit dem Anfang des Beitrags.' },
    ],
  },
  {
    id: '2026-11-13-fixes-3',
    date: '2026-11-13',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '🖼️', title: 'Kein Flackern mehr', text: 'Profilbilder blitzen beim Schieben der Regler nicht mehr gelb auf – auf allen Geräten.' },
      { icon: '🔒', title: 'Private Aufgaben', text: 'Im Privatchat zugeteilte Aufgaben sehen nur noch ihr beide – auch die Mitteilungen dazu.' },
      { icon: '🏷️', title: 'Erkennbar', text: 'Private Aufgaben tragen in der Liste ein „🔒 Privat“. Beim Anlegen lässt sich das auch selbst einschalten.', act: 'tab', v: 'tasks', btn: 'Zu den Aufgaben' },
    ],
  },
  {
    id: '2026-11-13-feedback',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '🐞', title: 'Bugs melden', text: 'Etwas funktioniert nicht? Melde es direkt auf der Startseite unter „Wünsche & Anregungen“.', act: 'fb-new', v: 'bug', btn: 'Bug melden' },
      { icon: '💡', title: 'Wünsche äußern', text: 'Dir fehlt eine Funktion? Schreib sie auf – sie landet direkt bei Nico zum Umsetzen.', act: 'fb-new', v: 'wish', btn: 'Wunsch äußern' },
      { icon: '🔒', title: 'Nur für dich sichtbar', text: 'Deine Meldungen siehst nur du. Du bekommst Bescheid, sobald sie in Arbeit oder erledigt sind.', act: 'fb-list', btn: 'Meine Meldungen' },
    ],
  },
  {
    id: '2026-11-13-fold',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '📱', title: 'iPhone Duo, Galaxy Fold & Flip', text: 'Außendisplay, aufgeklappt oder quer – die App passt sich jetzt jedem Bildschirm an.' },
      { icon: '🪟', title: 'Aufgeklappt mehr sehen', text: 'Auf großen Faltbildschirmen zeigt die Startseite zwei Spalten nebeneinander.' },
      { icon: '↔️', title: 'Zwei Bildschirme', text: 'Auf Geräten mit Scharnier (z. B. Surface Duo) bleibt links die App, rechts öffnen sich Chats – nichts verschwindet im Knick.' },
    ],
  },
  {
    id: '2026-11-13-profile',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '🔒', title: 'Dein Profil gehört dir', text: 'Name, Bild, Farbe und Stockwerk kann jetzt nur noch jede:r im eigenen Profil ändern.', act: 'profile', btn: 'Mein Profil' },
      { icon: '👤', title: 'Profile ansehen', text: 'Tippe unter „Haus“ auf eine Person: Profilbild, Stockwerk und Online-Status – plus Nachricht und Aufgabe mit einem Tipp.', act: 'tab', v: 'house', btn: 'Zu den Mitbewohner:innen' },
      { icon: '🏷️', title: 'Spitznamen bleiben', text: 'Eigene Spitznamen für andere kannst du weiterhin im jeweiligen Profil vergeben – nur du siehst sie.' },
    ],
  },
  {
    id: '2026-11-13-fixes-2',
    date: '2026-11-13',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '🫳', title: 'Gedrückt halten', text: 'Nachricht im Chat gedrückt halten öffnet ein kompaktes Menü: reagieren, antworten, kopieren, löschen.' },
      { icon: '↪️', title: 'Zur zitierten Nachricht', text: 'Eine Antwort antippen springt direkt zur Nachricht, auf die geantwortet wurde.' },
      { icon: '🏷️', title: 'Spitznamen', text: 'Im Profil einer Person einen eigenen Spitznamen speichern – nur du siehst ihn.', act: 'tab', v: 'house', btn: 'Zu den Mitbewohner:innen' },
    ],
  },
  {
    id: '2026-11-13-fixes',
    date: '2026-11-13',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '⏩', title: 'Sprachnachrichten spulen', text: 'Auf der Tonspur tippen oder mit dem Finger ziehen – vor und zurück, wie du willst.' },
      { icon: '↩️', title: 'Antworten per Wischen', text: 'Im Privatchat eine Nachricht nach rechts wischen, um direkt darauf zu antworten.' },
      { icon: '😍', title: 'Reaktionen & Medien im Chat', text: 'Nachricht antippen und mit Emoji reagieren – und schickt euch jetzt auch Fotos und Videos.', act: 'dms', btn: 'Nachrichten öffnen' },
    ],
  },
  {
    id: '2026-11-13-dm',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '💬', title: 'Privatnachrichten', text: 'Schreibt euch privat – mit Text oder Sprachnachricht. Nur ihr beide seht den Chat.', act: 'dms', btn: 'Nachrichten öffnen' },
      { icon: '📋', title: 'Aufgaben zuteilen', text: 'Im Chat mit ☑️ eine Aufgabe für dein Gegenüber anlegen – sie kann direkt dort abgehakt werden.' },
      { icon: '🏠', title: 'Wer wohnt wo?', text: 'Unter „Haus“ seht ihr alle nach Stockwerk – vom 1. OG bis in den Keller.', act: 'tab', v: 'house', btn: 'Ansehen' },
    ],
  },
];
